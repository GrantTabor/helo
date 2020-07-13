import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from "./Components/Auth/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Nav from "./Components/Nav/Nav";
import Post from "./Components/Post/Post";
import routes from "./routes";


class App extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div className="App">
      {routes}
    </div>
    )
  }
}

export default App;
