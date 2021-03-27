const router = require('express').Router();

const UserController = require('../controllers/UserController');
const authenticate = require('../middleware/authenticate')


router.post('/signUp',authenticate, UserController.register);
router.post('/login', UserController.login);



module.exports = router;