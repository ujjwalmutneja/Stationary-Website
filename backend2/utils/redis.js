const redis = require("redis");

let redisClient;

if (process.env.REDIS_URL) {
  redisClient = redis.createClient({
    url: process.env.REDIS_URL.trim(), // .trim() se extra spaces hat jayenge
    socket: {
      family: 4, // Force IPv4 (Upstash aur Render ke beech DNS timeout issue fix karne ke liye)
      // rediss:// protocol automatically enables TLS, so we don't need to explicitly pass a tls object
      reconnectStrategy: (retries) => {
        if (retries > 20) return new Error("Redis connection failed after 20 retries");
        return Math.min(retries * 100, 3000);
      },
      keepAlive: 5000,
      connectTimeout: 10000,
    },
    // Har 30 second mein ek chhota ping bhejega connection check karne ke liye
    pingInterval: 30000,
  });

  // Saari errors ko silent karte hain jab tak hum manually check na karna chahein
  redisClient.on("error", (err) => {
    // Sirf wahi errors dikhayega jo 'Socket closed' nahi hain
    if (!err.message.includes("Socket closed")) {
      console.error("Redis Client Error:", err);
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
