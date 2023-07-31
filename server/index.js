const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'))
})

app.listen(3000);
console.log('Server listening on port 3000');