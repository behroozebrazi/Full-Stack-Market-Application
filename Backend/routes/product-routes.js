const express = require('express')
const productControllers = require('../controllers/product-controllers')

const router = express.Router()
router.get('/products', productControllers.getAllProducts)
router.get('/products/:id', productControllers.getProduct)

module.exports = router