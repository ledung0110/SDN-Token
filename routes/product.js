import express from 'express'
import productController from '../controllers/productController.js'

const productRouter = express.Router()

// Activities -> User object
productRouter.get('/', (req, res)=>{
    productController.getAllProducts(req, res)
})

productRouter.get('/:id', async(req, res)=>{
    res.send("Get product by Id")
})

productRouter.post('/create', async(req, res)=>{
    res.send("Create a new Product")
})

export default productRouter