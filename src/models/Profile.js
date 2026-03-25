const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define(
  'Profile',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_Perfil'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'Nome'
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Descricao'
    },
    statusProfile: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      field: 'Status_Perfil'
    }
  },
  {
    tableName: 'perfis',
    timestamps: false
  }
);

module.exports = Profile;
