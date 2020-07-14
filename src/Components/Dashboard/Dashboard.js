import React, {Component} from "react";
import Axios from "axios";
import {connect} from "react-redux";

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            myPosts: true,
            filter: ''
        }
    }

    componentDidMount(){
        this.getPosts();
    }

    

    getPosts = () =>{

        Axios.get(`/api/posts/${this.state.myPosts ? `?userid=` + this.props.id + '&' : ''}${"filter=" + this.state.filter}`)
        .then(res =>{
            this.setState({posts: res.data})
            console.log(res.data);
        })
    }

    handleMyPosts = () =>{
        this.setState({myPosts: !this.state.myPosts})
        console.log("changed")
        this.getPosts();
    }

    handleFilter = (val) =>{
        this.setState({filter: val})
    }

    resetFilter = () =>{
        this.setState({filter: ''})
    }

    

    render(){
        return(
            <div>
                <section>
                    <input value={this.state.filter}  placeholder="Search By Title" onChange={(e) => this.handleFilter(e.target.value)} />
                    <button onClick={this.resetFilter} >Reset</button>
                    <button onClick={this.getPosts} >Search</button>
                    <input type="checkbox" onChange={this.handleMyPosts} checked={this.state.myPosts} /> My Posts
                </section>

                <section>
                    {this.state.posts.map((post)=>{
                        return(
                            <div>
                                {post.title}
                                {post.username}
                               <img src={post.profile_picture}/>
                            </div>
                        )
                    })}
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState =>reduxState;

export default connect(mapStateToProps)(Dashboard);