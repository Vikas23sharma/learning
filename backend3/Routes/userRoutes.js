const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { usermodel } = require("../models/usermodel")
const { Authmiddleware } = require("../Middleware/Authmiddleware")

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    const { username, email, password, age, stack } = req.body
    try {
        let existinguser = await usermodel.findOne({ username })
        if (existinguser) {
            res.status(200).send("User already exist!")
        }
        else {
            bcrypt.hash(password, saltRounds = 3, async function (err, hash) {
                if (err) {
                    res.status(500).send("Error registering user !")
                }
                else if (hash) {
                    const user = usermodel({ username, email, age, stack, password: hash })
                    await user.save()
                    res.status(200).send("New user registered successfully !")
                }
            });

        }
    } catch (error) {
        res.send(error.message)
    }
})

userRouter.post("/login", async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await usermodel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    res.status(201).send({ message: "Wrong Password" })
                }
                else if (result) {
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: {
                            user: user.username,
                            userid: user._id,
                            role: "user"
                        }
                    }, 'secret');
                    res.status(200).send({
                        message: "Login successful",
                        token,
                        user: user.username
                    })
                }
                else {
                    res.status(201).send({ message: "Wrong Password" })
                }
            });
        }
        else {
            res.status(400).send({ message: "User Not Found!" })
        }
    } catch (error) {
        console.log(error.message)
    }
})

userRouter.get("/", Authmiddleware, async (req, res) => {

    try {
        const { stack, sort, page, order } = req.query
        // console.log(stack)
        let obj = {}

        if (stack) {
            obj.stack = stack
        }
        else {
            obj = null
        }

        let currentPage = parseInt(page) || 1
        let limit = 3
        let skip = (currentPage - 1) * limit

        let users

        if (sort) {
            if (order === "asc") {
                users = await usermodel.find(obj).sort({ age: 1 }).skip(skip).limit(limit)

            }
            else if (order === "desc") {
                users = await usermodel.find(obj).sort({ age: -1 }).skip(skip).limit(limit)

            }
            else {
                res.status(400).send({ message: "something went wrong" })
            }
        }
        else {
            users = await usermodel.find(obj).skip(skip).limit(limit)
        }

        res.status(200).send(users)


    } catch (error) {
        console.log(error.message)
    }
})

userRouter.patch("/update/:id", async (req, res) => {
  const id=req.params.id
  try {
      await usermodel.findByIdAndUpdate({_id:id},req.body)
      res.status(200).send({message:"User updated successfully"})
  } catch (error) {
    res.status(400).send(error.message)
  }
})

userRouter.delete("/delete/:id", async (req, res) => {
    const id=req.params.id
    try {
        await usermodel.findByIdAndDelete({_id:id})
        res.status(200).send({message:"User deleted successfully"})
    } catch (error) {
      res.status(400).send(error.message)
    }
  })

module.exports = { userRouter }