const express = require('express');

var router = express.Router();

//import controllers
const { 
    getSubFolders 
} = require('../controller/getSubFolders');

router.post('/', getSubFolders);

module.exports = router;