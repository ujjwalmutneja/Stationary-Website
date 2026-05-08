const redis = require("redis");

let redisClient;

if (process.env.REDIS_URL) {
  redisClient = redis.createClient({
    url: process.env.REDIS_URL,
    socket: {
      reconnectStrategy: (retries) => {
        if (retries > 20) return new Error("Redis connection failed after 20 retries");
        return Math.min(retries * 100, 3000);
      },
      keepAlive: 5000, // 5 seconds
      connectTimeout: 10000,
    }
  });

  redisClient.on("error", (err) => {
    // Only log socket closures in production if they are persistent
    if (process.env.NODE_ENV === "production") {
      if (err.message !== "Socket closed unexpectedly") {
        console.error("Redis Client Error:", err);
      }
    }
  });

  redisClient.once("connect", () => console.log("Redis Client Connected"));

  (async () => {
    try {
      await redisClient.connect();
    } catch (err) {
      console.error("Redis Connection Failed:", err.message);
    }
  })();
} else {
  redisClient = {
    get: async () => null,
    set: async () => null,
    del: async () => null,
    on: () => { },
    connect: async () => { },
    once: () => { },
  };
  console.log("Redis URL missing. Running without cache.");
}

module.exports = redisClient;
