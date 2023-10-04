const express = require("express")
const { userModel } = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const adminRouter = express.Router()

//Admin Register

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

//Admin Login

adminRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            res.status(400).send({ message: "Admin not found!" })
        }
        else {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    res.status(400).send({ message: err.message })
                }
                else if (result) {
                    const token = jwt.sign({
                        data: {
                            user: user.name,
                            userid: user._id,
                            role: "admin"
                        }
                    }, 'secret', { expiresIn: '2h' });
                    res.status(200).send({ message: "Admin Login Successful", token, Admin: user.name })
                }
                else {
                    res.status(200).send({ message: "Incorrect Password!" })
                }
            });
        }
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

module.exports = { adminRouter }