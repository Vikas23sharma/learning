const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    postId: { type: String, required: true },
    body: { type: String, required: true },
    userid: { type: String, required: true },
    user: { type: String, required: true },
})

const commentmodel = mongoose.model("comment", commentSchema)

module.exports = { commentmodel }