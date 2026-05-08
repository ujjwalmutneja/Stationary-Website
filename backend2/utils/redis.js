const redis = require("redis");

const redisClient = redis.createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("error", (err) => {
  // Silent in local development to avoid terminal spam
  if (process.env.NODE_ENV === "production") {
    console.error("Redis Client Error", err);
  }
});

redisClient.once("connect", () => console.log("Redis Client Connected"));

(async () => {
  try {
    // Agar local par redis nahi hai toh ye error dega, jise hum catch kar lenge
    await redisClient.connect();
  } catch (err) {
    if (process.env.NODE_ENV === "production") {
      console.error("Could not connect to Redis", err);
    } else {
      console.log("Redis not found locally, skipping... (Using MongoDB only)");
    }
  }
})();

module.exports = redisClient;
