export default function handler(req, res) {
    if (req.method === "POST") {
      const { email, password, name } = req.body;
  
      // Add validation and save the user to a database here.
      return res.status(201).json({ message: "User registered successfully", email, name });
    }
    res.status(405).json({ message: "Method not allowed" });
  }
  