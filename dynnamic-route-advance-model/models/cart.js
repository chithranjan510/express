const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

module.exports = class Cart {
  // fetch the previous cart data
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err && fileContent.length > 0) {
        cart = JSON.parse(fileContent);
      }

      // analyze the cart => see if the product already exist
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      let updatedProduct;
      // add new product/ increase the quantity
      if (existingProductIndex !== -1) {
        let existingProduct = cart.products[existingProductIndex];
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const existingProductIndex = updatedCart.products.findIndex(
        (prod) => prod.id === id
      );
      if(existingProductIndex === -1) {
        return;
      }
      updatedCart.totalPrice -=
        productPrice * updatedCart.products[existingProductIndex].qty;
      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );
      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (!err && fileContent.length > 0) {
        return cb(JSON.parse(fileContent));
      } else {
        return cb(null);
      }
    });
  }
};
