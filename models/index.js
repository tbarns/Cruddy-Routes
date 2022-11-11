// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category)

// Categories hasMany Products
Category.hasMany(Product, {
  through:{

},
as: ''

})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag)
//needs to complete this


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product)
//needs to complete this

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
