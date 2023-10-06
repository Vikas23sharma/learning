const express = require("express")
const { likemodel } = require("../models/likemodel")
const { postmodel } = require("../models/postmodel")
const { Authmiddleware } = require("../Middleware/Authmiddleware")

const likeroute = express.Router()

likeroute.post("/:postid/like", Authmiddleware, async (req, res) => {
    const { postid } = req.params
    console.log(postid)
    try {
        const like = likemodel({ postId: postid, ...req.body })
        console.log(like)
        const savedLike = await like.save()
        // res.status(200).send({ message: "Post is liked" })

        const updatedPost = await postmodel.findByIdAndUpdate(postid, { $push: { likes: savedLike._id } },
            { new: true })

        res.status(200).send({ post: updatedPost })
    } catch (error) {
        res.status(400).send({ message: error })
    }
})

module.exports = { likeroute }