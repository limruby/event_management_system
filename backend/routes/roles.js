const router = require('express').Router();

const RoleController = require('../controllers/RoleController');

router.get('/readRole', RoleController.readRole);

module.exports = router;