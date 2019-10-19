const express =  require('express');
const bodyparser =  require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

//Routes import
const getsubfolders = require('./server/routes/getSubFolders');
const getApiShows = require('./server/routes/getApiShows');
const getShows = require('./server/routes/getShows');

var app = express();

app.use(morgan('dev'));

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(cors());

app.use(bodyparser.json());

app.use('/getsubfolders', getsubfolders);
app.use('/api/shows', getApiShows);
// app.use('/shows', getShows);

//error handling
app.use((req, res, next) =>{
    const error = new Error('404 Route not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
   res.status(error.status || 500);
   res.json({
        message : error.message
   });
   console.log(error.message);
});

module.exports = app;