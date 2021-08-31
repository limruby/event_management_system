const router = require('express').Router();
const authenticate = require('../middleware/authenticate');

const EvaluationController = require('../controllers/EvaluationController');

router.post('/create', authenticate, EvaluationController.create);
router.post('/update', authenticate, EvaluationController.update);
router.get('/deletePair', authenticate, EvaluationController.deletePair);
router.get('/read', EvaluationController.read);
router.get('/readAll', EvaluationController.readAll);

module.exports = router;