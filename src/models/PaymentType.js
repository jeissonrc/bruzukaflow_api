const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PaymentType = sequelize.define(
  'PaymentType',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_Tipo_Pgto'
    },
    name: {
      type: DataTypes.STRING(50),
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
      defaultValue: 1,
      field: 'Status_Tipo'
    }
  },
  {
    tableName: 'tipos_pgto',
    timestamps: false
  }
);

module.exports = PaymentType;
