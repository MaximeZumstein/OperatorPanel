var express = require('express');
var router = express.Router();
const {startPanel} = require('../panel');

router.get('/', function(req, res) {
    startPanel()
        res.send('Birds home page');
    })
router.get('/about', function(req, res) {
        res.send('About birds');
    });

module.exports = router;