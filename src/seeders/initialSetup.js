const bcrypt = require('bcrypt');
const User = require('../models/User');
const Profile = require('../models/Profile');

const SALT_ROUNDS = 10;

async function init() {
  try {
    // ---------- 1. Criar perfis padrões ----------
    let adminProfile = await Profile.findOne({ where: { name: 'Administrador Master' } });
    if (!adminProfile) {
      adminProfile = await Profile.create({
        name: 'Administrador Master',
        description: 'Perfil Administrador Master do Sistema',
        statusProfile: 1
      });
      console.log('Perfil admin padrão criado!');
    }

    let commonProfile = await Profile.findOne({ where: { name: 'Usuário Comum' } });
    if (!commonProfile) {
      commonProfile = await Profile.create({
        name: 'Usuário Comum',
        description: 'Perfil padrão de usuário comum',
        statusProfile: 1
      });
      console.log('Perfil comum padrão criado!');
    }

    // ---------- 2. Criar usuários padrões ----------
    const defaultUsers = [
      {
        username: 'admin',
        name: 'Administrador',
        password: '123456',
        active: 1,
        profileId: adminProfile.id
      },
      {
        username: 'carlos',
        name: 'Carlos Silva',
        password: '123456',
        active: 1,
        profileId: commonProfile.id
      },
      {
        username: 'maria',
        name: 'Maria Santos',
        password: '123456',
        active: 1,
        profileId: commonProfile.id
      },
      {
        username: 'joao',
        name: 'João Oliveira',
        password: '123456',
        active: 0,
        profileId: commonProfile.id
      }
    ];

    for (const defaultUser of defaultUsers) {
      const existingUser = await User.findOne({ where: { username: defaultUser.username } });
      if (existingUser) {
        continue;
      }

      const hashedPassword = await bcrypt.hash(defaultUser.password, SALT_ROUNDS);
      await User.create({
        username: defaultUser.username,
        name: defaultUser.name,
        password: hashedPassword,
        active: defaultUser.active,
        profileId: defaultUser.profileId
      });

      console.log(`Usuário padrão '${defaultUser.username}' criado!`);
    }

    console.log('Seed inicial concluída!');
  } catch (err) {
    console.error('Erro ao executar seed inicial:', err);
  }
}

module.exports = init;
