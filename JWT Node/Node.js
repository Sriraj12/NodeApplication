token generation using username and password. with EXPRESS.JS

 app.post('/token', (req, res) => {
  console.log("reqreqreq", req.body)
   const user = users.find((usr) => usr.username === req.body.username);
  if (user) {
     let jwtSecretKey = 'gfg_jwt_secret_key';
    if (user.password === req.body.password) {
      const token = jwt.sign(user, jwtSecretKey);
       res.status(200).send({ token: token })
     } else {
      res.status(401).send({ message: "No Access" })
    }
  } else {
    res.status(401).send({ message: "Cannot Access" })
  }
 });


to fetch the jWT token from node.js

 const tokens = axios.post('http://localhost:8000/token', { username, password })
                    .then(response => {
                        const token = response.data.token;
                        localStorage.setItem("token", token)
                        console.log("token", tokens);
                     })
                     .then(() => {
                        setToken(true);
                     })
                     .catch(err => console.log(err));


to get the username and password to node.js

  const loginUser = axios.post('http://localhost:8000/details', { username, password })
       .then(response => {
            const loggedInUser = response.data.loggedInUser;
           setData(loggedInUser);
         console.log("loguser", data);
           console.log("loginuser", loginUser);
        })
         .catch(err => console.log(err));


to fetch data from backend

    useEffect(() => {
     fetch("http://localhost:8000/userdetails")
             .then((data) => data.json())
            .then(data => setData(data))
   }, [])



