const {Router} = require('express');
const router = Router();

const Image = require('../models/Image');

router.get('/', async (req, res) => {
    const images = await Image.find();
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', async (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    console.log(image); 
    //Cuando multer sube una imagen este la coloca en la carpeta que public pero ademas
    //hace la informacion de la imagen disponible a traves del req.file

    await image.save();

    res.redirect('/');
});

router.get('/image/:id', (req, res) =>{
    res.send('Profile Image');
});

router.get('/image/:id/delete', (req, res) =>{
    res.send('Image deleted');
});

module.exports = router;