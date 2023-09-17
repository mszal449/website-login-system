require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const ErrorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')


// middleware
app.use(express.static('/public'))
app.use(express.json())

app.use(ErrorHandlerMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (err) {
    console.log(error)
  }
}

start()

