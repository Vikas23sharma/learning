const fs = require("fs")

function loggermiddleware(req, res, next) {
    const method = req.method
    const time = new Date()
    const status = res.statusCode

    const logentry = `\n RequestType:${method} - Time:${time} - Status:${status}`

    fs.appendFile('log.txt', logentry, (err) => {
        if (err) throw err;
        else { console.log('Log Entry Done'); }
        next()
    })
}

module.exports = { loggermiddleware }