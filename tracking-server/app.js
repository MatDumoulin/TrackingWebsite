const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const mongoClient = require('mongodb').MongoClient;
const api = require('./routes/api');

const app = express();
const databaseName = "heroku_r72lr11d";

// Adding HSTS, removes the X-Powered-By header and sets the X-Frame-Options header to prevent click jacking, among other things.
app.use(helmet());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

// Using the connection pool provided by the MongoClient driver to manage database connections.
// To make sure that we have it set up before we render the website, we are setting it in the
// promise of the connection pool.
mongoClient.connect(process.env.MONGODB_URI, function (err, client) {
    if (err) throw err;

    const db = client.db(databaseName);
    // Routing all of the database query to the api folder.
    app.use('/api', api(db));

    /**
     * Listen on provided port, on all network interfaces.
     */
    app.use('/*', function (req, res, next) {
        res.sendFile('index.html', { root: path.join(__dirname, 'dist') });
    });
});

//app.use(authMiddleware); // CHecking if auth with firebase.

module.exports = app;
