import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, "", () => {
  console.log(`Server running on port ${PORT}`);
});
