const express = require('express')
const app = express()

const cors = require("cors");

require('dotenv').config()

const mongoose = require('mongoose');

const port = process.env.PORT || 5001;


//midleware
app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173/'],
  credentials:true
}))
//routes
const bookRoutes  = require ('./src/books/book.route')
app.use("/api/books",bookRoutes)




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