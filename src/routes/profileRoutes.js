const authMiddleware = require('../middlewares/authMiddleware');
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');

// rotas protegidas:
router.use(authMiddleware);

router.get('/', ProfileController.index);
router.get('/:id', ProfileController.getOne);
router.post('/', ProfileController.store);
router.put('/:id', ProfileController.update);
router.delete('/:id', ProfileController.delete);

module.exports = router;
