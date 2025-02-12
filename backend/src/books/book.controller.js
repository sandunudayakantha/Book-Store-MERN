const Book = require("./book.model");

const postABook = async(req, res)=>{
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({messege:"book posted!",book:newBook})
    }catch(error){
        console.error("error creating book", error);
        res.status(500).send({messege:"failed   to create book", error})
    }
}

//get all books

const getAllBooks = async (req,res) => {
        try {
            const books = await Book.find().sort({createdAt:-1});
            res.status(200).send(books)
        } catch (error) {
            console.error("error fetching books", error);
        res.status(500).send({messege:"failed   to fetch books", error})
        }
}

//get single book

const getSingleBook = async(req, res) =>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id)
        if (!book){
            res.status(404).send({messege:"book not found"})
        }
        res.status(200).send(book)
    } catch (error) {
        console.error("error fetching book", error);
    res.status(500).send({messege:"failed   to fetch book", error})
    }
}



//update book

const UpdateBook = async (req,res) => {
        try {

            const {id} = req.params;
            const updatedBook = await Book.findByIdAndUpdate(id,req.body,{new:true});
            if (!UpdateBook){
                res.status(404).send({messege:"book is not found"})
            }
            res.status(200).send({
                messege:"book updated",
                book:updatedBook
            })
            
        } catch (error) {
            console.error("error updating book", error);
        res.status(500).send({messege:"failed   to update book", error})
        }
}

//delete book

const deleteABook = async(req, res) =>{
    try {

        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete (id);
        if(!deletedBook){
            res.status(404).send({messege:"book not found"})
        }
        res.status(200).send({
            messege:"book deleted",
            book:deletedBook
        })
    } catch (error) {
        console.error("error deleting book", error);
    res.status(500).send({messege:"failed   to delete book", error})
    }
}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteABook
}