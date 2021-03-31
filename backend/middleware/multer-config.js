const multer = require('multer'); // importation du module

/**FIXME: file ou attachment ? */

// DICTIONNAIRE D IMAGES RECUES
const MIME_TYPES = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/gif': 'gif'
};
// config de l'objet qui sera stocké
const storage = multer.diskStorage({
// destination d'enregistrement des fichiers postés par user
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) =>{
        const name = file.originalname.replace(/\..+$/, '').split(' ').join('_'); // nom fichier
        const extension = MIME_TYPES[file.mimetype];  // son extension
        callback(null, name + Date.now() + '.' + extension);
    }
});
// export du module objet storage, méthode single
module.exports = multer({ storage: storage }).single('attachment');