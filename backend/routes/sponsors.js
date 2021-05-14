const router = require('express').Router();

const SponsorController = require('../controllers/SponsorController');
const authenticate = require('../middleware/authenticate');

router.post('/create', SponsorController.create);
router.get('/read', SponsorController.read);
router.post('/update',authenticate, SponsorController.update);

module.exports = router;