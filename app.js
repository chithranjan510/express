const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('1st middleware', req.originalUrl);
  next();  // executes next middleware in line
})

app.use((req, res, next) => {
  console.log('2nd middleware');
  res.send('<h1>Hello World</h1>');
})

app.listen(3000);
