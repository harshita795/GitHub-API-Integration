# GitHub API Integration

This project is a REST API that integrates with the **GitHub API** to fetch user activity and repository details. It also allows users to create issues in their repositories.

## Features

- **GET /github** → Fetch GitHub profile details (followers, following, repositories, etc.).
- **GET /github/{repo-name}** → Fetch details of a specific repository.
- **POST /github/{repo-name}/issues** → Create a new issue in a repository.

## Technologies Used

- **Node.js** with **Express.js**
- **Axios** for API requests
- **Dotenv** for environment variable management
- **GitHub API** for fetching data
- **Deployed on:** Render / Heroku / Vercel (whichever you used)

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/github-api-integration.git
   cd github-api-integration
2. **Install Dependencies**
  ```sh
npm install
```
3. **Set Up Environment Variables Create a .env file in the root directory and add:**
 ```sh
   GITHUB_USERNAME=your-github-username
   GITHUB_TOKEN=your-github-personal-access-token
```
4. **Run the Server**
 ```sh
npm start
```
## API Endpoints
 **1. Get GitHub Profile Data**
 ```sh
{
  "username": "your-github-username",
  "followers": 50,
  "following": 20,
  "repositories": [
    "repo1",
    "repo2",
    "repo3"
  ]
}
```

**2. Get Repository Details**
Endpoint: GET /github/{repo-name}
```sh
{
  "name": "repo-name",
  "description": "Repository description",
  "stars": 10,
  "forks": 5,
  "language": "JavaScript"
}
```
**Create an Issue**
Endpoint: POST /github/{repo-name}/issues
- Request Body:
```sh
{
  "title": "Bug in API",
  "body": "Describe the bug here."
}
```
Response:
```sh
{
  "issue_url": "https://github.com/your-username/repo-name/issues/1"
}
```
## Deployment
The API is deployed online at: [https://github-api-integration.onrender.com/github]

## License
This project is licensed under the MIT License.
