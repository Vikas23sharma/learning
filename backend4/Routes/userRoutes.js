const express = require("express")
const { userModel } = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Authmiddleware } = require("../Middleware/Authmiddleware")

const userRouter = express.Router()


// User Register
userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existinguser = await userModel.findOne({ email })
        // console.log(existinguser)
        if (existinguser) {
            res.status(200).send({ message: "User already registered" })
        }
        else {
            bcrypt.hash(password, saltRounds = 3, async function (err, hash) {
                if (err) {
                    res.status(400).send({ message: err.message })
                }
                else if (hash) {
                    const user = userModel({ name, email, password: hash })
                    await user.save()
                    res.status(200).send({ message: "User Registered Successfully" })
                }
            })
        }
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})

//User Login

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            res.status(400).send({ message: "User not found!" })
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
                            role: "user"
                        }
                    }, 'secret', { expiresIn: '2h' });
                    res.status(200).send({ message: "User Login Successful", token, user: user.name })
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


// get all users
userRouter.get("/allusers", Authmiddleware, async (req, res) => {
    if (req.body.role === "admin") {
        const users = await userModel.find()
        res.status(200).send(users)
    }
    else {
        res.status(200).send({ message: "Action not allowed!" })
    }
})

module.exports = { userRouter }