const products = require('../models/products')

const getAllProducts = (req, res, next) => {
  res.json(products)
}

const getProduct = (req, res, next) => {
  const product = products.find((item) => {
    return String(item._id) === String(req.params.id)
  })
  res.json(product)
}

exports.getAllProducts = getAllProducts
exports.getProduct = getProduct