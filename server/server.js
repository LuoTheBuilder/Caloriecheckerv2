import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import errorHandler from "./middleware/error.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use(cors());
app.use(errorHandler);

//Constants
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.URL;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("Sever is active on port " + PORT);
});
