const express = require("express")
const { userModel } = require("../Models/userModel")
const bcrypt = require("bcrypt")

const adminRouter = express.Router()

adminRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existinguser = await userModel.findOne({ email })
        // console.log(existinguser)
        if (existinguser) {
            res.status(200).send({ message: "Admin already registered" })
        }
        else {
            bcrypt.hash(password, saltRounds = 3, async function (err, hash) {
                if (err) {
                    res.status(400).send({ message: err.message })
                }
                else if (hash) {
                    const user = userModel({ name, email, password: hash })
                    await user.save()
                    res.status(200).send({ message: "Admin Registered Successfully" })
                }
            })
        }
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})

module.exports = { adminRouter }