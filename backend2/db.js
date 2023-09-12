const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://vikas:sharma@cluster0.uyoyu9t.mongodb.net/settyl?retryWrites=true&w=majority")

module.exports = { connection }