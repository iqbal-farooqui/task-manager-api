const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const chalk = require('chalk')

const app = express()

// app.use((req, res, next) => {
//     res.status(503).send('The service is temporarily down for maintenance. Please try again later.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app