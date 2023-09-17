// middleware that handles errors
const CustomAPIError = require('../errors/custom-error')
const ErrorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({msg : err.message})
  }
  return res.status(500).send('Something went wrong, try again later')
}

module.exports = ErrorHandlerMiddleware