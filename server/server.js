// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;

const JWT_SECRET = 'your_jwt_secret'; // Use a secure secret in production

app.use(cors({
  origin: 'http://localhost:3000' // Adjust if your frontend is hosted on a different port
}));
app.use(bodyParser.json());

const ADMIN_USER = {
  id: 1,
  username: 'kitchnix.admin',
  password: 'password123' // Change this to your desired admin credentials
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Received username:', username);
  console.log('Received password:', password);

  if (username == ADMIN_USER.username && password == ADMIN_USER.password) {
    const token = jwt.sign({ id: ADMIN_USER.id, username: ADMIN_USER.username }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ success: true, token });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
