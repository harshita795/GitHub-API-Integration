require("dotenv").config();
const express = require("express");
const cors = require("cors");
const githubRoutes = require("./src/routes/githubRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/github", githubRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the GitHub API Integration!",
    available_routes: {
      "GET /github":
        "Fetch GitHub profile details (followers, following, repositories).",
      "GET /github/{repo-name}": "Fetch details of a specific repository.",
      "POST /github/{repo-name}/issues":
        "Create a new issue in the specified repository.",
    },
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
