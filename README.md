### Description
 This is a public API that accept only a GET request and returns the following information in JSON format:
    Your registered email address (used to register on the HNG12 Slack workspace).
    The current datetime as an ISO 8601 formatted timestamp.
    The GitHub URL of the project's codebase.

### Setup Instructions
 - Navigate to the project root directory
 - Type **yarn** within the terminal, 
    
    ```
    Make sure you have yarn package manager installed within your system.
    ```
 - Enter **yarn dev** to start the server.

### API Documentation
    - Endpoint URL : http://localhost:3000
    
#### Request / Response format
    Request: GET http://localhost:3000/
    Response:
        {
        "email": "henrynnamani12304@gmail.com",
        "current_datetime":"2025-01-30T16:51:57.694Z",
        "github_url": "https://github.com/gr4yx01/<github-repo-url>"
        }

#### Programming language of choice
https://hng.tech/hire/nodejs-developers