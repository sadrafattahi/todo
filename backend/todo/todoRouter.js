const express = require('express')
const router = express.Router()

let Todo = require('./todo.model')

router.route('/').get(function (req, res) {
    Todo.find({}, function (err, todos) {
        if (err)
            res.send(err)
        else
            res.json(todos)
    })
})

router.route('/:id').get(function (req, res) {
    let id = req.params.id
    Todo.findById(id, null, null, function (err, todo) {
        if (err)
            res.status(404).send("todo not find!")
        else
            res.status(200).json(todo)
    })
})

router.route('/createTodo').post(function (req, res) {
    let todo = new Todo(req.body)

    todo.save().then(function (todo) {
        res.status(200).send("todo added sucsessfuly.")
    }).catch(function (err) {
        res.status(400).send("adding new todo failed!")
    })
})

router.route('/update/:id').post(function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err)
            res.status(404).send("todo is not found!")
        else {
            todo.desc = req.body.desc
            todo.responsible = req.body.responsible
            todo.priority = req.body.priority
            todo.completed = req.body.completed
        }
        todo.save().then(function () {
            res.send('todo update')
        }).catch(function () {
            res.send('update not possible!')
        })

    })
})

module.exports = router