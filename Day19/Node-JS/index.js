const express=require('express');
const app=express();
const cors=require('cors')
const client=require("mongodb").MongoClient;
const objId=require("mongodb").ObjectId;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
const DB="mongodb+srv://yasharora2678:Yash1234@cluster0.1tcbk8n.mongodb.net/?retryWrites=true&w=majority"
client.connect(DB).then((database)=>{
dbInstance=database.db("Day19");
UserInstance=dbInstance.collection('Users');
productInstance=dbInstance.collection('Products');
console.log("connected")
}).catch(err=>{
    console.log('Not Connected')
})
app.get('/',(req,res)=>{
res.send("Welcome to our Home Page")
})
app.post('/addUser',(req,res)=>{
    let obj={name:req.body.name,password:req.body.password,role:req.body.role};
    UserInstance.findOne({name:req.body.name}).then((result)=>{
        if(result==null){
            UserInstance.insertOne(obj).then((response)=>{
                console.log("inserted");
                res.status(200).json(response)
            })
        }
        else{
         res.status(409).send("Username already exists")
        }
    })
})
app.get('/getProducts',async(req,res)=>{
   const result= await productInstance.find().toArray().then((result)=>{
    res.send(result)
   }).catch((err)=>{
    console.log(err)
   })
})
app.post('/addProduct',(req,res)=>{
    let obj={id:req.body.prodId,name:req.body.prodName,description:req.body.prodDesc,status:req.body.prodStatus,productBy:req.body.userId}
    productInstance.insertOne(obj).then((result)=>{
        res.sendStatus(200)
    }).catch(err=>{
        console.log(err);
    })
})
app.post('/editProduct',(req,res)=>{
    productInstance.updateOne({_id:new objId(req.body.id)},{$set:{id:req.body.prodId,name:req.body.prodName,description:req.body.prodDesc,status:req.body.prodStatus}}).then((result)=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.log(err)
    })
})
app.post('/deleteProduct',(req,res)=>{
    productInstance.deleteOne({_id:new objId(req.body.id)}).then(function(){
        res.sendStatus(200);
    }).catch(function(error){
        console.log(error); // Failure
    });
})
app.post('/checkUser',(req,res)=>{
    UserInstance.findOne({name:req.body.name}).then((result)=>{
        if(result==null){
            res.status(204).send("User not Found");
        }
        else{
        if(result.password===req.body.password && result.role===req.body.value3){
            res.status(200).json(result);
        }
        else{
            res.status(401).send("Details didn't match");
        }
        }
    })
})
app.listen(5000,function(err){
if(err)
console.log(err)
console.log('Server listening on port 5000')
})