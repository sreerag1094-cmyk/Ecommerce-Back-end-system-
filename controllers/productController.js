const Product = require("../models/product")

//add product->post

const addProduct = async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json({
            message:"Product Added Sucessfully",product
        })

    }catch(eroor){
        res.status(500).json({
            message:error.message
        })

    }
}

//get all products-> get

const getProducts = async (req,res)=>{
    try{
        const products = await Product.find()
        res.json(products)
    } catch(eroor){
         res.status(500).json({
            message: error.message
        })
    }
}

//get one item only -> get/id

const getProductsById = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                message:"Products Not Found"
            })
        }
        res.json(product)
    } catch (error) {
       res.status(500).json({
            message: error.message
        })
    }
}
//update product -> put/id
const productUpdate = async(req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate
        (
            req.params.id,
            req.body,
            { new:true }
        )
        if(!product){
         return res.status(404).json({
                message: "Food Not Found"
            })
        }
        res.json({
            message: "Product Updated Sucessfully", food
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//delete

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({
                message: "product Not Found"
            })
        }
        resjson({
            message: "product deleted sucessfully"
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}


module.exports={
    addProduct , getProducts , getProductsById , productUpdate , deleteProduct
}