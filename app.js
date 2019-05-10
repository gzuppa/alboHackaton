require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

//Conexión a mongo
mongoose
  .connect('mongodb://localhost/hackathon', {useNewUrlParser: true})
  .then(x => {
    console.log(`Correctamente conectado a Mongo en la siguiente DB: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error conectandose a Mongo', err)
  });

//Debug para Node
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Setup de los middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Setup de Express para ruteo
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      
//Setup de vistas (por si nos da tiempo de levantar lo de Kibana, para hacer un front sencillo)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

//Titulo
app.locals.title = 'albo Hackathon';

//Ruteo
const index = require('./routes/index');
app.use('/', index);


module.exports = app;
