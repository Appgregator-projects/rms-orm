'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderSource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderSource.init({
    id: DataTypes.INTEGER,
    source_name: DataTypes.STRING,
    created_at: DataTypes.TIMESTAMP,
    updated_at: DataTypes.TIMESTAMP,
  }, {
    sequelize,
    modelName: 'OrderSource',
  });
  return OrderSource;
};