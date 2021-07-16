const router = require('express').Router();

const AccountController = require('../controllers/AccountController');
const authenticate = require('../middleware/authenticate');
//account
router.post('/signUp', AccountController.register);
router.post('/login', AccountController.login); 
router.get('/read', AccountController.read); 
router.get('/readAll', AccountController.readAll);
router.post('/update', authenticate, AccountController.update); 
router.get('/readAdmin', AccountController.readAdmin); 
router.get('/deleteOne', AccountController.deleteOne); 

module.exports = router;