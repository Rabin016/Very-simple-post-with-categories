const { Post } = require("../models/index");

module.exports.get_posts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate("category_id");
        res.status(200).send(posts);
    } catch (err) {
        res.status(400).send({ err, dangerMsg: "Post cant be found" });
    }
};

module.exports.get_postsOne = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).send(post);
    } catch (err) {
        res.status(400).send({ err, dangerMsg: "Post not be deleted" });
    }
};

module.exports.post_posts = async (req, res) => {
    const { title, msg, category_id } = req.body;

    try {
        const newPost = await Post.create({
            title,
            msg,
            category_id,
        });
        res.status(201).send({ sucMsg: "New post add!" });
        console.log("it works");
    } catch (err) {
        res.status(400).send({ err, dangerMsg: "Post not added" });
    }
};

module.exports.delete_postsOne = async (req, res) => {
    try {
        const post = await Post.deleteOne({ _id: req.params.id });
        res.status(200).send({ sucMsg: "Post has been deleted!" });
    } catch (err) {
        res.status(400).send({ err, dangerMsg: "Post not deleted" });
    }
};

module.exports.update_postsOne = async (req, res) => {
    try {
        const { title, msg, category_id } = req.body;
        const post = await Post.updateOne(
            { _id: req.params.id },
            { $set: { title, msg, category_id } }
        );
        res.status(200).send({ sucMsg: "Post has been updated!" });
    } catch (err) {
        res.status(400).send({ err, dangerMsg: "Post not be updated" });
    }
};
