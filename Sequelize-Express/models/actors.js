'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    static associate(models) {
      Actors.belongsTo(models.Films)
      // define association here
    }
  }
  Actors.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    FilmId: DataTypes.STRING,
    birth: DataTypes.DATEONLY,
    age: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Actors',
  });
  return Actors;
};