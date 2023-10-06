const mongoose = require("mongoose")

const likeSchema = mongoose.Schema({
    postId: { type: String, required: true },
    userid: { type: String, required: true },
    user: { type: String, required: true },
})

const likemodel = mongoose.model("like", likeSchema)

module.exports = { likemodel }