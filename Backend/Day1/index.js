import express from "express";
import { connectDB } from "./db.js";
import User from "./models/User.js";

const app = express();
const PORT = 5000;

app.use(express.json());

const startServer = async () => {
  try {
    await connectDB();

    app.post("/signup", async (req, res) => {
      try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
          return res.status(400).json({ message: "All fields required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
          return res.status(409).json({ message: "User already exists" });
        }

        const user = await User.create({ name, email, password });

        return res.status(201).json({
          message: "Signup successful",
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });

      } catch (error) {
        return res.status(500).json({ message: "Signup failed" });
      }
    });

    app.listen(PORT, () => {
      console.log("Server running on", PORT);
    });

  } catch (error) {
    console.error("Server not started");
  }
};

startServer();
