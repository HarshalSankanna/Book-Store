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

console.log("MongoURI:", mongoURI);

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Server connected to database");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
