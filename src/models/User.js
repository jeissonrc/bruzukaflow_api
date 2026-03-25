const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Profile = require('./Profile');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_Usuario'
    },

    username: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'Login'
    },

    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'Nome'
    },

    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'Senha'
    },

    active: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 1,
      field: 'Ativo'
    },

    profileId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      field: 'ID_Perfil',
      references: {
        model: 'perfis',
        key: 'ID_Perfil'
      }
    }
  },
  {
    tableName: 'usuarios',
    timestamps: false
  }
);

// RELACIONAMENTO
User.belongsTo(Profile, {
  foreignKey: 'profileId',
  as: 'profile'
});

Profile.hasMany(User, {
  foreignKey: 'profileId',
  as: 'users'
});

module.exports = User;
