const router = require('express').Router();
const authenticate = require('../middleware/authenticate');

const JudgeController = require('../controllers/JudgeController');

router.post('/create',JudgeController.create);
router.post('/update', authenticate, JudgeController.update);
router.get('/read', JudgeController.read);
router.get('/readAll', JudgeController.readAll);

module.exports = router;