const router = require('express').Router();

const ForumController = require('../controllers/ForumController');

router.post('/create', ForumController.create);
router.get('/read', ForumController.read); 

module.exports = router;