const bcrypt = require("bcryptjs");

module.exports = {
    register: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get("db");

        const foundUser = await db.users.check_users({username});
        if(foundUser[0]){
            return res.status(400).send("email already in use");
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        const newUser = await db.users.create_user({username, password: hash});
        req.session.user = newUser[0];
        res.status(201).send(req.session.user)
    },
    login: async(req, res) =>{

    },
    logout: async(req, res) =>{

    }
}