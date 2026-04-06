const express = require('express');
const router = express.Router();
const CategoryTypeController = require('../controllers/CategoryTypeController');
const authMiddleware = require('../middlewares/authMiddleware');

// rotas protegidas:
router.use(authMiddleware);

router.get('/', CategoryTypeController.index);
router.get('/:id', CategoryTypeController.getOne);
router.post('/', CategoryTypeController.store);
router.put('/:id', CategoryTypeController.update);
router.delete('/:id', CategoryTypeController.delete);

module.exports = router;
