const express = require("express");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const routes = require("./routes");
const sequelize = require("./config/connection");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3001;

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

// these should be transferred to .env file:

const SESS_NAME = "sid";
const SESS_SECRET = "jfkdlwifj23ru";

app.use(cors());

app.use(
  session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
      maxAge: ONE_WEEK,
      // sameSite: false,
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build"));
// });

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}!`);
  });
});
