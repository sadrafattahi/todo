const mongoose = require('mongoose')
const schema = mongoose.Schema

let TodoModel = new schema({
    desc: {
        type: String
    },
    responsible: {
        type: String
    },
    priority: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

module.exports = mongoose.model('Todo', TodoModel)