const express = require('express');
const router = express.Router();
const AccountsReceivableController = require('../controllers/AccountsReceivableController');
const authMiddleware = require('../middlewares/authMiddleware');

// rotas protegidas:
router.use(authMiddleware);


// Rota para gerar várias contas a partir de uma origem
router.post('/multiple', AccountsReceivableController.storeMultiple);

// Rota para buscas avançadas (relatórios)
router.post('/search', AccountsReceivableController.search);

//Rotas Básicas
router.get('/', AccountsReceivableController.index);
router.post('/', AccountsReceivableController.store);
router.get('/:id', AccountsReceivableController.getOne);
router.put('/:id', AccountsReceivableController.update);
router.delete('/:id', AccountsReceivableController.remove);

// Rota para marcar como paga (Recebida)
router.put('/:id/receive', AccountsReceivableController.receive);

// Rota para desmarcar como pago (Marcar como não Recebido)
router.put('/:id/unreceive', AccountsReceivableController.unreceive);

module.exports = router;
