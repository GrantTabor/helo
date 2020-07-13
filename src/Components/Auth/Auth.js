import React, {Component} from "react";
import Axios from "axios";
import {connect} from "react-redux";
import {getUser, getUserId, getProfilePicture} from "../../redux/reducer"

 class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            userId: "",
            user: {}
        }
    }

    handleRegister = () =>{
        const {username, password} = this.state;
        if (username != "" && password != ""){
            Axios.post("/api/register", {username, password})
            .then (res =>{
                this.props.getUser(res.data.username);
                this.props.getUserId(res.data.userid);
                this.props.getProfilePicture(res.data.profile_picture)
                this.props.history.push("/dashboard")
            })
            .catch(err =>{
                alert(err)
        })
        }
    }
    handleLogin = () =>{
        const {username, password} = this.state;
        Axios.post("/api/login", {username, password})
        .then(res =>{
            //alert(res.data.profile_picture);
            this.props.getUser(res.data.username);
            this.props.getUserId(res.data.userid);
            this.props.getProfilePicture(res.data.profile_picture)
            this.props.history.push("/dashboard")
        })
        .catch(err =>{
            alert(err);
        })
    }

    handleUsername = (val) =>{
        this.setState({username: val})
    }
    handlePassword = (val) =>{
        this.setState({password: val})
    }

    render(){
        
        return(
            <div>
                Auth

                <input placeholder="enter username" onChange={(e) => this.handleUsername(e.target.value)} />
                <input placeholder="enter password" onChange={(e) => this.handlePassword(e.target.value)} />

                <button onClick={() => this.handleLogin()}>Log In</button>
                <button onClick={() => this.handleRegister()} >Register</button>
                

            </div>
        )
    }
}

export default connect(null, {getUser, getUserId, getProfilePicture})(Auth)