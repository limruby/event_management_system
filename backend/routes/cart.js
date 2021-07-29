const router = require('express').Router();

const CartController = require('../controllers/CartController');

router.post('/addToCart', CartController.addToCart); 
router.get('/readCart', CartController.readCart); 
router.get('/readOrder', CartController.readOrder); 
router.get('/userReadCart', CartController.userReadCart);
router.post('/updateCart', CartController.updateCart); 
router.get('/deleteOrder', CartController.deleteOrder);

module.exports = router;