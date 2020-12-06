const multer = require('multer'); // importation du module
// DICTIONNAIRE D IMAGES RECUES
const MIME_TYPES = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/gif': 'gif'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) =>{
        const name = file.originalname.replace(/\..+$/, '').split(' ').join('_'); // nom fichier
        const extension = MIME_TYPES[file.mimetype];  // son extension
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).single('image');