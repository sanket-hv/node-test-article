require('dotenv').config()
const sequelize = require('../config/sequelizeConfig')
const { article } = require('../models/init-models')(sequelize)

// Get Articles
exports.getArticles = async (req, res) => {
    try {
        console.log("Get Articles API");

        const limit = 20
        const { page } = req.query
        const offset = (page - 1) * limit

        const articles = await article.findAll({
            limit,
            offset,
            attributes: { exclude: ['created_at'] }
        })

        return res.status(200).json({
            error: false,
            message: "Articles list",
            data: articles
        })

    } catch (error) {
        console.log(error.message)
        const err = {
            error: true,
            message: {
                msg: error.message
            }
        }
        return res.status(500).json(err);
    }
}

// Get article content
exports.getArticleContent = async (req, res) => {
    console.log("Get Article Content")
    try {
        const { article_id } = req.params
        const content = await article.findOne({ where: { id: article_id }, attributes: ['content'] })
        return res.status(200).json({
            error: false,
            message: "Article Content",
            data: content
        })

    } catch (error) {
        console.log(error.message)
        const err = {
            error: true,
            message: {
                msg: error.message
            }
        }
        return res.statusCode(500).json(err);
    }
}

// Post Article
exports.postArticle = async (req, res) => {
    console.log("Post article api");
    try {
        const body = req.body
        await article.create(body)
        return res.status(200).json({
            error: false,
            message: "Article Posted Successfully"
        })

    } catch (error) {
        console.log(error.message)
        const err = {
            error: true,
            message: {
                msg: error.message
            }
        }
        return res.status(500).json(err);
    }
}