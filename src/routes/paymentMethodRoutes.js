const express = require('express');
const router = express.Router();
const PaymentMethodController = require('../controllers/PaymentMethodController');
const authMiddleware = require('../middlewares/authMiddleware');

// Todas as rotas protegidas
router.use(authMiddleware);

router.get('/', PaymentMethodController.index);
router.get('/:id', PaymentMethodController.getOne);
router.post('/', PaymentMethodController.store);
router.put('/:id', PaymentMethodController.update);
router.delete('/:id', PaymentMethodController.delete);

module.exports = router;
