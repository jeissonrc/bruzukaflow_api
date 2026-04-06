const authMiddleware = require('../middlewares/authMiddleware');
const UserController = require('../controllers/UserController');
const router = require('express').Router();

// rota pública: login
router.post('/login', UserController.login);

// rotas protegidas:
router.use(authMiddleware);

// Rotas Básicas
router.get('/', UserController.index);
router.get('/:id', UserController.getOne);
router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);


module.exports = router;
