const router = require('express').Router();

const CartController = require('../controllers/CartController');

router.post('/addToCart', CartController.addToCart);
router.post('/cancelCart', CartController.cancelCart); 
router.get('/readCart', CartController.readCart); 
router.get('/userReadCart', CartController.userReadCart);
router.post('/updateCart', CartController.updateCart); 

module.exports = router;