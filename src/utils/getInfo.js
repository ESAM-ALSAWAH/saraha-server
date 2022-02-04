const jwt = require('jsonwebtoken')
const getInfo = (token) => {
  var id
  jwt.verify(JSON.parse(token), process.env.JWT_SECRET, function (
    err,
    decodedToken,
  ) {
    if (decodedToken) id = decodedToken.id
    else throw new Error(err)
  })

  return id
}
module.exports = getInfo
