const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PaymentMethod = sequelize.define('PaymentMethod', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    field: 'ID_Forma_Pgto'
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'Nome'
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'Descricao'
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: 'Status_Forma'
  }
}, {
  tableName: 'formas_pgto',
  timestamps: false
});

module.exports = PaymentMethod;
