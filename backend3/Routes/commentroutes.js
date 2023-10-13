const express = require("express")
const { Authmiddleware } = require("../Middleware/Authmiddleware")
const { commentmodel } = require("../models/commentmodel")
const { postmodel } = require("../models/postmodel")

const commentroute = express.Router()

commentroute.post("/:postid/addcomment", Authmiddleware, async (req, res) => {
    const { postid } = req.params
    try {
        const comment = commentmodel({ postId: postid, ...req.body })
        const savedcomment = await comment.save()

        const updatepost = await postmodel.findByIdAndUpdate(postid, { $push: { comments: savedcomment._id } }, { new: true })
        res.status(200).send({ message: "Comment added successfully!", post: updatepost })
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

commentroute.post("/:postid/:commentid/deletecomment", Authmiddleware, async (req, res) => {
    const { postid, commentid } = req.params

    try {
        const deletecomment = await commentmodel.findByIdAndDelete({ _id: commentid })

        const updatedPost = await postmodel.findByIdAndUpdate({ _id: postid }, { $pull: { comments: deletecomment._id } }, { new: true }).populate("comments")
        res.status(200).send({ post: updatedPost, message: "Comment deleted successfully" })
    } catch (error) {
        res.status(400).send({ message: error })
    }
})

module.exports = { commentroute }