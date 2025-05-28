const express = require('express');
const { createProduct, getAllProducts, getProductById, updateProduct, updateStockStatus, deleteProduct } = require('../controllers/vendor/product');
const fileUploader = require('../middlewares/fileUploader');

const router = express.Router();

router.get("/test", (req, res) => {
    res.status(200).json({ message: "this is vendor test route" });
})

//------------------------------------------------
// product managment
//------------------------------------------------
router.post('/product', fileUploader("product", [{ name: "primary_image", maxCount: 1 }, { name: "gallery_image", maxCount: 10 }]), createProduct);
router.get('/product', getAllProducts);
router.get('/product/:id', getProductById);
router.patch('/product/:id', fileUploader("product", [{ name: "primary_image", maxCount: 1 }, { name: "gallery_image", maxCount: 10 }]), updateProduct);
router.patch("/product/:id/stock-status", updateStockStatus);
router.delete('/product/:id', deleteProduct);




module.exports = router;