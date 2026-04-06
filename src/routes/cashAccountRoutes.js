const authMiddleware = require('../middlewares/authMiddleware');
const express = require('express');
const router = express.Router();
const CashAccountController = require('../controllers/CashAccountController');

// rotas protegidas:
router.use(authMiddleware);

// CRUD Cash Accounts
router.get('/', CashAccountController.index);
router.get('/:id', CashAccountController.getOne);
router.post('/', CashAccountController.store);
router.put('/:id', CashAccountController.update);
router.delete('/:id', CashAccountController.remove);

module.exports = router;
