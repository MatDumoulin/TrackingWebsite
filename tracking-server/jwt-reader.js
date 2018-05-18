const jwt = require('jsonwebtoken');
const JWT_SALT = process.env.JWT_SALT;

function getUserId(req) {
    try {
        // The substring is to remove the 'Bearer ' string before the jwt.
        // This prefix must be in the header for the JWT middleware, but not for the jsonwebtoken library.
        const decoded = jwt.verify(req.headers.authorization.substring(7), JWT_SALT);
        return decoded.id;
    } catch (e) {
        console.log(e);
        return res.status(401).send('unauthorized');
    }

}

module.exports = getUserId;
