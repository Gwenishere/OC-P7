const express = require('express'); // installé
const app = express();  
/**const bodyParser = require('body-parser'); // déprécié installé**/
const path = require('path'); // installé
const helmet = require('helmet'); // installé
app.use(helmet());
const dotenv = require('dotenv');
dotenv.config(); // installé
const mysql = require('mysql'); // installé
const cors = require('cors');
app.use(cors());

const userRoutes = require('./routes/user'); // import de la route
const postsRoutes = require('./routes/post');
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
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));

/**TODO:
 * definir les chemins api
  */
 // dir pour directory, nom du dossier
app.use('/images', express.static(path.join(__dirname, 'images')));

 // définir les routes
app.use('/user', userRoutes); 
app.use('/post', postsRoutes);
//*app.use('/comments', commentsRoutes);*/

module.exports = app;
