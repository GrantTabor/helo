const bcrypt = require("bcryptjs");
const { getAllByAltText } = require("@testing-library/react");

module.exports = {
    register: async(req, res, next) => {
        const {username, password} = req.body;
        const db = req.app.get("db");
            
        
        const foundUser =  await db.check_users(username)
       
        if(foundUser[0]){
            return res.status(400).send("username already in use");
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

       
        
        const newUser = await db.create_user(username, hash, `https://robohash.org/${username}`)
       
        const user = await db.check_users(username);
        
        res.status(201).send(user[0]);
    },
    login: async(req, res, next) =>{
        const {username, password} = req.body;
        const db = req.app.get("db");

        const foundUser = await db.check_users(username);
        if(!foundUser[0]){
            return res.status(400).send("username not in use");
        }
        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenticated){
            return res.status(401).send("incorrect username or password")
        }
        delete foundUser[0].password;

        req.session.user = foundUser[0];
        res.status(202).send(foundUser[0]);
    },
    logout: async(req, res) =>{
        req.session.destroy();
        res.sendStatus(200)
    },
    getAllPosts: (req, res) =>{
        const db = req.app.get("db");

        db.get_all_posts()
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(err =>{
            res.status(500).send(err)
        })
    }
}