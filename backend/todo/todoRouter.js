const express = require('express')
const router = express.Router()

router.route('/').get(function (req, res) {
    res.json({ "desc": "eyvan" })
})
router.route('/createTodo').post(function (req, res) {

    res.send(req.body.desc)
})

module.exports = router