import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import mealRoutes from "./routes/meals.js";
import menuRoutes from "./routes/menu.js";
import errorHandler from "./middleware/error.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join("../client/build")));

app.use("/api/auth", authRoutes);
app.use("/meals", mealRoutes);
app.use("/menu", menuRoutes);
app.use(cors());
app.use(errorHandler);

//Constants
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.URL;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("*", (req, res) => {
  res.sendFile(path.join("../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Sever is active on port " + PORT);
});
