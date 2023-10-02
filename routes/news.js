const router = require("express").Router();
const newsController = require("../controllers/news");

router.get("/", newsController.get);
router.get("/search", newsController.search);

module.exports = router;
