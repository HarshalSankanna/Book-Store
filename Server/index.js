import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Server connected to database");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
