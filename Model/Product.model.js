const mongoose= require("mongoose")

const productSchema = mongoose.Schema({
    "productId":String,
    "operation":String,
    "quantity":String,
})

const ProductModel= mongoose.model("product", productSchema)

module.exports={ProductModel}