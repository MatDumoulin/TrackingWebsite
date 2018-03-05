const express = require('express');
const router = express.Router();
const jwtMiddleware = require('express-jwt');

// Getting all the handlers for the routes.
const login = require('./login');
const configs = require('./config');


function apiManager(db) {
    const usersCollection = db.collection('users');

    router.use(jwtMiddleware({secret: process.env.JWT_SALT}, function(req, res) {
        console.log(req);
      }).unless({path: ['/api/configs', '/api/login']}));

    router.use(function(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        next();
    });

    router.post('/login', login(usersCollection));
    router.get('/configs', configs);

    return router;
}

module.exports = apiManager;
