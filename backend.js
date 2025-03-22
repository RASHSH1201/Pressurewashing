const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path')

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
})

app.listen(5500, ()=>{
  console.log('Server is listening on port 5500');
})