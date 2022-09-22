const express = require("express");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require('./routes/users.routes')
const experienceRoutes = require('./routes/experience.router')
const requireAuth = require ("./middle/requireAuth")

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
db();


// routing 
app.get("/", (req, res) => {
    res.json({ Hello: "World" });
  });

app.use("/experience",experienceRoutes );
app.use("/users",userRoutes)
  



app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
