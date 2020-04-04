const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.all('*', (request, response) => {
  return response.sendFile(path.join(__dirname, 'public', '404.html'))
})

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
