# AI Agent Instructions for Portfolio Project

## Project Architecture

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) portfolio application with a clear separation between client and server:

- `client/`: Vite-based React frontend
- `server/`: Express.js backend with MongoDB integration
- Key integration points in `server/express.js` and `config/config.js`

### Core Components

1. **Frontend (React)**
   - Main router: `client/src/router/MainRouter.jsx`
   - Section components in `client/src/components/sections/`
   - Global styles in `client/src/App.css`

2. **Backend (Express)**
   - API routes in `server/routes/`
   - Controllers in `server/controllers/`
   - MongoDB models in `server/models/`
   - Error handling utilities in `server/helpers/dbErrorHandler.js`

## Development Workflow

### Starting the Development Environment

```bash
# Start both frontend and backend in development mode
npm run dev

# Start frontend only (from project root)
npm run dev:client

# Start backend only (from project root)
npm run dev:server
```

### Build and Deployment

```bash
# Build frontend
npm run build

# Preview production build
npm run preview
```

## Project Conventions

1. **API Structure**
   - All API routes are prefixed with `/api`
   - Authentication endpoints: `/api/signin`, `/api/signout`
   - Resource endpoints follow RESTful patterns (e.g., `/api/users`, `/api/projects`)

2. **Component Organization**
   - Section components are in dedicated folders under `components/sections/`
   - Shared components like `LoadingScreen`, `Navbar` are in `components/`
   - Each component has its own styling co-located in the same directory

3. **State Management**
   - Uses React Router for navigation
   - MongoDB for persistent data storage
   - JWT-based authentication (see `server/controllers/auth.controller.js`)

## Key Integration Points

1. **Frontend-Backend Communication**
   - Backend API runs on port specified in `config/config.js`
   - CORS is enabled for development
   - Authentication uses JWT tokens

2. **Database**
   - MongoDB connection managed in `server.js`
   - Models defined in `server/models/` with Mongoose schemas
   - Error handling through `dbErrorHandler.js`

## Common Patterns

1. **API Controllers**
   - Follow CRUD pattern
   - Include error handling
   - Use async/await pattern
   - Example in `server/controllers/user.controller.js`

2. **Frontend Components**
   - Use functional components with hooks
   - Implement scroll animations via `RevealOnScroll` component
   - Mobile-responsive design patterns

## Important Notes

- Environment variables should be configured in `.env` (not tracked in git)
- The project uses ES modules (`type: "module"` in package.json)
- MongoDB connection string should be set in `config/config.js`
- Frontend uses Tailwind CSS for styling