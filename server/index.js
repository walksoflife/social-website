require("./configs/db");
const http = require("http");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const createError = require("http-errors");
const routes = require("./routes");
const { Server } = require("socket.io");
const {
  PORT,
  SESSION_OPTIONS,
  COR_OPTIONS,
  SOCKET_OPTIONS,
} = require("./configs");
const { socketHandler } = require("./socket");

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

// socket io
const io = new Server(httpServer, SOCKET_OPTIONS);
socketHandler(io);
