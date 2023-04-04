const express= require("express");
const { connection } = require("./db");
const { ProductModel } = require("./Model/Product.model");
const app= express()
app.use(express.json())
app.get("/", async(req,res)=>{
    let data= await ProductModel.find({})
    console.log(data);
    res.send(data)
})

app.post("/add", async(req,res)=>{
// const {productId,operation,quantity}= req.body
console.log(req.body);
    try{
        const data=  new ProductModel(req.body)
        await data.save()
        res.send("Data is Uploaded successfully")
    }catch(err){
        res.send({"msg":"Error in Uploading data", "err":err})
    }
})

app.delete("/subtract/:id", async(req,res)=>{
    let id=req.params.id
    try{
        
         await ProductModel.findByIdAndDelete({"_id":id})
        res.send("Data is deleted successfully")
    }catch(err){
        res.send({"msg":"Error in Updating", "err":err})
    }
})

app.listen("8080", async()=>{
    try{
         await connection

        console.log("connected to server");
    }
    catch(err){console.log("Something went wrong")}
})
