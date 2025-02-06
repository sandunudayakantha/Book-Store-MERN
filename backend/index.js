const express = require('express')
const app = express()

require('dotenv').config()

const mongoose = require('mongoose');

const port = process.env.PORT || 5001;






async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.use('/', (req, res) => {
    res.send('book')
  })

  
}

main().then(() =>console.log("mongo db connd")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})