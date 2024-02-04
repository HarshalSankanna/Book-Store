import express from "express";
import * as bookController from "../controller/bookController.js";

const bookRouter = express.Router();

//post books
bookRouter.post("/", bookController.createBook);

//get books
bookRouter.get("/", bookController.getBooks);

//get book by id
bookRouter.get("/:id", bookController.getBookById);

//update book
bookRouter.put("/:id", bookController.updateBook);

//delete book
bookRouter.delete("/:id", bookController.deleteBook);

export default bookRouter;
