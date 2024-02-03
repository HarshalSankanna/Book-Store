import express from "express";
import * as bookController from "../controller/bookController.js";

const bookRouter = express.Router();

//post books
bookRouter.post("/books", bookController.createBook);

export default bookRouter;
