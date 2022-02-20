'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActorFilm extends Model {
    static associate(models) {
      models.Actors.belongsToMany(models.Films, {through: models.ActorFilm})
      models.Films.belongsToMany(models.Actors, {through: models.ActorFilm})
      // define association here
    }
  }
  ActorFilm.init({
    FilmId: DataTypes.STRING,
    ActorId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ActorFilm',
  });
  return ActorFilm;
};