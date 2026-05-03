const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SOC Backend API is running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend working" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "analyst@soc.local" && password === "socdemo2026") {
    return res.json({
      success: true,
      user: {
        email: "analyst@soc.local",
        role: "SOC Analyst"
      },
      token: "demo-token-123"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password"
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`SOC Backend running on port ${PORT}`);
});
