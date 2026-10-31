const Order = require("../models/order")

//place order -> post
const createOrder = async(req,res)=>{
    try{
        const order=await Order.create(req.body)
        res.status(201).json({
            message:"order placed sucessfully",order
        })
    }catch(error){
        res.status(500).json({
            message:error.message
        })

    }
}
//get all orders ->get
const getOrders = async(req,res)=>{
    try{
        const orders = await Order.find()
        res.json(orders)

    }catch(error){
        res.status(500).json({
            message:error.message
        })

    }
}

//get 1 order -> get/id

const getOrderById = async(req,res)=>{
    try{
        const order = await Order.findById(req.params.id)
        if(!order){
          return res.status(404).json({
                message:"Order Not Found"
            })
        }
        //order undenkil
        res.json(order)
    }
    // if nothing is left
    catch(error){
        res.status(500).json({
            message:error.message
        })

    }
}

//update Order ->put
const updateOrder = async(req,res)=>{
    try{
        const order = await Order.findByIdAndUpdate(req.params.id,req.body,{new: true})
      // if requested id not available in the order
        if (!order) {
            return res.status(404).json({
                message: "order Not Found"
            })
        }
        res.json({
            message: "Order Updated Sucessfully", order
        })

    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//to delete order
const deleteOrder = async(req,res)=>{
    try {
        const order = await Order.findByIdAndDelete(req.params.id)
        if(!order){
             return res.status(404).json({
                message: "order Not Found"
            })
        }
         resjson({
            message: "order is deleted sucessfully"
        })
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

module.exports={
    createOrder,getOrders,getOrderById,updateOrder,deleteOrder
}