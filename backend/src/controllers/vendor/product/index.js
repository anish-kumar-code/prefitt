const createProduct = require('./createProduct');
const getAllProducts = require('./getAllProducts');
const getProductById = require('./getProductById');
const updateProduct = require('./updateProduct');
const deleteProduct = require('./deleteProduct');
const updateStockStatus = require('./updateStockStatus');

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    updateStockStatus,
    deleteProduct
};
