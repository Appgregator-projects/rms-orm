'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderMenuLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_menu_id: {
        type: Sequelize.INTEGER
      },
      log_title: {
        type: Sequelize.STRING
      },
      log_description: {
        type: Sequelize.STRING
      },
      created_by_name: {
        type: Sequelize.STRING
      },
      created_by_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.TIMESTAMP
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderMenuLogs');
  }
};