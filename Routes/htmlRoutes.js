const router = require('express').Router();
const path = require('path');

//route sends 'index.html' when a client makes a GET request
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//route sends 'notes.html when a client makes a GET request
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;