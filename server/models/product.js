'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.ProductDetail, {
        foreignKey: 'productID'
      })
      Product.hasMany(models.OrderDetail, {
        foreignKey: 'productID'
      })
      Product.hasMany(models.Color,{
        foreignKey: 'productID'
      })
      Product.hasMany(models.Size,{
        foreignKey: 'productID'
      })
      Product.hasMany(models.Image,{
        foreignKey: 'productID' 
      })


      Product.belongsTo(models.Category)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageCover: DataTypes.STRING,
    sizeCover: DataTypes.STRING,
    colorCover: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    CategoryId: DataTypes.INTEGER,  
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};