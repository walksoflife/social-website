import { connectDB } from "./configs/db.js";
import http from "http";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import session from "express-session";
import passport from "passport";
import createError from "http-errors";
import {routes} from "./routes/index.js";
import { Server } from "socket.io";
import {
  PORT,
  SESSION_OPTIONS,
  COR_OPTIONS,
  SOCKET_OPTIONS,
} from "./configs/index.js";
import { socketHandler } from "./socket.js";

const port = PORT || 5000;
const app = express();
const httpServer = http.createServer(app);

app.use(morgan("dev"));
app.use(compression());
app.use(session(SESSION_OPTIONS));
app.use(express.json());
app.use(helmet());
app.use(cors(COR_OPTIONS));

// const root = require("path").join(__dirname, "../client/build");
// app.use(express.static(root));
// app.get("*", (req, res) => {
//   res.sendFile("index.html", { root });
// });

// passport set up
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(routes());

// middleware
app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

httpServer.listen(port, () => console.log("Server is running on port " + port));
connectDB();

// socket io
const io = new Server(httpServer, SOCKET_OPTIONS);
socketHandler(io);
