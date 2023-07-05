const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const client = require("mongodb").MongoClient;
const objId = require("mongodb").ObjectId;
const DB ="mongodb+srv://Yash:Yash1234@project1.yxt5vco.mongodb.net/?retryWrites=true&w=majority";client
  .connect(DB)
  .then((database) => {
    dbInstance = database.db("Day18");
    weatherInstance = dbInstance.collection("WeatherApi");
    UserInstance = dbInstance.collection("Users");
    console.log("connected");
  })
  .catch((err) => {
    console.log("Not Connected");
  });
app.get("/", (req, res) => {
  res.send("Aagye");
});
app.post('/addUser',(req,res)=>{
    let obj={name:req.body.name,password:req.body.password};
    UserInstance.findOne({name:req.body.name}).then((result)=>{
        if(result==null){
            UserInstance.insertOne(obj).then((result)=>{
                console.log(result);
                console.log("inserted");
            })
            res.sendStatus(200)
        }
        else{
         res.status(409).send("Username already exists")
        }
    })
})
app.post('/checkUser',(req,res)=>{
    UserInstance.findOne({name:req.body.name}).then((result)=>{
        if(result==null){
            res.status(204).send("User not Found");
        }
        else{
        if(result.password===req.body.password){
            res.sendStatus(200);
        }
        else{
            res.status(401).send("Password Incorrect");
        }
        }
    })
})
app.post('/insertData',(req,res)=>{
    // console.log(req.body)
    weatherInstance.findOne({name:req.body.data.name}).then((result)=>{
        if(result==null){
            let obj={name:req.body.data.name,temp:req.body.data.main.temp}
       weatherInstance.insertOne(obj).then((result)=>{
        console.log(result);
       })
        }else{
          weatherInstance.updateOne({name:req.body.name},{$set:{name:req.body.data.name,temp:req.body.data.main.temp}})
          console.log("updated");
        }
        res.send("domne")
    })
})
app.get('/getData/:name',(req,res)=>{   
    weatherInstance.findOne({name:req.params.name}).then((result)=>{
        console.log(result)
        res.send(result);
    })
})
app.listen(5000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on port 5000");
});
