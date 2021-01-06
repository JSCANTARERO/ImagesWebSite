const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Index page');
});

router.get('/upload', (req, res) => {
    res.send('Form Upload');
});

router.post('/uplaod', (req, res) => {
    res.send('Uploaded');
});

router.get('/image/:id', (req, res) =>{
    res.send('Profile Image');
});

router.get('/image/:id/delete', (req, res) =>{
    res.send('Image deleted');
});

module.exports = router;