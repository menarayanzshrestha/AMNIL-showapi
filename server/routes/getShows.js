const express = require('express');

var router = express.Router();

//import controllers
const { 
    getShows 
} = require('../controller/getShows');

router.post('/', getShows);

module.exports = router;