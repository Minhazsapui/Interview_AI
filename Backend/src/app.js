const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://interview-ai-nine-pi.vercel.app",
      "https://interview-n6b4ru5hd-minhazuddin-sapuis-projects.vercel.app",
      "https://interview-ai-git-main-minhazuddin-sapuis-projects.vercel.app",
    ],
    credentials: true,
  }),
);

/* require all the routes here */
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
