const express = require('express')
const app = express()
const PORT = 3001
const router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)


app.all("*", (req, res) => {
    res.send("404 Page not found")
})
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})