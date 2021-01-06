const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Index page');
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', (req, res) => {
    console.log(req.file); 
    //Cuando multer sube una imagen este la coloca en la carpeta que public pero ademas
    //hace la informacion de la imagen disponible a traves del req.file
    res.send('Uploaded');
});

router.get('/image/:id', (req, res) =>{
    res.send('Profile Image');
});

router.get('/image/:id/delete', (req, res) =>{
    res.send('Image deleted');
});

module.exports = router;