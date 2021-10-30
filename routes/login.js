const { Router } = require('express');

const loginController = require('../controllers/login');

const router = Router();

router.get('/', loginController.getLoginPage);

module.exports = router;
