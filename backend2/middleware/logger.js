// const { timeStamp } = require("console")
const fs = require("fs")

function logger(req, res, next) {
    const time = new Date()
    const request = req.method
    const url = req.originalUrl

    const logentry = `\n Time:${time},Request:${request},URL:${url}`

    fs.appendFile("log.txt", logentry, (err) => {
        if (err) {
            console.log(err)
            console.log("error in logging request data")
        }
        else { console.log("log entry listed") }

        next()
    })
}

module.exports = { logger }

// function loggermiddleware(req, res, next) {
//     const time = new Date().toLocaleString()
//     const method = req.method
//     const Url = req.originalUrl

//     const logEntry = `${time} - ${method} - ${Url}`

//     fs.appendFile("log.txt", logEntry, (err) => {
//         if (err) {
//             console.error("Error writing the file", err)
//         }
//     })

//     next()
// }

// module.exports = { loggermiddleware }