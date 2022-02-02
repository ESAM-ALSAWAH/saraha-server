module.exports = (app) => {
  app.use('/api', require('./message.routes'))
  app.use('/api', require('./user.routes'))
}
