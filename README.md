Project Name
============

This is a web application for an e-commerce website.

Technologies Used
-----------------

- Node.js
- Express.js
- MongoDB
- JWT
- Bcrypt

Requirements
------------

- Node.js
- MongoDB Atlas account (or a local MongoDB instance)

Getting Started
---------------

1. Clone the repository:

```
bash
git clone https://github.com/your-username/your-repository.git
 
```

2. Install dependencies:

```
bash
`cd your-repository npm install `
 
```

3. Create a `.env` file in the root directory with the following contents:

```

`PORT=3000 MONGODB_URI=mongodb+srv://:@/?retryWrites=true&w=majority ACCESS_TOKEN_SECRET= REFRESH_TOKEN_SECRET= `

```

4. Start the server:

```

`npm start `
 
```



Features
--------

- User authentication and authorization
- Password hashing with bcrypt
- Access and refresh token management with JWT
- Protected routes

Routes
------

| Method | Route | Description |
| -------- | -------- | -------- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in an existing user |
| POST | `/api/auth/logout` | Log out a user |
| POST | `/api/auth/token` | Refresh access token |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a specific product |
| POST | `/api/products` | Add a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |



License
-------

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/chat/LICENSE) file for details.
