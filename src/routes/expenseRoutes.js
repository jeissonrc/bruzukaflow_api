const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/ExpenseController');
const authMiddleware = require('../middlewares/authMiddleware');

// rotas protegidas:
router.use(authMiddleware);

// CRUD Expenses
router.get('/', ExpenseController.index);
router.get('/:id', ExpenseController.getOne);
router.post('/', ExpenseController.store);
router.put('/:id', ExpenseController.update);
router.delete('/:id', ExpenseController.remove);

module.exports = router;
