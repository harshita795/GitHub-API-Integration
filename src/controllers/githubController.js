const githubService = require("../services/githubService");

const getGitHubData = async (req, res) => {
  try {
    const data = await githubService.fetchGitHubUserData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRepoData = async (req, res) => {
  try {
    const { repoName } = req.params;
    const data = await githubService.fetchRepoData(repoName);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createIssue = async (req, res) => {
  try {
    const { repoName } = req.params;
    const { title, body } = req.body;
    const issueUrl = await githubService.createIssue(repoName, title, body);
    res.json({ issue_url: issueUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getGitHubData, getRepoData, createIssue };
