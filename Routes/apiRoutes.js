const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const fs = require ('fs');

//using get request for the routes enpoint
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json',"utf8"));
    res.json(dbJson);

});

//using post request to find the routes endpoint
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync('db/db.json',JSON.stringify(dbJson));
    res.json(dbJson);
});

//Bonus: create the delete request to this routes endpoint

module.exports = router;