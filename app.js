import createError from "http-errors";
import express, { json, urlencoded, static as expressStatic } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import methodOverride from "method-override";

dotenv.config();

// Routes
import indexRouter from "./routes/index.js";
import postsRouter from "./routes/posts.js";
import reviewsRouter from "./routes/reviews.js";

// Models
import User from "./models/user.js";

//  configs
import connectDB from "./config/db.js";
import cloudConnection from "./config/cloudinary.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressStatic(join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "thisIsMySecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Passport setup
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// function to initialize configs
connectDB();
cloudConnection();

// Mounting Routes
app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/posts/:id/reviews", reviewsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
