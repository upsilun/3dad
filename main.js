const express = require('express')

const app = express()
const port = 3000

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile('index.html');
  });

app.listen(port, () => {
  console.log(`localhost:${port}`)
})
