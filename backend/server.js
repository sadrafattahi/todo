const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 4000


app.use(cors())
app.use(bodyParser.json())

app.post('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})