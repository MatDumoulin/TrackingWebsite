const CLIENT_ID = process.env.GOOGLE_AUTH_ID;
const JWT_SALT = process.env.JWT_SALT;

// Sends the app configurations to the client.
function configs(req, res) {
    if (!CLIENT_ID || !JWT_SALT) {
        console.log("The CLIENT_ID and JWT_SALT environment variables must be set but one (or more) of them is null.");
        console.log("CLIENT_ID: ", CLIENT_ID);
        console.log("JWT_SALT: ", JWT_SALT);
        return res.status(500).send("Invalid environment variable set up.");
    }

    res.status(200).send({ CLIENT_ID: CLIENT_ID, JWT_SALT: JWT_SALT });
}

module.exports = configs;
