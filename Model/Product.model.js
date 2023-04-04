const mongoose= require("mongoose")

const ProductSchema= mongoose.Schema({
    productId:Number,
    operation:String,
    quantity:Number
})

const ProductModel= mongoose.model("product", ProductSchema)

module.exports={ProductModel}