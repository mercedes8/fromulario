const express = require('express');
const ProductController = require('../controllers/productController');
const router = express.Router();

const productController = new ProductController();

router.post('/', productController.createProduct.bind(productController));
router.get('/', productController.getProducts.bind(productController));

module.exports = router;