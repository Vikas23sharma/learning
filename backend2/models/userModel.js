const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    stack: { type: String, required: true },
    age: { type: String, required: true },
})

const userModel = mongoose.model("users", userSchema)

module.exports = { userModel }
