const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imagewebapp', {
    useNewUrlParser: true
})
    .then(db => console.log('Connected to database imagewebapp'))
    .catch(err => console.error(err));