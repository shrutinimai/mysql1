const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (id,title, price, imageURL, description) VALUES (?, ?, ?, ?)',
      [this.id,this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE id = ?', [parseInt(id, 10)]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
};
