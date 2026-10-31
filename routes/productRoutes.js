const express=require("express")
const {addProduct , getProducts , getProductsById , productUpdate , deleteProduct}=require("../controllers/productController")

const router = express.Router()

router.post("/",addProduct)
router.get("/",getProducts)
router.get("/:id",getProductsById)
router.put("/:id",productUpdate)
router.delete("/:id",deleteProduct)


module.exports=router