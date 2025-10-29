// server.js
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

// Add this route BEFORE starting the server
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

async function start() {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("Connected to MongoDB:", config.mongoUri);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }

  const server = app.listen(config.port, (err) => {
    if (err) {
      console.error("Server failed to start:", err);
      process.exit(1);
    }
    console.info(`Server started on port ${config.port}`);
    console.info(`API endpoints:`);
    console.info(`   POST http://localhost:${config.port}/api/signin`);
    console.info(`   POST http://localhost:${config.port}/api/users`);
    console.info(`   GET  http://localhost:${config.port}/api/signout`);
  });

  // Graceful shutdown
  process.on("SIGINT", async () => {
    console.log("SIGINT received. Closing server and MongoDB connection...");
    server.close(async () => {
      await mongoose.disconnect();
      console.log("Closed. Exiting.");
      process.exit(0);
    });
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
}

start();