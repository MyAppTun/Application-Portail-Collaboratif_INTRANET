import React, { Component } from "react";
import LoginA from './component/LoginAdmin/loginA'
import SignupManager from './component/signupManager/signupManager'
import Panel from './component/Panel/panel'
import {Route,BrowserRouter as Router,Switch,Link}from "react-router-dom";


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      logedin : false
    }
  }

  async componentDidMount(){
    if(document.cookie){
      await this.setState({logedin : true});
    }
  }
// handling component to show in single page 
  render() {
    return (
        <div className="App"> 
       {/* <SignupManager></SignupManager> */}
            {/* <LoginA></LoginA> */}
            <Panel></Panel>
           
        

        

  
        </div>
    )
  }
}