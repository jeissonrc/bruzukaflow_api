const OriginAccount = require('../models/OriginAccount');

class OriginAccountService {
  async getAll() {
    return await OriginAccount.findAll();
  }

  async getOne(id) {
    return await OriginAccount.findByPk(id);
  }

  async create(data) {
    if (!data.description) {
      const err = new Error('Description is required');
      err.status = 400;
      throw err;
    }

    return await OriginAccount.create({
      description: data.description,
      obs: data.obs || null,
      category: data.category || null,
      person: data.person !== undefined ? data.person : null
    });
  }

  async update(id, data) {
    const origin = await OriginAccount.findByPk(id);
    if (!origin) {
      const err = new Error('Origin not found');
      err.status = 404;
      throw err;
    }

    await origin.update({
      description: data.description !== undefined ? data.description : origin.description,
      obs: data.obs !== undefined ? data.obs : origin.obs,
      category: data.category !== undefined ? data.category : origin.category,
      person: data.person !== undefined ? data.person : origin.person
    });

    return origin;
  }

  async remove(id) {
    const origin = await OriginAccount.findByPk(id);
    if (!origin) {
      const err = new Error('Origin not found');
      err.status = 404;
      throw err;
    }

    await origin.destroy();
    return { message: 'Origin deleted successfully' };
  }
}

module.exports = new OriginAccountService();
