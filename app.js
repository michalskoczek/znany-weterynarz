const express = require('express');

const homepageRoute = require('./routes/homepage');

const app = express();

app.use('/', homepageRoute);

app.listen(3000, () => {
  console.log('Server is running');
});
