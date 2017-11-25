const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const emailModule = require('./app/routes/');

const app = express();

// connect to db
// require('./lib');

// Static path to client files.
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/sankit/api/v1/', routes);
// Our Route server url

// rendering Files
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/`);
});

module.exports = app;
