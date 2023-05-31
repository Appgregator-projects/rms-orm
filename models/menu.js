'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init({
    id: DataTypes.INTEGER,
    menu_name: DataTypes.STRING,
    menu_type: DataTypes.STRING,
    menu_price: DataTypes.STRING,
    created_at: DataTypes.TIMESTAMP,
    updated_at: DataTypes.TIMESTAMP,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};