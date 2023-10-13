// Custom error that binds message with status code
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = 500
  }
}

module.exports = CustomAPIError