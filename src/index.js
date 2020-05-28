const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const chalk = require('chalk')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     res.status(503).send('The service is temporarily down for maintenance. Please try again later.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(chalk.inverse('Server is up on port ' + port))
})