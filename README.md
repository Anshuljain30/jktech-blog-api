# API

- An API to create users, login users, and add posts
- Stake - NestJS, MySQL (TypeORM)
- No static page served, Use Postman to test API, Import Collection.

### What's not working

[x] Test Framwork

# How to go up and running

- ### Local env

1. Clone this repo
2. Navigate to Project Directory
3. Update .env file (Provide Correct Connection Details for DB)

4. Install Packages

```sh

npm install

```

4. Run the server

```sh

npm start

```

# API Reference

Use Postman</br>

Use Header => Content-Type: application/json</br>

Protacted Routes - Authentication Token received as login response must be passed as Authorization Header for these requests</br>

Use Header => Authorization: `Bearer <Generated_Token>`</br>

#### USER Controller

| Method | Route        | Parameter           | Protected Route | Description                                         |
| :----- | :----------- | :------------------ | :-------------- | :-------------------------------------------------- |
| GET    | /users       | -                   | No              | Fetches All Users                                   |
| GET    | /users/${id} | id                  | No              | Fetches User with given id                          |
| POST   | /users       | name,email,password | No              | Create User with given data, Email should be unique |
| PATCH  | /users/${id} | id, name, password  | No              | Updates name and password of the User               |
| DELETE | /users/${id} | -                   | No              | Delete the User with provided ID                    |

#### POST Controller

| Method | Route        | Parameter           | Protected Route | Description                      |
| :----- | :----------- | :------------------ | :-------------- | :------------------------------- |
| GET    | /posts       | -                   | Yes             | Fetches All Posts                |
| GET    | /posts/${id} | id                  | Yes             | Fetches Post with given id       |
| POST   | /posts       | title, body, userId | Yes             | Create Post with given data      |
| PATCH  | /posts/${id} | title, body         | Yes             | Updates Post                     |
| DELETE | /posts/${id} | -                   | Yes             | Delete the Post with provided ID |

#### AUTH Controller

| Method | Route  | Parameter       | Protected Route | Description                 |
| :----- | :----- | :-------------- | :-------------- | :-------------------------- |
| POST   | /login | Email, Password | No              | Returns JWT for Valid User. |

# Author

Anshul Jain
