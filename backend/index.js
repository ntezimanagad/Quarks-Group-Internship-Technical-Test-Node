import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// In-memory storage
const users = {};

// POST /users
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  const id = uuidv4();
  const newUser = { id, name, email };
  users[id] = newUser;
  res.status(201).json(newUser);
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
  const user = users[req.params.id];
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// Start the server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
