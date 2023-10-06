const jwt = require("jsonwebtoken")

function Authmiddleware(req, res, next) {
    let token = req.headers.authorization
    if (token) {
        token = token.split(" ")[1]
        jwt.verify(token, 'secret', function (err, decoded) {
            if (decoded) {
                req.body.user = decoded.data.user,
                    req.body.userid = decoded.data.userid,
                    req.body.role = decoded.data.role
                next()
            }
            else {
                res.status(400).send({ error: err.message })
            }
        });
    }
    else {
        res.status(201).send({ message: "Please Login First!" })
    }
}

module.exports = { Authmiddleware }