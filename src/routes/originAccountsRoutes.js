const express = require('express');
const router = express.Router();
const OriginAccountController = require('../controllers/OriginAccountController');
const authMiddleware = require('../middlewares/authMiddleware');

// rotas protegidas
router.use(authMiddleware);

// CRUD básico
router.get('/', OriginAccountController.index);
router.get('/:id', OriginAccountController.getOne);
router.post('/', OriginAccountController.store);
router.put('/:id', OriginAccountController.update);
router.delete('/:id', OriginAccountController.remove);

module.exports = router;
