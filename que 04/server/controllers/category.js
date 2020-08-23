const { Category } = require("../models/index");

// Categories
module.exports.get_categories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.get_categoriesOne = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.post_categories = async (req, res) => {
    const { type } = req.body;

    try {
        const newCategory = await Category.create({ type });
        res.status(201).send({ sucMsg: "New category add!" });
        console.log("it works");
    } catch (err) {
        res.status(400).send({ err, dangerMsg: "Category not added" });
    }
};

module.exports.delete_categoriesOne = async (req, res) => {
    try {
        const categories = await Category.deleteOne({ _id: req.params.id });
        res.status(200).send({ sucMsg: "Category deleted!" });
    } catch (err) {
        res.status(400).send({ err, dangerMsg: "Category not deleted" });
    }
};

module.exports.update_categoriesOne = async (req, res) => {
    try {
        const { type } = req.body;
        const categories = await Category.updateOne(
            { _id: req.params.id },
            { $set: { type } }
        );
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json(err);
    }
};
