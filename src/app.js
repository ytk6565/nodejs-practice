const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const passport = require('./middleware/auth');
const session = require('express-session');
const flash = require('connect-flash');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
  secret: 'YOUR-SECRET-STRING',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// static
app.use("/static", express.static(path.join(__dirname, "public")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// router
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const userRouter = require("./routes/user");

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
