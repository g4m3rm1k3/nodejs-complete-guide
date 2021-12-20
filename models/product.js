const products = [];

module.exports = class Product {
  constructor(title, desc, image, price){
    this.title = title;
    this.desc = desc;
    this.image = image;
    this.price = price;
  }

  save(){
    products.push(this);
  }

  static fetchAll(){
    return products;
  }
}
