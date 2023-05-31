'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderMenuLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderMenuLogs.init({
    id: DataTypes.INTEGER,
    order_menu_id: DataTypes.INTEGER,
    log_title: DataTypes.STRING,
    log_description: DataTypes.STRING,
    created_by_name: DataTypes.STRING,
    created_by_id: DataTypes.INTEGER,
    created_at: DataTypes.TIMESTAMP
  }, {
    sequelize,
    modelName: 'OrderMenuLogs',
  });
  return OrderMenuLogs;
};