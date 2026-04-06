const CashAccount = require('../models/CashAccount');

class CashAccountService {
  async getAll() {
    return await CashAccount.findAll();
  }

  async getOne(id) {
    return await CashAccount.findByPk(id);
  }

  async create(data) {
    if (!data.name) {
      const err = new Error('Name is required');
      err.status = 400;
      throw err;
    }
    return await CashAccount.create({
      name: data.name,
      description: data.description || null,
      status: data.status !== undefined ? data.status : true
    });
  }

  async update(id, data) {
    const acc = await CashAccount.findByPk(id);
    if (!acc) {
      const err = new Error('CashAccount not found');
      err.status = 404;
      throw err;
    }
    await acc.update({
      name: data.name !== undefined ? data.name : acc.name,
      description: data.description !== undefined ? data.description : acc.description,
      status: data.status !== undefined ? data.status : acc.status
    });
    return acc;
  }

  async remove(id) {
    const acc = await CashAccount.findByPk(id);
    if (!acc) {
      const err = new Error('CashAccount not found');
      err.status = 404;
      throw err;
    }
    await acc.destroy();
    return { message: 'Deleted' };
  }
}

module.exports = new CashAccountService();
