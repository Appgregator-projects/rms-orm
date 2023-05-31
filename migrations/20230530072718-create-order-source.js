'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderSources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source_name: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('OrderSources');
  }
};