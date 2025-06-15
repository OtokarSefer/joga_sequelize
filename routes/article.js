const express = require('express')
const route = express.Router()
const articleController = require('../controllers/article')

route.get('/', articleController.getAllArticles)
route.get('/article/:slug', articleController.getArticleBySlug)

module.exports = router