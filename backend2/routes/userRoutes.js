const express = require("express")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const { Authmiddleware } = require("../middleware/auth.middleware")
const { userModel } = require("../models/userModel")

const userRouter = express.Router()

userRouter.post("/register/user", async (req, res) => {
    const { name, age, stack, username, password } = req.body

    try {
        const existinguser = await userModel.findOne({ username })
        if (existinguser) {
            res.status(200).send({ message: "User already exist" })
        }
        else {
            bcrypt.hash(password, 3, async function (err, hash) {
                // Store hash in your password DB.
                if (err) {
                    res.status(400).send({ message: "Error in registering user" })
                }
                if (hash) {
                    const user = userModel({ name, age, stack, username, password: hash })
                    await user.save()
                    res.status(200).send("New user registeres successfully")
                }
            })
        }
    } catch (error) {
        res.send(error.message)
    }
})

userRouter.post("/login/user", async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await userModel.findOne({ username })
        console.log(user)
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign(
                        {
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                            data: {
                                authorID: user._id,
                                author: user.name,
                                role: "user",
                            }
                        }, 'secret');

                    res.status(200).send({
                        message: "Login successful",
                        user: user.name,
                        token
                    })
                }
                else if (err) {
                    res.status(400).send({ message: "Invalid Credentials" })
                }
            })
        }
    } catch (error) {
        res.status(400).send({ message: "Invalid Credentials" })
    }

})

userRouter.get("/", async (req, res) => {


    try {
        // const query = req.query
        let { sort, order, stack, page } = req.query
        // console.log(sort, order, stack, page)

        let obj = {}

        if (stack) { obj.stack = stack }
        else { obj = null }

        const currentpage = parseInt(page) || 1
        const itemsperpage = 3
        const skip = (currentpage - 1) * itemsperpage


        let users

        if (sort) {
            if (order == "asc") {
                users = await userModel.find(obj).sort({ age: 1 }).skip(skip).limit(itemsperpage)
            }
            else if (order == "desc") {
                users = await userModel.find(obj).sort({ age: -1 }).skip(skip).limit(itemsperpage)
            }
        }
        else {
            users = await userModel.find(obj).skip(skip).limit(3)
        }
        // 
        // console.log(users)
        res.status(200).send(users)
    } catch (error) {
        res.send(error.message)
    }
})

userRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id
    try {
        await userModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send("User updated successfully")
    } catch (error) {
        res.send(error.message)
    }
})

userRouter.delete("/delete/:id", Authmiddleware, async (req, res) => {
    const id = req.params.id
    try {
        await userModel.findByIdAndDelete({ _id: id })
        res.status(200).send("User deleted successfully")
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = { userRouter }