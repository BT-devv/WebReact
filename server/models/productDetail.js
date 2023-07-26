'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductDetail.hasMany(models.Color, {
        foreignKey: 'productDetailID'
      })
      ProductDetail.hasMany(models.Size, {
        foreignKey: 'productDetailID'
      })
      ProductDetail.hasMany(models.Image, {
        foreignKey: 'productDetailID'
      })

      ProductDetail.belongsTo(models.Product)
      ProductDetail.belongsTo(models.Category)
    }
  }
  ProductDetail.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    productID: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductDetail',
  });
  return ProductDetail;
};