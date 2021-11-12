const express = require('express');

const homepageRoute = require('./routes/homepage');
const vetsRoute = require('./routes/vets');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const { errorGenerator, errorHandler } = require('./middlewares/error');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', homepageRoute);
app.use('/vets', vetsRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.use((req, res, nex) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((next, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(3000, () => {
  console.log('Server is running');
});
