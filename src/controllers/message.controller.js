const messageModel = require('../models/message.model')
const moment = require('moment')
const getInfo = require('../utils/getInfo')
const createmessage = async (req, res) => {
  const { description, userID } = req.body
  try {
    const newMessage = new messageModel({
      description,
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      userID,
    })
    await newMessage.save()

    res.status(201).json({
      message: 'Message has been sent ^^',
    })
  } catch (err) {
    return res.status(401).json({ message: 'error !!' })
  }
}
const getAllmessage = async (req, res, next) => {
  const token = req.header('authorization')
  const userID = getInfo(token)

  console.log(userID)
  try {
    const message = await messageModel.find({ userID })
    res.json({ data: message })
  } catch {}
}
const DeleteMessage = async (req, res) => {
  const _id = req.params.id
  await messageModel
    .findOneAndRemove({
      _id,
    })
    .then((message) => {
      if (!message)
        return res.status(404).send({
          errors: {
            code: 404,
            message: 'message not found',
          },
        })
      else res.send('delete successed')
    })
}
module.exports = {
  createmessage,
  getAllmessage,
  DeleteMessage,
}
