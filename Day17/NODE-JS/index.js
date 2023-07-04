const express=require("express");
const app=express();
const path=require('path')
var fs=require("fs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Get Method
//Initial route to display our main page
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/Components/home.html'))
})
//This endpint will get a json file
app.get('/json',(req,res)=>{
    res.sendFile(path.join(__dirname+'/Services/data.json'))
})
//This endpint will send a boolean value
app.get('/bool',(req,res)=>{
    let a=true
    res.send(a)
})
//This endpint will send a string value
app.get('/string',(req,res)=>{
    let name="Yash"
    res.send(name)
})
//Post method
app.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname+'/Components/form.html'))
})
app.post('/form',(req,res)=>{
    console.log(req.body)
    if(req.body.Name==="Yash"){
        res.send("Response is correct")
    }
    else{
        res.send("Response is incorrect")
    }
    }
)
//Dynamic Routes
app.get('/name/:name',(req,res)=>{
    res.send(req.params.name)
})
//List Users
app.get('/listUsers',(req,res)=>{
    fs.readFile( path.join(__dirname+'/Services/users.json'), 'utf8',  (err, data)=> {
        console.log( data );
        res.end( data );
     });
})
// Add Users
app.get('/addUser',(req,res)=>{


})
// Delete User
app.all('*',(req,res)=>{
    res.send("404 page not found")
})
app.listen(5000,function(err){
    if(err)
    console.log(err)
    console.log("Server listening on port 5000")
})