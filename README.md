# MERN App Boilerplate

Got it, here's a more balanced version:

Kickstart your next MERN stack application with this sleek and efficient boilerplate. Designed for quick development and scalability, this template provides a solid foundation to turn your creative ideas into functional web applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environmental Variables](#environmental-variables)
  - [Server Environment Variables](#server-environment-variables)
  - [Client Environment Variables](#client-environment-variables)
- [Usage](#usage)
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

2. **Install dependencies for the server**

   ```bash
   cd server
   npm install
   ```

3. **Install dependencies for the client**

   ```bash
   cd ../client
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

Location: `./client/.env`

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
   cd ../client
   npm start
   ```

3. **Open your browser**

   Navigate to `http://localhost:3000` to see your application in action.

## Project Structure

```plaintext
mern-app-boilerplate/
├── client/                # React frontend
│   ├── public/
│   └── src/
├── server/                # Express backend
│   ├── functions/
│   ├── models/
│   └── server.js
├── .gitignore
├── README.md
└── package.json
```

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
