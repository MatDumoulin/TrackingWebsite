var firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

// Initialize Firebase for the application
const config = {
    apiKey: "AIzaSyAEuO9LAxQuSLlUWdW9-jAoA5_W5Xryvss",
    authDomain: "tracking-22229.firebaseapp.com",
    databaseURL: "https://tracking-22229.firebaseio.com",
    projectId: "tracking-22229",
    storageBucket: "",
    messagingSenderId: "912799812928"
  };

firebase.initializeApp(config);

function isAuthenticated(req, res, next) {
    let user = firebase.auth().currentUser;
    if (user !== null) {
        req.user = user;
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = isAuthenticated;
