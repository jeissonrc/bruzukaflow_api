const ProfileService = require('../services/ProfileService');

class ProfileController {

  async index(req, res, next) {
    try {
      const profiles = await ProfileService.getAll();
      return res.status(200).json(profiles);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const profile = await ProfileService.getOne(req.params.id);

      if (!profile) {
        const error = new Error("Profile not found");
        error.status = 404;
        throw error;
      }

      return res.status(200).json(profile);
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const profile = await ProfileService.create(req.body);
      return res.status(201).json(profile);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const profile = await ProfileService.update(req.params.id, req.body);
      return res.status(200).json(profile);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await ProfileService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProfileController();
