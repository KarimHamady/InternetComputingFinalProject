const express = require('express')
const router = express.Router()
const path = require('path')
const searchController = require(path.join('..', '..', 'controllers', 'searchController'))

router.route('/')
    .get(searchController.search)
    .post(searchController.search)

module.exports = router