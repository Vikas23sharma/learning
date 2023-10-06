const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    stack: { type: String, required: true }
})

const usermodel = mongoose.model("users", userSchema)

module.exports = { usermodel }

// "username":"suraj singh",
//   "email":"suraj@gmail.com",
//   "password":"suraj@123",
//   "age":20,
//   "stack":"mern"