const mongoose= require("mongoose")

const productSchema = mongoose.Schema({
    "productId":Number,
    "operation":String,
    "quantity":Number,
})

const ProductModel= mongoose.model("product", productSchema)

module.exports={ProductModel}