import React, {Component} from "react";
import Axios from "axios";

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            myPosts: true
        }
    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts = () =>{
        Axios.get("/api/posts")
        .then(res =>{
            this.setState({posts: res.data})
            console.log(res.data);
        })
    }

    handleMyPosts = () =>{
        this.setState({myPosts: !this.state.myPosts})
        console.log("changed")
    }

    render(){
        return(
            <div>
                <section>
                    <input placeholder="Search By Title"/>
                    <button>Reset</button>
                    <input type="checkbox" onChange={this.handleMyPosts} value={this.state.myPosts} /> My Posts
                </section>

                
            </div>
        )
    }
}