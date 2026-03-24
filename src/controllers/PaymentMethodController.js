const PaymentMethodService = require('../services/PaymentMethodService');

class PaymentMethodController {
  async index(req, res, next) {
    try {
      const methods = await PaymentMethodService.getAll();
      res.status(200);
      return res.json(methods);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const method = await PaymentMethodService.getOne(req.params.id);
      if (!method) {
        const error = new Error("Payment method not found");
        error.status = 404;
        throw error;
      }

      res.status(200);
      return res.json(method);
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const method = await PaymentMethodService.create(req.body);
      res.status(201);
      return res.json(method);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const method = await PaymentMethodService.update(req.params.id, req.body);
      res.status(200);
      return res.json(method);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await PaymentMethodService.delete(req.params.id);
      res.status(200);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new PaymentMethodController();
