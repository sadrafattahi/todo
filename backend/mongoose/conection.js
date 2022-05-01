
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/todo', { useNewUrlParser: true })
const conection = mongoose.connection

module.exports = conection