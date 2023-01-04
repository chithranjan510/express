const express = require('express');

const path = require('path');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactUsRoute = require('./routes/contact-us');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);
app.use(contactUsRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
})

app.listen(3000);
