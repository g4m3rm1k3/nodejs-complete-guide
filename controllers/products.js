const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    title: "Mikes Products",
    path: "/admin/add-product",
    pageTitle: "Add Product",
  });
}

exports.postAddProduct = (req, res, next) => {
  const {title, price, image, desc} = req.body;
  const product = new Product(title,  desc, image, price)
  product.save();
  res.redirect("/");
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      products,
      path: "/shop",
      title: "Products",
      activeShop: true,
    });

  });
}
