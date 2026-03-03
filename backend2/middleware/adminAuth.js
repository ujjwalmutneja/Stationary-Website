module.exports = (req, res, next) => {
  const secret = req.query.secret;

  if (secret != process.env.ADMIN_SECRET) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  next();
};