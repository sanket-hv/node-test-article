const router = require('express').Router()
const { postCommentOnArticle, getCommentOnArticle, postCommentOnComment } = require('../controllers/Comment.controller')

// Post comment on article
router.post('/on-article', postCommentOnArticle)

// Get comment on article
router.get('/on-article/:article_id', getCommentOnArticle)

// Post comment on a comment
router.post('/on-comment', postCommentOnComment)

module.exports = router