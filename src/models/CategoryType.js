const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CategoryType = sequelize.define(
  'CategoryType',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_Categoria'
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'Descricao'
    },

    type: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'Tipo'
    },

    specie: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'Especie'
    }
  },
  {
    tableName: 'categorias_tipos_contas',
    timestamps: false
  }
);

module.exports = CategoryType;
