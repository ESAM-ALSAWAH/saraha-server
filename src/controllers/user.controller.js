const userModel = require('../models/user.model')
const Exception = require('../exception/RigestryException')
const register = async (req, res) => {
  const { name, email, password } = req.body
  const user = await userModel.findOne({ email })

  if (user) {
    return res.status(401).send({ message: 'Email already token !' })
  }

  if (password.trim() === '' || name.trim() === '')
    return res.status(401).send({ message: Exception.isImpty })

  try {
    const newUser = new userModel({
      name,
      email,
      password,
    })

    await newUser.save()
    res.status(201).json({
      message: 'succes the account is created successfully ^^',
    })
  } catch (err) {
    return res.json({ message: 'error !!' })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      })
    } else {
      res.send('Invalid email or Password')
    }
  } catch (err) {
    res.send(err)
  }
}
module.exports = {
  register,
  login,
}
