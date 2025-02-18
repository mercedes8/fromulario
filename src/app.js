const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const { connectDB, sequelize } = require('../config/database'); // Asegúrate de que la importación sea correcta

connectDB();

const app = express();
const PORT = process.env.PORT || 5001; // Cambiar el puerto a 5001

app.use(cors()); // Usar el middleware cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });