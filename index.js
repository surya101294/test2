const express= require("express");
const { connection } = require("./db");
const { ProductModel } = require("./Model/Product.model");
const app= express()

app.get("/", (req,res)=>{
    console.log("Home page");
    res.send("Home")
})

app.post("/add", (req,res)=>{

    try{
        let data= new ProductModel(req.body)
        data.save()
        res.send("Data is Uploaded successfully")
    }catch(err){
        res.send("Error in uploading")
    }
})

app.listen("8080", async()=>{
    try{
         await connection

        console.log("connected to server");
    }
    catch(err){console.log("Something went wrong");}
})
