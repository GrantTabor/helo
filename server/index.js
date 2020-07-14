require("dotenv").config();

const express = require("express");
const massive = require("massive");
const session = require("express-session");
const controller = require("./controller");
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express();
app.use(express.json());


app.use(session({
    resave: false,
    saveUninitialized: true, 
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(dbInstance => {
        app.set("db", dbInstance);
        console.log("db connected")
      })
      .catch(err => console.log(err));
    
app.post("/api/register", controller.register);
app.post("/api/login", controller.login);
app.get("/api/logout", controller.logout);

app.get("/api/posts/", controller.getAllPosts), 


app.listen(4000, ()=>{
    console.log(`Server is running on ${SERVER_PORT}`);
})
