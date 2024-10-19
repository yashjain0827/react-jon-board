// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000";

router.post('/auth/signup', (req, res) => {
  // Your signup logic here
  res.status(200).json({ message: 'Signup successful' });
});
