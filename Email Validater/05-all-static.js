const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('../public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,'10.0.0.235',()=> {
  console.log(`server is listening on port ${PORT}....`)
})