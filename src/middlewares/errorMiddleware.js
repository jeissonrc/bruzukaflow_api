module.exports = (err, req, res, next) => {
  console.error("API ERROR:", err);

  const status = err.status || 500;
  
  return res.status(status).json({
    success: false,
    error: err.message || "Internal server error",
    status: status
  });
};