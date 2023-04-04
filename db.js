const mongoose= require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/product?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2")

module.exports=  {connection}