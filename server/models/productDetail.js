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
      ProductDetail.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
      ProductDetail.belongsTo(models.Size, {
        foreignKey: 'size_id'
      });
      ProductDetail.belongsTo(models.Color, {
        foreignKey: 'color_id'
      });
      ProductDetail.belongsTo(models.Image, {
        foreignKey: 'image_id'
      });
    }
  }
  ProductDetail.init({
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductDetail',
  });
  return ProductDetail;
};