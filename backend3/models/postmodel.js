const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    userid: { type: String, required: true },
    user: { type: String, required: true },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "like"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }],
})

const postmodel = mongoose.model("posts", postSchema)

module.exports = { postmodel }

// {
//     "title":"Goa Diaries",
//     "body":"The best trip till date"
//   }