'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomerTable.hasOne(models.Order)
    }
  }
  CustomerTable.init({
    id: DataTypes.INTEGER,
    created_at: DataTypes.TIMESTAMP,
    updated_at: DataTypes.TIMESTAMP,
  }, {
    sequelize,
    modelName: 'CustomerTable',
  });
  return CustomerTable;
};