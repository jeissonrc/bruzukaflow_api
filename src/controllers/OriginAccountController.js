const OriginAccountService = require('../services/OriginAccountService');

class OriginAccountController {
  async index(req, res, next) {
    try {
      const data = await OriginAccountService.getAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const data = await OriginAccountService.getOne(req.params.id);
      if (!data) {
        const err = new Error('Origin not found');
        err.status = 404;
        throw err;
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const data = await OriginAccountService.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const data = await OriginAccountService.update(req.params.id, req.body);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async remove(req, res, next) {
    try {
      const data = await OriginAccountService.remove(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new OriginAccountController();
