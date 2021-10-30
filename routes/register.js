const { Router } = require('express');

const registerController = require('../controllers/register');

const router = Router();

router.get('/', registerController.getRegister);

module.exports = router;
