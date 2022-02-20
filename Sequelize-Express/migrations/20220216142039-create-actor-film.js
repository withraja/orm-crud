'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ActorFilms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FilmId: {
        type: Sequelize.STRING,
        references: {
          model: 'Films',
          key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
      },
      ActorId: {
        type: Sequelize.STRING,
        references: {
          model: 'Actors',
          key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ActorFilms');
  }
};