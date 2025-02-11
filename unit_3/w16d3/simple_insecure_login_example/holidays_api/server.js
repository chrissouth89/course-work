const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const PORT = 3003;

const holidaysController = require("./controllers/holidays.js");
const sessionsController = require("./controllers/sessions.js");
const usersController = require("./controllers/users.js");

// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect("mongodb://localhost:27017/holidays", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// middleware
app.use(express.json()); //use .json(), not .urlencoded()

// Secret for authentication/session:
app.use(
  session({
    secret: "feedmeseymour", //some random string
    resave: false,
    saveUninitialized: false,
  })
);

// CORS middleware:
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3003",
  "https://fathomless-sierra-68956.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors());

// /holidays/ routes
app.use("/holidays", holidaysController);
app.use("/sessions", sessionsController);
app.use("/users", usersController);

// Web server:
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
