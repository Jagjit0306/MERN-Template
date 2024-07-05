# MERN App Boilerplate

Kickstart your next MERN stack application with this sleek and efficient boilerplate. Designed for quick development and scalability, this template provides a solid foundation to turn your creative ideas into functional web applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environmental Variables](#environmental-variables)
  - [Server Environment Variables](#server-environment-variables)
  - [Client Environment Variables](#client-environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Express.js** for the backend server.
- **MongoDB** with Mongoose for database operations.
- **React** for the frontend.
- **Node.js** environment setup.
- **JWT** for authentication.
- Environment variable management.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Jagjit0306/MERN-Template.git
   cd MERN-Template
   ```

2. **Install dependencies for the server and client**

   ```bash
   cd server
   npm install
   cd client
   npm install
   ```

## Environmental Variables

You need to create `.env` files for both the server and the client to configure your environment variables.

### Server Environment Variables

Location: `./server/.env`

#### Should Include

- `SERVER_PORT`: Port number for the server (e.g., 5000).
- `ACCESS_TOKEN_SECRET`: Secret key for access token generation.
- `REFRESH_TOKEN_SECRET`: Secret key for refresh token generation.
- `FRONTEND_URL`: URL of the frontend application (e.g., http://localhost:3000).
- `DATABASE1_KEY`: MongoDB connection string.

Example:

```env
SERVER_PORT=5000
ACCESS_TOKEN_SECRET=youraccesstokensecret
REFRESH_TOKEN_SECRET=yourrefreshtokensecret
FRONTEND_URL=http://localhost:3000
DATABASE1_KEY=yourmongodbconnectionstring
```

### Client Environment Variables

Location: `./server/client/.env`

#### Should Include

- `REACT_APP_BACKEND_URL`: URL of the backend server (e.g., http://localhost:5000).

Example:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

## Usage

1. **Start the server**

   ```bash
   cd server
   npm run dev
   ```

2. **Start the client**

   ```bash
   cd server/client
   npm start
   ```

3. **Open your browser**

   Navigate to `http://localhost:3000` to see your application in action.

## Deployment

For deployment, follow these steps:

1. **Set `/server` as the root directory**

2. **Use `npm run build` as the build command**

3. **Use `npm run start` as the start command**

4. **Set environment variables**:

   - `REACT_APP_BACKEND_URL` to the domain name of your backend server.
   - `FRONTEND_URL` to the domain name of your frontend application.

## Project Structure

```plaintext
mern-app-boilerplate/
├── server/                # Express backend and React frontend
│   ├── client/            # React frontend
│   │   ├── build/
│   │   ├── node_modules/
│   │   ├── public/
│   │   ├── src/
│   │   ├── .env
│   │   ├── .gitignore
│   │   ├── package-lock.json
│   │   └── package.json
│   ├── controller/
│   ├── functions/
│   ├── models/
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── routes.js
│   └── server.js
├── LICENSE
├── README.md
```

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
