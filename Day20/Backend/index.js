const express=require("express")
const app=express();
const cors=require("cors");
const client=require("mongodb").MongoClient;
const objId=require("mongodb").ObjectId
client.connect("mongodb+srv://yasharora2678:Yash1234@cluster0.oo1m3bx.mongodb.net/?retryWrites=true&w=majority").then((database)=>{
    dbInstance=database.db("LocationsProject");
    locationInstance=dbInstance.collection("Locations");
    console.log("connected")
}).catch(err=>{
    console.log("Not Connected")
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
res.send("Welcome to our Home Page")
})
app.get('/getLocations',(req,res)=>{
    locationInstance.find({}).toArray().then((result)=>{
        console.log(result);
        return res.status(200).send(result)
    }).catch(err=>{
        console.log(err);
    })
})
app.get('/searchItems/:id',(req,res)=>{
    const data=req.params.id;
    console.log(data)
    // locationInstance.updateOne({_id:new objId(id)},{$set:{checked:true}}).then((result)=>{
    //     console.log("updated")
    //     res.sendStatus(200)
    // })
    res.sendStatus(200)
})
app.get('/clearLocations',(req,res)=>{
    locationInstance.updateMany({},{$set:{checked:false}}).then((result)=>{
        console.log("updated")
        res.sendStatus(200)
    })
})
app.listen(5000,function(err){
    if(err)
    console.log(err)
    console.log("Server listening on port 5000")
})