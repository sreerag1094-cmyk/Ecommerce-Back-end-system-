const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userName:{
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },
    address:{
        type:String,
        required:true
    },
    // multiple items so given in array
    items:[
        {
            itemName:String , 
            quantity:Number,
            price:Number
        }
    ],
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        // enum used for optional
        //enum pending and default pending has same spelling
        enum :[
            "pending",
            "Confirmed",
            "Preparing",
            "Out For Delivery",
            "Delivered",
            "Cancelled"
        ],
        default:"pending"
    }
},{
    timestamps: true
}
)

// exporting this model
module.exports = mongoose.model("Order",orderSchema)