const express = require('express')
const router = express.Router()

router.route('/').get(function (req, res) {
    res.json({ "name": "eyvan" })
})

module.exports = router