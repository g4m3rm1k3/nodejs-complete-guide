const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("../util/path.js");

const router = express.Router();

const products = [];

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { products, title: "Mikes Products" });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
