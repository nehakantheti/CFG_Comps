# Backend Service Boilerplate

Welcome to our Express.js backend boilerplate! This template provides a solid foundation for building scalable Node.js applications with authentication, user management, and real-time chat capabilities. Feel free to use this as a starting point for your own project!

## What's Included? 🚀

- **Ready-to-use Authentication System**: JWT-based auth system with login/register
- **User Management**: Basic user CRUD operations
- **Chat System**: Real-time chat functionality
- **Testing Setup**: Pre-configured Jest testing environment
- **Error Handling**: Production-ready error middleware
- **Database Integration**: MongoDB setup with Mongoose
- **API Security**: CORS, input validation, and middleware protection

## Quick Start 🏃‍♂️

1. Clone and install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment:
   ```bash
   # Copy the example env file
   cp .env.example .env

   # Fill in your values in .env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. Start developing:
   ```bash
   npm run dev
   ```

## Project Structure 📁

```
backend/
├── __tests__/           # Test files
├── config/             # Configuration files
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/            # Mongoose models
├── routes/            # API routes
├── services/          # Business logic
└── server.js          # Main application entry
```

## Available Scripts 📜

- `npm start`: Production mode
- `npm run dev`: Development mode with hot-reload
- `npm test`: Run all tests
- `npm run test:watch`: Development testing
- `npm run test:coverage`: Check test coverage

## API Endpoints 📚

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Login to existing account
- `GET /api/auth/me` - Get current user info

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Chat
- `POST /api/chat/message` - Send a message
- `GET /api/chat/messages` - Get chat history

## Adding Your Own Components 🛠️

1. **Models**: Add your Mongoose models in the `models/` directory
2. **Controllers**: Create your route handlers in `controllers/`
3. **Routes**: Define your API endpoints in `routes/`
4. **Tests**: Add corresponding tests in `__tests__/`
5. **Register**: Add new routes to `server.js`

## Environment Variables ⚙️

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing
- `NODE_ENV`: Environment mode (development/production/test)

## Best Practices 💡

1. Always validate input using express-validator
2. Use the error middleware for consistent error responses
3. Keep controllers thin, move business logic to services
4. Write tests for new functionality
5. Use async/await for cleaner code
6. Follow the existing project structure for consistency

## Need Help? 🤝

1. Check the `__tests__` directory for usage examples
2. Look at existing implementations in `controllers/` and `routes/`
3. Review the error handling in `middleware/error.middleware.js`

Happy coding! 🎉 