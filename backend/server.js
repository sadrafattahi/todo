const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 4000
const conection = require('./mongoose/conection')

conection.once('open', function () {
    console.log("Mongodb conected.")
})

app.use(cors())
app.use(bodyParser.json())
app.use(function (req, res, next) {
    console.log("this is an todo app")
    next()
})

const userRouter = require('./users/userRouter')
const cityRouter = require('./city/cityRouter')
const todoRouter = require('./todo/todoRouter')


app.use("/user", userRouter)
app.use("/city", cityRouter)
app.use("/todo", todoRouter)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})