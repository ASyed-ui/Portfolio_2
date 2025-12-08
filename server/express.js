// server/express.js
import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

// Import routes
import contactsRouter from "./routes/Contact.js";
import projectsRouter from "./routes/projects.js";
import educationRouter from "./routes/educations.js";
import usersRouter from "./routes/users.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

/* --------------------------------------------
   CORS CONFIG — IMPORTANT FOR VERCEL + RENDER
----------------------------------------------*/
const allowedOrigins = [
  "http://localhost:5173",                             // local dev
  "https://portfolio-2-hexj.onrender.com",            // Render backend
  "https://portfolio-2-olive-psi.vercel.app"           // <-- replace this!!
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow server-to-server/cURL

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS blocked origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true, // allow cookies
  })
);

/* --------------------------------------------
   MIDDLEWARE
----------------------------------------------*/
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());

/* --------------------------------------------
   ROUTES
----------------------------------------------*/

// API groups
app.use("/api/contacts", contactsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/educations", educationRouter);
app.use("/api/users", usersRouter);

// Auth + user
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

/* --------------------------------------------
   ERROR HANDLING
----------------------------------------------*/
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: "Invalid token" });
  }

  console.error("🔥 SERVER ERROR:", err);
  res.status(500).json({
    error: "Internal server error",
    message: err.message,
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
