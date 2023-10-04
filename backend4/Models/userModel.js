const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const userModel = mongoose.model("users", UserSchema)

module.exports = { userModel }

// {
//     "name":"Bacchu",
//     "email":"bacchu@gmail.com",
//     "password":"bacchu@123"
//   }