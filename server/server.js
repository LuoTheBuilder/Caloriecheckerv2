import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Sever is active on port " + PORT);
});
