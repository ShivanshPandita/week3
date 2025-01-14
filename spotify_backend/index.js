const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/User");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
require("dotenv").config();
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const cors = require("cors");
const app = express();
const PORT = 8080;

// Explicit CORS headers to ensure all headers are included
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');  // Allow frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allowed headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');  // Allow credentials (cookies, etc.)
  next();
});

// Preflight OPTIONS request handler
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.status(200).end();
});

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:" +
      process.env.MONGO_PASSWORD +
      "@cluster0.xur7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

// Passport setup
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "{jwtkey}"; // Ensure this is the same secret used for signing the JWT

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      const user = await User.findOne({ _id: jwt_payload.identifier });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);


app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Server will run on localhost:8080
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
