import { Router } from 'express';

import { getRegister } from '../controllers/register.js';

const router: Router = Router();

router.get('/', getRegister);

export default router;
