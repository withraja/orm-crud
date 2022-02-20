'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Films extends Model {
    static associate(models) {
      Films.belongsTo(models.productionHouse)
      Films.belongsToMany(models.Actors, {through: models.ActorFilm})
      // define association here
    }
  }
  Films.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    title: DataTypes.STRING,
    releaseDate: DataTypes.DATEONLY,
    synopsis: DataTypes.TEXT,
    rating: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Films',
  });
  return Films;
};