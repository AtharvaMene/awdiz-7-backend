import express from "express";
import { Login, Register } from "./controllers/auth.controller.js";
const app = express();
app.use(express.json());

app.post("/", function (req, res) {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (name && email && password) {
    res.send("Data Recieved.");
  } else {
    res.send("ALL Fields Are Mandatory");
  }
});

app.post("/register", Register);

app.post("/login", Login);

app.get("/hello", function (req, res) {
  res.send("Hello.");
});

app.listen(3000);
