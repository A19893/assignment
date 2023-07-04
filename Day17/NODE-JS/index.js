const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
// console.log(users)
var fs = require("fs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Get Method
//Initial route to display our main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/Components/home.html"));
});
//This endpint will get a json file
app.get("/json", (req, res) => {
  res.sendFile(path.join(__dirname + "/Services/data.json"));
});
//This endpint will send a boolean value
app.get("/bool", (req, res) => {
  let a = true;
  res.send(a);
});
//This endpint will send a string value
app.get("/string", (req, res) => {
  let name = "Yash";
  res.send(name);
});
//Post method
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname + "/Components/form.html"));
});
app.post("/form", (req, res) => {
  console.log(req.body);
  if (req.body.Name === "Yash") {
    res.send("Response is correct");
  } else {
    res.send("Response is incorrect");
  }
});
//Dynamic Routes
app.get("/name/:name", (req, res) => {
  res.send(req.params.name);
});
//List Users
app.get("/listUsers", (req, res) => {
  fs.readFile(
    path.join(__dirname + "/Services/users.json"),
    "utf8",
    (err, data) => {
      console.log(data);
      res.end(data);
    }
  );
});
// Add Users
app.post("/addUser", (req, res) => {
  console.log("req", req.body);
  if (!fs.existsSync("./Services/users.json")) {
    fs.writeFileSync("./Services/users.json", "[]","utf8");
  }
  fs.readFile("./Services/users.json", "utf8",  ( err,data)=> {
    if (err) {
      console.log(err);
    }
    var users = JSON.parse(data);
    const FilteredData = users.filter((item) => {
      return item.name === req.body.name;
    });
    if (FilteredData.length > 0) {
      res.status(409).send("Username already exists");
    }
    users.push(req.body);
    fs.writeFile("./Services/users.json", JSON.stringify(users), (err) => { 
      // Checking for errors
      if (err) throw err;
      console.log("Done writing"); // Success
      res.sendStatus(200);
    });
  });
});
//Checking User Exists
app.post("/checkUser", (req, res) => {
  console.log(req.body);
  var users;
  fs.readFile("./Services/users.json", "utf8",  ( err,data)=> {
    if (err) {
      console.log(err);
    }
     var users = JSON.parse(data);
  const FilteredData = users.filter((item) => {
    return item.name === req.body.name;
  });
  // console.log(FilteredData.password,req.body.password)
  if (FilteredData?.length == 0) {
    res.status(204).send("User not Found");
  }
  if (FilteredData?.length > 0) {
    if (FilteredData[0].password === req.body.password) {
      res.sendStatus(200);
    } else {
      res.status(401).send("Password Incorrect");
    }
  }
})
});
// Delete User
app.all("*", (req, res) => {
  res.send("404 page not found");
});
app.listen(5000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on port 5000");
});
