const authMiddleware = require('../middlewares/authMiddleware');
const express = require('express');
const router = express.Router();
const PaymentTypeController = require('../controllers/PaymentTypeController');

// rotas protegidas:
router.use(authMiddleware);

router.get('/', PaymentTypeController.index);
router.get('/:id', PaymentTypeController.getOne);
router.post('/', PaymentTypeController.store);
router.put('/:id', PaymentTypeController.update);
router.delete('/:id', PaymentTypeController.delete);

module.exports = router;
