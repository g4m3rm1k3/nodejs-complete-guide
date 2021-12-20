const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const productsController  = require("../controllers/products")

const router = express.Router();




router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
