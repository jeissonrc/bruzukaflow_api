const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CashAccount = sequelize.define('CashAccount', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    field: 'ID_Conta'
  },
  name: {
    type: DataTypes.STRING(100),
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
    field: 'Status_Conta'
  }
}, {
  tableName: 'contas_caixa',
  timestamps: false
});

module.exports = CashAccount;
