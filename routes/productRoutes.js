const express = require("express");
const productController = require("../controller/productController");

const router = express.Router();

router
  .route("/api/products")
  .get(productController.getAllProducts)
  .post(productController.createProduct)
  .delete(productController.deleteAllProducts);

router
  .route("/api/products/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
