const express = require("express");
const {
  getGitHubData,
  getRepoData,
  createIssue,
} = require("../controllers/githubController");

const router = express.Router();

router.get("/", getGitHubData); // Fetch GitHub user data
router.get("/:repoName", getRepoData); // Fetch specific repo details
router.post("/:repoName/issues", createIssue); // Create an issue in the repo

module.exports = router;
