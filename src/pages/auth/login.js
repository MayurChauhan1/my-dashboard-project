import jwt from "jsonwebtoken";

const users = [
  { id: 1, email: "test@example.com", password: "password123", name: "Test User" },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ token, user });
    }
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.status(405).json({ message: "Method not allowed" });
}
