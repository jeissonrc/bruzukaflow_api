const bcrypt = require('bcrypt');
const User = require('../models/User');
const Profile = require('../models/Profile');

const SALT_ROUNDS = 10;

async function init() {
  try {
    // ---------- 1. Criar perfil padrão ----------
    let defaultProfile = await Profile.findOne({ where: { name: 'Administrador Master' } });
    if (!defaultProfile) {
      defaultProfile = await Profile.create({
        name: 'Administrador Master',
        description: 'Perfil Administrador Master do Sistema',
        statusProfile: 1
      });
      console.log('Perfil padrão criado!');
    }

    // ---------- 2. Criar usuário admin ----------
    let adminUser = await User.findOne({ where: { Login: 'admin' } });
    if (!adminUser) {
      const hashedPassword = await bcrypt.hash('123456', SALT_ROUNDS); // Senha inicial padrão
      adminUser = await User.create({
        username: 'admin',
        name: 'Administrador',
        password: hashedPassword,
        active: 1,
        profileId: defaultProfile.id

      });
      console.log('Usuário admin criado!');
    }

    console.log('Seed inicial concluída!');
  } catch (err) {
    console.error('Erro ao executar seed inicial:', err);
  }
}

module.exports = init;
