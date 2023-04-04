const mongoose= require("mongoose")

const ProductSchema= mongoose.Schema({
    productId:String,
    operation:String,
    quantity:String
})

const ProductModel= mongoose.model("product", ProductSchema)

module.exports={ProductModel}