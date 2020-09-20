const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    msg: {
        required: true,
        type: String,
    },
    category_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],
});

const categorySchema = new mongoose.Schema({
    type: {
        required: true,
        type: String,
        unique: true,
        // post: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
    },
});

const Post = mongoose.model("post", postSchema);
const Category = mongoose.model("category", categorySchema);

module.exports = { Post, Category };
