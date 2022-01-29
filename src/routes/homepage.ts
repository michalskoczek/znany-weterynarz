import { Router } from 'express';

import { getHomepage } from '../controllers/homepage.js';

const router: Router = Router();

router.get('/', getHomepage);

export default router;
