import React, {Component} from "react";
import {Link} from "react-router-dom"; 
import {connect} from "react-redux";
class Nav extends Component {
    constructor(props){
        super(props);
    }
    render(){  
        return(
            <div>
                {this.props.username}
                <img src={`${this.props.profilePicture}`}/>
                
                <Link to="/">Log Out</Link>
                <Link to="/dashboard" >Home</Link>
                <Link to="/new">New Post</Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);