'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.CustomerTable, {
        foreignKey: 'table_id',
      });
      Order.belongsTo(models.OrderSource, {
        foreignKey: 'order_source_id',
      });
    }
  }
  Order.init({
    id: DataTypes.INTEGER,
    order_source_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    table_id: DataTypes.INTEGER,
    created_at: DataTypes.TIMESTAMP,
    updated_at: DataTypes.TIMESTAMP
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};

