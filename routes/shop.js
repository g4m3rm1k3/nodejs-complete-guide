const path = require("path");
const express = require("express");

const rootDir = require("../util/path.js");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  res.render("shop", {
    products,
    path: "/shop",
    title: "Products",
    activeShop: true,
  });
});
module.exports = router;
