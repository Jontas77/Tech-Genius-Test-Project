const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Welcome"));

// Routes //
app.use("/api", require("./apiRoutes"));

//login
app.use("/auth", require("./auth/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
