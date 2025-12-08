# AI Agent Instructions for Portfolio Project

## Project Architecture

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) portfolio application with a clear separation between client and server:

- `client/`: Vite-based React frontend with Tailwind CSS
- `server/`: Express.js backend with MongoDB integration
- `config/`: Configuration files and environment setup
- Version control with Git (`.history/` directory for local history)

### Key Integration Points
- Backend configuration in `server/express.js` and `config/config.js`
- Authentication using JWT tokens with `auth.controller.js`
- MongoDB connection handling in `server.js`

### Core Components

1. **Frontend (React + Vite)**
   - Main router: `client/src/router/MainRouter.jsx` - Handles all route definitions
   - Section components in `client/src/components/sections/` - Modular page sections
   - Shared components in `client/src/components/` - Reusable UI elements
   - Global styles in `client/src/App.css` using Tailwind CSS

2. **Backend (Express + MongoDB)**
   - API routes in `server/routes/` - RESTful endpoints
   - Controllers in `server/controllers/` - Business logic
   - MongoDB models in `server/models/` - Data schemas
   - Error handling in `server/helpers/dbErrorHandler.js`
   - JWT authentication in `auth.controller.js`

## Development Workflow

### Initial Setup

1. Install dependencies:
```bash
npm install        # Root dependencies
cd client && npm install   # Client dependencies
```

2. Configure MongoDB:
   - Set connection string in `config/config.js`
   - Ensure MongoDB is running locally or update URI for remote database
   - Required collections: users, projects, contacts, educations

3. Environment Setup:
   - Create `.env` file in root directory
   - Required variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=3000
     ```
   - Configure `.babelrc` for ES modules support

### Development Commands

```bash
# Start both frontend and backend in development mode
npm run dev

# Start frontend only (Vite dev server)
npm run dev:client

# Start backend only (with nodemon)
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
   - Resource endpoints follow RESTful patterns:
     - `/api/users` - User management
     - `/api/projects` - Portfolio projects
     - `/api/contacts` - Contact submissions
     - `/api/educations` - Education records

2. **Component Organization**
   - Page sections in `components/sections/` (About.jsx, Contact.jsx, Home.jsx, Projects.jsx, Services.jsx)
   - Shared UI components in `components/` (Navbar.jsx, MobileMenu.jsx, LoadingScreen.jsx, RevealOnScroll.jsx)
   - Styling co-located with components (CSS modules or inline)
   - Mobile-first responsive design throughout

3. **State Management**
   - React Router v7 for navigation and routing
   - MongoDB for persistent data storage
   - JWT tokens stored in HTTP-only cookies for auth
   - Form state managed with controlled components

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

- Environment variables in `.env` (not tracked in git)
- ES modules enabled (`type: "module"` in both root and client package.json)
- MongoDB connection required in `config/config.js` before server startup
- Frontend uses Tailwind CSS v4 for styling
- Nodemon configured for auto-reload on backend changes
- Concurrently runs dev:client and dev:server simultaneously
- CORS and security headers configured in `server/express.js`
- Error handling centralized in `server/helpers/dbErrorHandler.js`
- Forms use EmailJS for contact submissions
- Scroll animations with `react-scroll` library