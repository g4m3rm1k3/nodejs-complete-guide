const path = require("path");
const express = require("express");

const rootDir = require("../util/path.js");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    products,
    path: "/shop",
    pageTitle: "Products",
  });
});
module.exports = router;
