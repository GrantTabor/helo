import React, {Component} from "react";
import Nav from "../Nav/Nav";
export default class Post extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Nav />
                Post
            </div>
        )
    }
}