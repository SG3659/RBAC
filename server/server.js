import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import fs from "node:fs";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();
const app = express();

const PORT = 8000 || process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDb();

app.use(errorHandler);
const routeFiles = fs.readdirSync("./routes");

routeFiles.forEach((file) => {
  // use dynamic import
  import(`./routes/${file}`)
    .then((route) => {
      app.use("/api/v1", route.default);
    })
    .catch((err) => {
      console.log("Failed to load route file", err);
    });
});

app.listen(PORT, () => {
  console.log("PORT is running on 8000");
});
