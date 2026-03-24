const CashAccountService = require('../services/CashAccountService');

class CashAccountController {
  async index(req, res, next) {
    try {
      const data = await CashAccountService.getAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const data = await CashAccountService.getOne(req.params.id);
      if (!data) throw Object.assign(new Error('CashAccount not found'), { status: 404 });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const data = await CashAccountService.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const data = await CashAccountService.update(req.params.id, req.body);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async remove(req, res, next) {
    try {
      const data = await CashAccountService.remove(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CashAccountController();
