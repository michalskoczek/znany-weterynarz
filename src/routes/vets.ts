import { Router } from 'express';

import {
  getVets,
  getVet,
  getVisit,
  postBookingVisit,
} from '../controllers/vets.js';

const router = Router();

router.get('/', getVets);

router.get('/:id', getVet);

router.get('/:id/visit', getVisit);

router.post('/:id/visit', postBookingVisit);

export default router;
