'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.TIMESTAMP
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.TIMESTAMP
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stations');
  }
};