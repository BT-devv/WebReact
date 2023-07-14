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
      ProductDetail.hasOne(models.Product)
      ProductDetail.hasMany(models.Color)
      ProductDetail.hasMany(models.Size)
      ProductDetail.hasMany(models.Image)
    }
  }
  ProductDetail.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductDetail',
  });
  return ProductDetail;
};