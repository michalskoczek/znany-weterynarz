const express = require('express');

const homepageRoute = require('./routes/homepage');
const vetsRoute = require('./routes/vets');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/', homepageRoute);
app.use('/vets', vetsRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.listen(3000, () => {
  console.log('Server is running');
});
