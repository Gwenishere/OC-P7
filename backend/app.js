const Sequelize = require('sequelize'); // installé et mysql aussi
const express = require('express'); // installé
const app = express();  
const bodyParser = require('body-parser'); // installé
const path = require('path'); // installé
const helmet = require('helmet'); // installé
app.use(helmet());
const dotenv = require('dotenv');
dotenv.config(); // installé

const userRoutes = require('./routes/user');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

// en - tête CORS Access-Control-Allow-Origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

/**FIXME:
 * limit 50mbytes ou pas ?
 */
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(bodyParser.json({limit: '50mb'}));

/**TODO:
 * definir les chemins api
  */
 app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes); 
app.use('/api/posts', postsRoutes);
app.use('api/comments', commentsRoutes);

module.exports = app;
