const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
})
module.exports = Message = model('message', messageSchema)
