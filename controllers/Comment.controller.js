require('dotenv').config()
const sequelize = require('../config/sequelizeConfig')
const { comment } = require('../models/init-models')(sequelize)

// Post comment on article
exports.postCommentOnArticle = async (req, res) => {
    try {
        const body = req.body
        await comment.create(body)
        return res.status(200).json({
            error: false,
            message: "Commented on article Successfully"
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

// Get comment on Article
exports.getCommentOnArticle = async (req, res) => {
    try {
        const { article_id } = req.params
        const comments = await comment.findAll({ where: { article_id }, attributes: { exclude: ['created_at', 'comment_id'] } })
        return res.status(200).json({
            error: false,
            message: "Comments list",
            data: comments
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

// Post comment on a comment
exports.postCommentOnComment = async (req, res) => {
    try {
        const body = req.body
        await comment.create(body)
        return res.status(200).json({
            error: false,
            message: "Commented on comment Successfully"
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