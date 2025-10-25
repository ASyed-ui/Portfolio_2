
// config/config.js
import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5000,
  jwtSecret: process.env.JWT_SECRET || "change_this_to_a_long_secret",
  // prefer MONGO_URI (set this in your .env). If not set, build a local mongodb:// fallback
  mongoUri:
    process.env.MONGO_URI ||
    process.env.MONGODB_URI || // support this older name if you used it elsewhere
    `mongodb://${process.env.MONGO_HOST || "localhost"}:${process.env.MONGO_PORT || "27017"}/Portfolio`
};

export default config;
