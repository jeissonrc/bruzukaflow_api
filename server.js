const app = require('./src/app');
const sequelize = require('./src/config/database');
const initSeed = require('./src/seeders/initialSetup'); // <-- importar seed

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco bem-sucedida!");

    await sequelize.sync(); 
    console.log("Banco sincronizado!");

    // ---------- Seed inicial ----------
    await initSeed();

    // Inicia servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();
