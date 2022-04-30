const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 4000

const userRoute = express.Router()


app.use(cors())
app.use(bodyParser.json())

app.use(function (req, res, next) {
    console.log("this is an todo app")
    next()
})

userRoute.route("/:name/:id").get(function (req, res) {
    res.send({ "name": req.params.name, "id": req.params.id })
})


app.use("/user", userRoute)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})