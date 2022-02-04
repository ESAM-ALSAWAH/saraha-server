const express = require('express')
const router = express.Router()
const {
  login,
  register,
  getProfile,
} = require('../controllers/user.controller')
router.post('/register', register)
router.post('/login', login)
router.get('/user/:id', getProfile)

module.exports = router
