module.exports = [
  require('cors')(),
  require('helmet')(),
  require('body-parser').json(),
  require('body-parser').urlencoded({ extended: true }),
  require('compression')(),
  require('morgan')('dev')
]
