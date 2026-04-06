const express = require('express');
const router = express.Router();
const IncomeController = require('../controllers/IncomeController');
const authMiddleware = require('../middlewares/authMiddleware');

// rotas protegidas:
router.use(authMiddleware);

// Rotas básicas CRUD
router.get('/', IncomeController.index);              // Listar todas as receitas (incomes)
router.get('/:id', IncomeController.getOne);          // Obter receita específica
router.post('/', IncomeController.store);            // Criar nova receita
router.put('/:id', IncomeController.update);         // Atualizar receita
router.delete('/:id', IncomeController.remove);      // Remover receita

module.exports = router;
