const { Router } = require('express');

const homepageController = require('../controllers/homepage');

const router = Router();

router.get('/', homepageController.getHomepage);

module.exports = router;
