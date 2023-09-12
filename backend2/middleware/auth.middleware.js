var jwt = require('jsonwebtoken');

function Authmiddleware(req, res, next) {
    let token = req.headers.authorization
    console.log(token)
    if (token) {
        token = token.split(" ")[1]
        jwt.verify(token, 'secret', (err, decoded) => {
            if (decoded) {
                req.body.authorID = decoded.data.authorID
                req.body.author = decoded.data.author
                req.body.role = decoded.data.role
                next()
            }
            else {
                res.status(400).send({ message: err.message })
            }
        })
    }
    else {
        res.status(401).send({ message: "Please Login first!" })
    }
}

module.exports = { Authmiddleware }