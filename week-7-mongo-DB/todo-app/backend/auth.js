/* AUTHENTICATION  */
// jsonwebtoken: A Node.js library for generating and verifying JWTs.
const jwt = require('jsonwebtoken');
//JWT_SECRET: A secret string used to sign the token. This ensures the token's authenticity and prevents tampering. This should be stored securely (e.g., in environment variables).
const JWT_SECRET = "s3cret";

/* The auth function is a middleware function used for authentication in a Node.js application. It ensures that only authorized users with a valid token can access certain routes or resources. */
function auth(req, res, next) {
    console.log(req, 'req')
    const token = req.headers.authorization; // fetch the token,which was send when the user signin

    //we will veryfy the token with our JWT_SECRET, and check kya ye wo encripted token hai
    const response = jwt.verify(token, JWT_SECRET);

    /* If the token is successfully verified, the middleware:
        Extracts user information (e.g., userId) from the token.
        Attaches it to the req object (req.userId = token.userId), so it can be accessed in subsequent middleware or route handlers.
        Calls next() to pass control to the next function in the middleware stack or the final route handler. */
    if (response) {
        req.userId = token.userId;
        next(); // this will call the next function , which is after auth, in the above route
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}