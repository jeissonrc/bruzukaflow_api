// Middleware para padronizar respostas de sucesso
module.exports = (req, res, next) => {
  // Guardar referência original
  const oldJson = res.json;

  res.json = function (data) {
    // Se já estiver padronizado, não altera
    if (data && data.success !== undefined) {
      return oldJson.call(this, data);
    }

    return oldJson.call(this, {
      success: true,
      data: data,
      status: res.statusCode
    });
  };

  next();
};