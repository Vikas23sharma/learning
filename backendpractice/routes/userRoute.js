const express = require("express")
const { userModel } = require("../models/usermodel")

const userRouter = express.Router()

// userRouter.get("/", (req, res) => {
//     try {
//         res.send("Home Page")
//     } catch (error) {
//         console.log(error)
//     }
// })

//add users

userRouter.post("/add", async (req, res) => {
    try {
        const user = userModel(req.body)
        await user.save()
        res.send("New user registered successfully")
    } catch (error) {
        res.send(error.message)
    }
})

//get users

userRouter.get("/", async (req, res) => {
    // const query = req.query
    try {
        const users = await userModel.find()
        res.send(users)
    } catch (error) {
        console.log(error.message)
    }
})

//update users

userRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id
    try {
        await userModel.findByIdAndUpdate({ _id: id }, req.body)
        res.send("user updated successfully")
    } catch (error) {
        console.log(error.message)
    }
})

//delete user

userRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    try {
        await userModel.findByIdAndDelete({ _id: id })
        res.send("user deleted successfully")
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = { userRouter }