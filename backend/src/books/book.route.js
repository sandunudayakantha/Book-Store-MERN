const express = require ('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook } = require('./book.controller');

const  router= express.Router ();


router.post("/create-book",postABook)

router.get("/",getAllBooks)

//get single book

router.get("/:id",getSingleBook)


//update book

router.put("/edit/:id",UpdateBook)

module.exports = router;