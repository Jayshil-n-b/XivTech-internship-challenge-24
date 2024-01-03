const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const cors = require("cors");
const corsOption = {
  credentials: true,
  origin: "*",
};
app.use(cors(corsOption));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and running...");
});

const router = require("./routes");
app.use(router);

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
