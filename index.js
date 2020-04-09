const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))


app.all('*', (request, response) => {

  return response.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})

app.listen(1337, () => {
  console.log('listening on port 1337') // eslint-disable-line no-console
})
