const express=require('express');
require('dotenv').config();
require("./db/connection")
const Student=require('../src/models/students')
const app=express();



app.use(express.json());
const port=process.env.PORT||3000;


//create new students
app.post('/students',(req,res)=>{
console.log(req.body)
Student.create(req.body).then(()=>{
    res.status(201).send(req.body)
}).catch((error)=>{
    res.status(400).send(error)
});


})


app.listen(port,()=>{
    console.log(`application running http://localhost:${port}`)
})