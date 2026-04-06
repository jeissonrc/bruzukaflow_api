const PaymentType = require('../models/PaymentType');

class PaymentTypeService {
  async getAll() {
    return await PaymentType.findAll();
  }

  async getOne(id) {
    return await PaymentType.findByPk(id);
  }

  async create(data) {
    if (!data.name) {
      const error = new Error("Name is required");
      error.status = 400;
      throw error;
    }

    return await PaymentType.create(data);
  }

  async update(id, data) {
    const payment = await PaymentType.findByPk(id);
    if (!payment) {
      const error = new Error("Payment type not found");
      error.status = 404;
      throw error;
    }

    await payment.update(data);
    return payment;
  }

  async delete(id) {
    const payment = await PaymentType.findByPk(id);
    if (!payment) {
      const error = new Error("Payment type not found");
      error.status = 404;
      throw error;
    }

    await payment.destroy();
    return { message: "Payment type deleted successfully" };
  }
}

module.exports = new PaymentTypeService();
