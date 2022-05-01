const express = require('express')
const router = express.Router()

router.route('/').get(function (req, res) {
    res.send("salam user")
})
router.route('/:name').get(function (req, res) {
    res.send(`salam ${req.params.name}`)
})

module.exports = router