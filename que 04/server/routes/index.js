const router = require("express").Router();
const {
    get_posts,
    get_postsOne,
    post_posts,
    delete_postsOne,
    update_postsOne,
} = require("../controllers/post");
const {
    get_categories,
    get_categoriesOne,
    post_categories,
    delete_categoriesOne,
    update_categoriesOne,
} = require("../controllers/category");

// Posts Routes
router.get("/api/posts", get_posts);
router.post("/api/posts", post_posts);
router.get("/api/posts/:id", get_postsOne);
router.delete("/api/posts/:id", delete_postsOne);
router.patch("/api/posts/:id", update_postsOne);

// Categories Routes
router.get("/api/categories", get_categories);
router.post("/api/categories", post_categories);
router.get("/api/categories/:id", get_categoriesOne);
router.delete("/api/categories/:id", delete_categoriesOne);
router.patch("/api/categories/:id", update_categoriesOne);

module.exports = router;
