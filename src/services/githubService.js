const axios = require("axios");
require("dotenv").config();

const GITHUB_API_URL = "https://api.github.com";
const USERNAME = process.env.GITHUB_USERNAME;
const TOKEN = process.env.GITHUB_TOKEN;

const githubClient = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

// Fetch user data (followers, following, repositories)
const fetchGitHubUserData = async () => {
  const userResponse = await githubClient.get(`/users/${USERNAME}`);
  const reposResponse = await githubClient.get(`/users/${USERNAME}/repos`);

  return {
    username: userResponse.data.login,
    followers: userResponse.data.followers,
    following: userResponse.data.following,
    repositories: reposResponse.data.map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
    })),
  };
};

// Fetch specific repository details
const fetchRepoData = async (repoName) => {
  const response = await githubClient.get(`/repos/${USERNAME}/${repoName}`);
  return {
    name: response.data.name,
    url: response.data.html_url,
    description: response.data.description,
    stars: response.data.stargazers_count,
    forks: response.data.forks_count,
    open_issues: response.data.open_issues_count,
  };
};

// Create an issue in the repository
const createIssue = async (repoName, title, body) => {
  const response = await githubClient.post(
    `/repos/${USERNAME}/${repoName}/issues`,
    {
      title,
      body,
    }
  );

  return response.data.html_url;
};

module.exports = { fetchGitHubUserData, fetchRepoData, createIssue };
