const mongoose = require("mongoose")
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected Sucessfully");
    } catch (error) {
        console.eroor("MongoDB connection failed:",error.message);
        process.exit(1);
    }
}

module.exports = connectDB;