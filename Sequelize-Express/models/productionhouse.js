'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productionHouse extends Model {
    static associate(models) {
      productionHouse.hasMany(models.Films)
      // define association here
    }
  }
  productionHouse.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productionHouse',
  });
  return productionHouse;
};