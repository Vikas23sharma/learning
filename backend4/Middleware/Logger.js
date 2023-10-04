const fs = require("fs")

function Logger(req, res, next) {
    const RequestType = req.method
    const Time = new Date()
    const status = res.statusCode

    const Logentry = `\n RequestType-${RequestType} - Time-${Time} - Status-${status}`

    fs.appendFile("log.txt", Logentry, (err) => {
        if (err) { console.log(`Error Logging the entry :${err.message} `) }
        else {
            console.log("Log Entry Done")
        }
    })

    next()
}

module.exports = { Logger }