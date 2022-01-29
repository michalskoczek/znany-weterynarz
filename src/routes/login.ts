import { Router } from 'express';

import { getLoginPage } from '../controllers/login.js';

const router: Router = Router();

router.get('/', getLoginPage);

export default router;
