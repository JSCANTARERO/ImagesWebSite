const express = require('express');
const path = require('path')
const morgan = require('morgan');
const multer = require('multer');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'));

// Global Variables


// Routes

// Static files

// Start server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
})