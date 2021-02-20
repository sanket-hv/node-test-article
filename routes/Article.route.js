const router = require('express').Router()
const { getArticles, postArticle, getArticleContent } = require("../controllers/Article.controller")

// Get list of articles
router.get('/', getArticles)

// Post article
router.post('/', postArticle)

// Article Content
router.get('/:article_id', getArticleContent)

module.exports = router