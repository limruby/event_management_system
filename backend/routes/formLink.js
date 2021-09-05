const router = require('express').Router();
const authenticate = require('../middleware/authenticate');

const FormLinkController = require('../controllers/FormLinkController');

router.post('/create', authenticate, FormLinkController.create);
router.post('/update', authenticate, FormLinkController.update);
router.get('/remove', authenticate, FormLinkController.remove);
router.get('/read', FormLinkController.read);
router.get('/readAll', FormLinkController.readAll);

module.exports = router;