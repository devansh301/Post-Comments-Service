# Post-Comments Service
This is a basic web application that allows users to create posts and add comments to these posts.

## Setup
1. Clone the repository:
`git clone https://github.com/devansh301/Post-Comments-Service`
2. Install dependencies:
`npm install`
3. Ensure MongoDB is installed and running locally. You can also update the MongoDB connection URL in `app.js` if needed.
4. Start the server:
`node app.js`

The server will start running on port 3000 by default. You can access the application's API endpoints using tools like Postman or curl.

## Architecture

- **Backend**: Node.js with Express.js for handling HTTP requests and MongoDB for data storage.
- **Database**: MongoDB for storing posts and comments.

## API Endpoints

### Posts

- `POST /posts`: Create a new post.
- `GET /posts`: Get all posts.
- `GET /posts/:postId`: Get a specific post.
- `PUT /posts/:postId`: Update a specific post.
- `DELETE /posts/:postId`: Delete a specific post.

### Comments

- `POST /posts/:postId/comments`: Create a new comment for a specific post.
- `GET /posts/:postId/comments`: Get all comments for a specific post.
- `GET /posts/:postId/comments/:commentId`: Get a specific comment for a specific post.
- `PUT /posts/:postId/comments/:commentId`: Update a specific comment for a specific post.
- `DELETE /posts/:postId/comments/:commentId`: Delete a specific comment for a specific post.

## Usage

You can use any HTTP client (such as Postman or Curl) to interact with the API endpoints listed above. 

### Example:

#### Create a New Post:
`POST /posts`

`Request Body:
{
"title": "My First Post",
"content": "This is the content of my first post."
}`

#### Add a Comment to a Post:
`POST /posts/:postId/comments`

`Request Body:
{
"content": "This is a comment on the first post."
}`
