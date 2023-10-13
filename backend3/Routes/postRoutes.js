// Create New Post
const express = require("express")
const { postmodel } = require("../models/postmodel")
const { usermodel } = require("../models/usermodel")
const { Authmiddleware } = require("../Middleware/Authmiddleware")
const { likemodel } = require("../models/likemodel")

const postRouter = express.Router()

postRouter.post("/newpost", Authmiddleware, async (req, res) => {
    try {
        const newpost = postmodel(req.body)
        await newpost.save()
        res.status(200).send({ message: "New Post Created Successfully!" })
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error })
    }
})

postRouter.get("/allposts", Authmiddleware, async (req, res) => {
    try {
        const posts = await postmodel.find({ userid: req.body.userid }).populate("likes").populate("comments");
        res.status(200).send({ message: posts })
    } catch (error) {
        res.status(400).send({ message: error })

    }
})

// postRouter.post("/:postid/like", Authmiddleware, async (req, res) => {
//     const { userid } = req.body
//     // console.log(userid)
//     try {
//         const { postid } = req.params
//         // console.log(postid)
//         const post = await postmodel.findById(postid)
//         // console.log(post)

//         if (post.length === 0) {
//             res.status(400).send({ message: "Post not found" })
//         }
//         // console.log(post.likes)
//         else if (!post.likes.includes(userid)) {
//             const savedlike=likemodel({postid})
//             await savedlike.save()
//             post.likes.push(userid)
//             await post.save()
//             res.status(200).send({ message: "Post Liked Successfully!", post: post })
//         }
//         else {
//             res.status(200).send({ message: "Post  Already Liked !", post: post })
//         }

//     } catch (error) {
//         res.status(400).send({ message: error })
//     }
// })

module.exports = { postRouter }