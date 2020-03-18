const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const shredRouter = require('./routers/shredRouter');
const bookRouter = require('./routers/bookRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

//serve static files to enable CSS and scripts
app.use(express.static(path.resolve(__dirname, 'src')));
app.use(express.static(path.resolve(__dirname, './build')));

// main app served up on the HTML file
app.get('/', (req, res) => {
  console.log(`Serving up html file`);
  res.sendFile(path.join(__dirname, './index.html'));
})

// if (process.env.NODE_ENV === "production") {
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   app.get('/', shredRouter);
// }

//routes for the various dB queries needed to hydrate store
app.use('/book', bookRouter);
app.use('/:id', shredRouter);

app.use('/', (err, req, res) => {
  const defaultError = {
    log: 'Express error handler caught error on server.js',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message)
});
  
app.listen(PORT, console.log(`Server listening on port ${PORT}`));