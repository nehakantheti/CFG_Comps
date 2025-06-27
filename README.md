# CFG_Comps Full-Stack Boilerplate

A modern full-stack boilerplate featuring a React frontend, Express.js backend, and Python ML service. Perfect for building scalable applications with AI/ML capabilities.

## Project Structure 🏗️

```
CFG_Comps/
├── frontend/          # React + Vite frontend application
├── backend/          # Express.js + MongoDB backend
└── ml/              # Python ML service
```

## Features 🚀

### Frontend
- React 18+ with Vite for fast development
- Modern routing with React Router
- Pre-built components (Navbar, Footer, Registration)
- Clean project structure
- Ready-to-use authentication flow

### Backend
- Express.js REST API
- MongoDB integration with Mongoose
- JWT authentication
- User management
- Chat functionality
- Comprehensive testing setup

### ML Service
- Python-based ML service
- Google Gemini integration
- Easy-to-extend ML pipeline
- Requirements management

## Quick Start 🏃‍♂️

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
```

### 3. ML Service
```bash
cd ml
pip install -r requirements.txt
# Configure your API keys in config file
python main.py
```

## Documentation 📚

Each component has its own detailed README:
- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
- [ML Service Documentation](./ml/README.md)

## Development Stack 💻

- **Frontend**: React, Vite, React Router
- **Backend**: Node.js, Express, MongoDB
- **ML**: Python, Google Gemini
- **Testing**: Jest, Supertest
- **Authentication**: JWT

## Getting Started 🌟

1. Clone the repository
2. Set up each component following their respective README files
3. Configure environment variables
4. Start developing!

## Best Practices 💡

- Follow the existing project structure
- Write tests for new features
- Keep components modular and reusable
- Document new endpoints and features
- Use consistent code formatting

## Contributing 🤝

Feel free to:
- Submit bug reports
- Propose new features
- Create pull requests

Happy coding! 🎉