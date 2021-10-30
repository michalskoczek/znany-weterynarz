const { Router } = require('express');

const vetsController = require('../controllers/vets');

const router = Router();

router.get('/', vetsController.getVets);

router.get('/:id', vetsController.getVet);

router.get('/:id/visit', vetsController.getVisit);

router.post('/:id/visit', vetsController.postBookingVisit);

module.exports = router;
