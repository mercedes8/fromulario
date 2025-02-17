const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false
    },
    season: {
        type: DataTypes.JSON, // Cambiar a JSON para manejar múltiples valores
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sizes: {
        type: DataTypes.JSON,
        allowNull: false
    },
    colors: {
        type: DataTypes.STRING,
        allowNull: false
    },
    style: {
        type: DataTypes.STRING,
        allowNull: false
    },
    design: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discountPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    discountType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    discountStartDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    discountEndDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preSale: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    restockTime: {
        type: DataTypes.STRING,
        allowNull: true
    },
    images: {
        type: DataTypes.STRING,
        allowNull: true
    },
    video: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

module.exports = Product;