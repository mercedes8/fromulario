const Product = require('../models/productModel');

class ProductController {
    async createProduct(req, res) {
        try {
            console.log('Datos recibidos:', req.body); // Agregar log para ver los datos recibidos
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            console.error('Error al crear el producto:', error); // Agregar más detalles al log de error
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ error: error.errors.map(e => e.message) });
            }
            res.status(500).json({ error: error.message });
        }
    }

    async getProducts(req, res) {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            console.error('Error al obtener los productos:', error); // Agregar más detalles al log de error
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ProductController;