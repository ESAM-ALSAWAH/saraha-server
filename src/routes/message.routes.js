const express = require('express')
const router = express.Router()
const {
  createmessage,
  getAllmessage,
  DeleteMessage,
} = require('../controllers/message.controller')
router.post('/message/create', createmessage)
router.get('/message/getAll', getAllmessage)
router.delete('/message/:id', DeleteMessage)
module.exports = router
