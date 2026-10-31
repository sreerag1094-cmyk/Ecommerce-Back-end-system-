const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/dbConnection")
const orderRoutes = require("./routes/orderRoutes")
const productRoutes = require("./routes/productRoutes")

dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        message:"Ecommerce Backend System"
    })
})
app.use("/api/order",orderRoutes)
app.use("/api/product",productRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})