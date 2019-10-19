const express = require('express');

var router = express.Router();

//import controllers
const { 
    getApiShows 
} = require('../controller/getApiShows');

router.get('/', getApiShows);

module.exports = router;