const PaymentMethod = require('../models/PaymentMethod');

class PaymentMethodService {
  async getAll() {
    return await PaymentMethod.findAll();
  }

  async getOne(id) {
    return await PaymentMethod.findByPk(id);
  }

  async create(data) {
    if (!data.name) {
      const error = new Error("Name is required");
      error.status = 400;
      throw error;
    }

    const paymentMethod = await PaymentMethod.create(data);
    return paymentMethod;
  }

  async update(id, data) {
    const paymentMethod = await PaymentMethod.findByPk(id);
    if (!paymentMethod) {
      const error = new Error("Payment method not found");
      error.status = 404;
      throw error;
    }

    await paymentMethod.update(data);
    return paymentMethod;
  }

  async delete(id) {
    const paymentMethod = await PaymentMethod.findByPk(id);
    if (!paymentMethod) {
      const error = new Error("Payment method not found");
      error.status = 404;
      throw error;
    }

    await paymentMethod.destroy();
    return { message: "Payment method deleted successfully" };
  }
}

module.exports = new PaymentMethodService();
