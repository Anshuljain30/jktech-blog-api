# API

- An API to create users, login users, and add posts
- Stake - NestJS, MySQL (TypeORM)
- No static page served, Use Postman to test API, Import Collection.

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

# API Endpoints

Use Postman</br>

Use Header => Content-Type: application/json</br>

Protacted Routes - Authentication Token received as login response must be passed as Authorization Header for these requests</br>

Use Header => Authorization: `Bearer <Generated_Token>`</br>

# Author

Anshul Jain
