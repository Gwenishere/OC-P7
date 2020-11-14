const Sequelize = require('sequelize'); // installé et mysql aussi
const express = require('express'); // installé
const app = express();  
const bodyParser = require('body-parser'); // installé
const path = require('path'); // installé
const helmet = require('helmet'); // installé
app.use(helmet());
const dotenv = require('dotenv');
dotenv.config(); // installé




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });




  
module.exports = app;
