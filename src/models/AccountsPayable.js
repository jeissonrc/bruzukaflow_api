const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const AccountType = require('./AccountType');
const PaymentType = require('./PaymentType');

const AccountsPayable = sequelize.define(
  'AccountsPayable',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_Conta'
    },
    accountTypeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'ID_Tipo',
      references: { model: AccountType, key: 'ID_Tipo' }
    },
    nominalDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'Data_Nominal'
    },
    dueDate: { 
      type: DataTypes.DATE,
      allowNull: true,
      field: 'Data_Vencimento'
    },
    paymentDate: { 
      type: DataTypes.DATE,
      allowNull: true,
      field: 'Data_Pagamento'
    },
    paymentTypeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      field: 'ID_Tipo_Pgto',
      references: { model: PaymentType, key: 'ID_Tipo_Pgto' }
    },
    documentNumber: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Num_Documento'
    },
    description: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'Descricao'
    },
    value: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'Valor'
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'Pago'
    },
    originId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      field: 'ID_Origem'
    }
  },
  {
    tableName: 'contas_pagar',
    timestamps: false
  }
);

// associations (used by include)
AccountsPayable.belongsTo(AccountType, { 
  foreignKey: 'accountTypeId', 
  as: 'accountType' 
});
AccountType.hasMany(AccountsPayable, { 
  foreignKey: 'accountTypeId', 
  as: 'payables' 
});

AccountsPayable.belongsTo(PaymentType, { 
  foreignKey: 'paymentTypeId', 
  as: 'paymentType' 
});
PaymentType.hasMany(AccountsPayable, { 
  foreignKey: 'paymentTypeId', 
  as: 'payables' 
});

module.exports = AccountsPayable;
