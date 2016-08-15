
  var getConfig = require('hjs-webpack')

  module.exports = getConfig({
    in: 'src/App.jsx',
    out:'public',
    clearBeforeBuild: '!(images|favicon.ico)'
  })

  
