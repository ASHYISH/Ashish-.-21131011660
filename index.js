const express = require("express");
const cors = require("cors");
const messagesRoute = require("./routes/messagesRoute");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const jwt = require('jsonwebtoken');
const verifyToken = require('./authMiddleware'); 



const SECRET_KEY = process.env.SECRET_KEY;

app.post('/test/register', (req, res) => {
  const user = {
      "companyName": "AffordMedical",
      "clientID": "e2c7be2e-65d3-4e9b-9c3a-0a0eb9d7257e",
      "clientSecret": "HejlcldDedWLzVMY",
      "ownerName": "Ashish",
      "ownerEmail": "ashish.21scse1010071@gagotiasuniversity.edu.in",
      "rollNo": "21131011660"
  };

  jwt.sign({ user }, SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({ token });
    }
  });
});

// Protected route
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({
    message: 'This is a protected route',
    authData: req.authData
  });
});


app.use("/api/test", messagesRoute);
app.use("/api/test", messagesRoute);

const PORT = process.env.PORT ;
const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
