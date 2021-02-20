const express = require('express')
const app = express()

/**
 * Importing routes
 */
const articleRoute = require('../routes/Article.route')
const commentRoute = require('../routes/Comment.route')

/**
 * Test API
 */
app.get('/test', (req, res) => {
    console.log("Test Router")
    return res.status(200).json("routes api working!!")
})

/**
 * For articles
 */
app.use('/articles', articleRoute)

/**
 * For comments
 */
app.use('/comments', commentRoute)


module.exports = app
