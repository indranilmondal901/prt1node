const mongoose = require("mongoose");

const url= "mongodb://localhost:27017";
const db = "Task_api";
const uri = url+"/"+db;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Db is connected to node")
}).catch((err)=>{
    console.log("connection failed")
})