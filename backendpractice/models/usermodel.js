const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    graduate: { type: Boolean, required: true },
    stack: { type: String, required: false }
}, {
    versionKey: false
})

const userModel = mongoose.model("user", userSchema)

module.exports = { userModel }

// {
//     "name": "Ankush",
//         "surname": "singh",
//             "age": 24,
//                 "graduate": "true"
// }