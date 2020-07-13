import React, {Component} from "react";

export default class Auth extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Auth
                <button>Log In</button>
                <button>Register</button>
                

            </div>
        )
    }
}