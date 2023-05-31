'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderMenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderMenu.init({
    id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    station_id : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderMenu',
  });
  return OrderMenu;
};