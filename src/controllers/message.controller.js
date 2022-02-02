const messageModel = require('../models/message.model')

const createmessage = async (req, res) => {
  const { description, date, userID } = req.body
  try {
    const newMessage = new messageModel({
      description,
      date,
      userID,
    })
    await newMessage.save()

    res.status(201).json({
      message: 'Message has been sent ^^',
    })
  } catch (err) {
    return res.json({ message: 'error !!' })
  }
}
const getAllmessage = async (req, res, next) => {
  const { userID } = req.body
  const message = await messageModel.find({ userID })
  console.log(message)
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
