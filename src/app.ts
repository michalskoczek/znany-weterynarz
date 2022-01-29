import express, { Application, NextFunction, Request, Response } from 'express';

import homepageRoute from './routes/homepage.js';
import vetsRoute from './routes/vets.js';
import registerRoute from './routes/register.js';
import loginRoute from './routes/login.js';
import { errorGenerator, errorHandler } from './middlewares/error.js';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', homepageRoute);
app.use('/vets', vetsRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.use(errorGenerator);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running');
});

export default app;
