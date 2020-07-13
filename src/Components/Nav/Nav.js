import React, {Component} from "react";

export default class Nav extends Component {
    constructor(props){
        super(props);
    }
    render(){  
        return(
            <div>
                nav
                <button onClick={() => this.props.history.push("/dashboard")}>Home</button>
            </div>
        )
    }
}