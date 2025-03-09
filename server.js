require("dotenv").config();
const express = require("express");
const cors = require("cors");
const githubRoutes = require("./src/routes/githubRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/github", githubRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
