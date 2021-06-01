const router = require('express').Router();

const AccountController = require('../controllers/AccountController');
const authenticate = require('../middleware/authenticate');
//account
router.post('/signUp', AccountController.register);
router.post('/login', AccountController.login); 
router.get('/read', AccountController.read); 
router.post('/update', authenticate, AccountController.update); 
router.get('/readAdmin', AccountController.readAdmin); 
// router.post('/login',authenticate, UserController.login);


module.exports = router;