# Assignment 2 - Web API.

Name: Jia Yang

Student Number: 20104736

## Links:

1.This repository:https://github.com/Yolanda2002/react-assignment2

2.For the codes that couldn't be uploaded, I created a backup repository:https://github.com/Yolanda2002/react-assignment2

3.Youtube:https://youtu.be/a5deChRuDt0

## Features.

 + Login registration page functionality
 + Movie list, user like movie function 
 + User favorite list
 + etc.

## Setup requirements.

I use react-lab-CA as my front-end program and movies-api as my back-end program, attached to mongoDB, tested by postman.

## API Configuration

______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb+srv://yolanda:BWUKTQ3ux@movies.vrvbsqz.mongodb.net/movies?retryWrites=true&w=majority
TMDB_KEY=7a804bb586a5329ea60de4014363e5f7
SECRET=ilikecake

______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Get Movie List 
- /api/movies | POST | Post Movie List 
- /api/movies/{movieid} | GET | Get Movie List | GET | Get Single Movie 
- /api/movies/{movieid} | DELETE | Delete from Movie List | DELETE  | Delete Single Movie 
- /api/favorates/:username | PUT | Modify Favorite Movies
- /api/favorates/ | GET | Get List of Favorite Movies


## Security and Authentication

In my API, I used authentication mechanism to protect sensitive routing and data based on JWT (JSON Web Tokens), a compact, self-contained way to securely transfer information as JSON objects between client and server. 
When a user logs in, they need to provide a username and password, which are sent to the server via a secure API request. The backend service will validate these credentials and if they are valid, generate a JWT and return it to the frontend. This JWT is then stored in localStorage and sent as an authentication token in subsequent API requests.
The registration process is similar in that the user provides a username and password to register. If the registration is successful, the user data is stored in the database and can be used to log in using these credentials.
There are some protected routes in API that can only be accessed by authenticated users. These routes are mainly personal data of the user, such as a list of favorite movies. When the API receives a request for one of these protected routes, it checks to see if a valid JWT is included in the request header. if the token is missing or invalid, the request is rejected and an appropriate error message is returned.


## Integrating with React App

Updating API calls: modified the API calls in React app to point requests that were originally directed to the TMDB API to our own Web API. this includes functions such as logging in, signing up, getting foaourite movies, and so on.

Storing and using JWTs: API returns a JWT after a successful user login. the React app stores this JWT and includes it in the request header in subsequent API requests to authenticate the user.

Error Handling: Error handling logic is added to the API request to deal with various error scenarios that may be returned by the backend service.

### Views using the Web API

The following are some of the main views that use our Web API instead of the TMDB API:

LoginPage: Users enter credentials to authenticate with our Web API.
SignUpPage: Allows new users to sign up for an account, storing the user's information in the database via our Web API.
FavouritePage: displays a list of fovourite movies according to different users.

### Other updates to the React app

The following updates have been made to the React app since the first job:

Enhanced user interactions: The login and registration processes now include more detailed feedback, such as an error message provided to the user in the event of an authentication failure.

UI/UX Updates: Several improvements were made to the application interface, including smoother page jumps and responsive design optimizations.

Code refactoring: Code refactoring was performed to improve the maintainability and scalability of the application. This included better organizing the component structure and optimizing the API service code.

## Independent learning (if relevant)

1. Using the @mui UI component library
In order to improve the efficiency of front-end development and the aesthetics of the user interface, by using @mui, I was able to focus on the functional development of the application instead of spending a lot of time on the design and implementation of basic UI elements. In addition, I learned how to use @mui's theme system to customize the application's colors, typography, and layout to better fit the project's needs.

2. Integrating Mongoose API
On the backend, I adopted Mongoose as our primary means of interacting with the MongoDB database. By using Mongoose, we were able to define our data model, such as users, movies, etc., in a more intuitive and structured way, and easily implement add, delete, check, and modify (CRUD) operations.

One of the key benefits of Mongoose is that it allows me to define the architecture of the data model through simple JavaScript objects and provides features such as data validation, query building, business logic hooks, and more. This greatly simplifies interaction with MongoDB and makes database operations more secure and efficient.

By integrating with Mongoose, not only did I improve my back-end data processing capabilities, but I also learned how to efficiently manage and query databases, which is critical for any modern web application that involves large amounts of data storage and retrieval.



# PS.

1. while uploading the files I found a github error causing my react-lab-CA upload to fail, so I re-uploaded a file that uploads all the files, but since I am running the code here, I am using it as the main repository. link: https://github.com/Yolanda2002/react-test-2
2. I will add features in the future, I feel that it is still a bit lacking at the moment, so even if I submit it according to the timeline, I hope that my teacher will see my changes and improvements later on.

