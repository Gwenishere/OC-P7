const express = require('express'); // installé
const app = express();  
const bodyParser = require('body-parser'); // installé
const path = require('path'); // installé
const helmet = require('helmet'); // installé
app.use(helmet());
const dotenv = require('dotenv');
dotenv.config(); // installé
const mysql = require('mysql'); // installé
const cors = require('cors');
app.use(cors());

const userRoutes = require('./routes/user'); // import de la route
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

// pour tester
/*app.get('/signup', (req, res) => {
  db.query(
   "INSERT INTO user (email, password) VALUES ('mail@mail.com', 'Motdep123');",
     (err, results)=> {
       console.log(err);
       res.send(results);
     }
  );
 });*/

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

app.use('/user', userRoutes); 
//app.use('/posts', postsRoutes);
//app.use('/comments', commentsRoutes);

module.exports = app;
