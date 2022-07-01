const express =require("express")
const App= express()
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel =require('./models/Form')
require("../db")
App.use(express.json())
App.use(cors())


App.post('/addUser',async(req,res)=>{

const name= req.body.name;
const age= req.body.age;
const email= req.body.email;
const password= req.body.password;

const user= new UserModel({name: name, age:age, email: email, password: password
})
 await user.save();
res.send("inserted Data")
})

App.get('/read',async(req,res)=>{
    UserModel.find({}, (err, result)=>{
    if(err){
        res.send(error);
    }    
    else{
        res.send(result);

    }
    } ) 
    await user.save();
   res.send("inserted Data")
   })

   App.get('/read',async(req,res)=>{
    const user= new UserModel({name: "Sadia Ambreen"
   })
    await user.save();
   res.send("inserted Data")
   })


App.listen(3000, ()=>{
    console.log("running on port 3000");
});