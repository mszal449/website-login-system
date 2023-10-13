const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


const login = async (req, res) => {
  const {username, password} = req.body
  if(!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400)
  }

  // data used here (id, payload and string value) are only meant
  // for demo use
  const id = new Date().getDate()
  // payload
  const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn: '30d'})

  res.status(200).json({msg:'user created', token})
}
  
const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization
  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401)
  }

  const token = authHeader.split(' ')[1]


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).send({msg:`hello ${decoded.username}`, secret:`your secret number is ${luckyNumber}` })
  } catch (error) {
    throw new CustomAPIError('Not authorized to access this route', 401)
  }

}

module.exports = {
  login,
  dashboard  
}