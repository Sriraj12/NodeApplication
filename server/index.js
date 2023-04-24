const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const users = require("./users.json");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send("Welcome to JSON server page");
})

app.get('/store', authenticateToken, (req, res) => {
  res.send([{ name: "Sriraj", age: "23", place: "Tirunelveli" }, { name: "Dillshad", age: "22", place: "Tirunelveli" },
  { name: "Shiva", age: "23", place: "Nagercoil" }, { name: "Ajay", age: "24", place: "Thoothukudi" }])
})

app.get('/userdetails', (req, res) => {
  res.send(users)
})

app.post('/login', (req, res) => {

  const loginUser = users.find((user) => user.username === req.body.username);
  let jwtSecretKey = '046ee949a348b0b3c84826d91383aa7d99d891cf919cbe583346ec8803ab4ed4df35a6f37023349aa19a2fc9ec50d9d14cdda3474fb565de46f515121439d907';
  if (!loginUser) {
    res.status(401).send({ message: "Invalid User" })
  } else if (loginUser.password !== req.body.password) {
    res.status(401).send({ message: "Invalid Password" })
  } else {
    const token = jwt.sign(loginUser, jwtSecretKey);
    res.status(200).send({ token: token })
  }
});

function authenticateToken(req, res, next) {
  let jwtSecretKey = '046ee949a348b0b3c84826d91383aa7d99d891cf919cbe583346ec8803ab4ed4df35a6f37023349aa19a2fc9ec50d9d14cdda3474fb565de46f515121439d907';
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token === null) {
    return res.sendStatus(401)
  }
  const verifyToken = jwt.verify(token, jwtSecretKey, (err, users) => {
    if (err) {
      return res.status(403).send('Not a valid user')
    } else {
      req.users = users;
      next()
    }
  })

}

app.listen(8000, () => {
  console.log(`Server listening on 8000`);
});