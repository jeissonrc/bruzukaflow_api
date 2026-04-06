const express = require('express');
const router = express.Router();
const AccountsPayableController = require('../controllers/AccountsPayableController');
const authMiddleware = require('../middlewares/authMiddleware');

// rotas protegidas:
router.use(authMiddleware);


// Rota para gerar várias contas a partir de uma origem
router.post('/multiple', AccountsPayableController.storeMultiple);

// Rota para buscas avançadas (relatórios)
router.post('/search', AccountsPayableController.search);

//Rotas Básicas
router.get('/', AccountsPayableController.index);
router.post('/', AccountsPayableController.store);
router.get('/:id', AccountsPayableController.getOne);
router.put('/:id', AccountsPayableController.update);
router.delete('/:id', AccountsPayableController.remove);

// Rota para marcar como paga
router.put('/:id/pay', AccountsPayableController.pay);

// Rota para desmarcar como pago
router.put('/:id/unpay', AccountsPayableController.unpay);

module.exports = router;
