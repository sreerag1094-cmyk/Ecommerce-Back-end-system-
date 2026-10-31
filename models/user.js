const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        trim: true
    },
    phone: { type: String,
         trim: true, 
         maxlength: 25,
          default: "" },
  address: { type: String,
     trim: true,
      maxlength: 250, 
      default: "" },
     status:{
        type:Boolean,
        default:true
    }
}
,{
    timestamps: true
})


module.exports = mongoose.model("User",userSchema)