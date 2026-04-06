const express = require('express');
const router = express.Router();
const AccountTypeController = require('../controllers/AccountTypeController');
const authMiddleware = require('../middlewares/authMiddleware');

// rotas protegidas:
router.use(authMiddleware);

router.get('/', AccountTypeController.index);
router.get('/:id', AccountTypeController.getOne);
router.post('/', AccountTypeController.store);
router.put('/:id', AccountTypeController.update);
router.delete('/:id', AccountTypeController.delete);

module.exports = router;
