const router = require('express').Router();

const CompetitorController = require('../controllers/CompetitorController');
const authenticate = require('../middleware/authenticate');

router.post('/create', CompetitorController.create);
router.get('/read', CompetitorController.read);
router.post('/update',authenticate, CompetitorController.update);

module.exports = router;