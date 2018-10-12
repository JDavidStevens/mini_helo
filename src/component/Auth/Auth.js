import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUsername,updatePassword} from '../../ducks/reducer';



class Auth extends Component {
constructor(){
  super()

  this.state={
    username:'',
    password:''
  }

  this.login=this.login.bind(this);
  this.register=this.register.bind(this);
}

handleUsername(value){
  this.setState({username: value})
}

handlePassword(value){
  this.setState({password:value})
}

login(){

  let {username,password}=this.state;
  axios.post('/api/auth/login',{username, password})
  .then(response=>{
    this.props.history.push("/dashboard")
  }).catch(()=>this.props.history.push('/'))
}

register(){
  let {username,password}=this.state;
  axios.post('/api/auth/register',{username, password})
  .then(response=>{
    this.props.history.push("/dashboard")
  }).catch(()=>this.props.history.push('/'))
}

  render() {
    return (
      <div className="Auth">
      <div>
        <h3>username</h3>
        <input onChange={(e)=> this.handleUsername(e.target.value)}/>
        </div>
        <div>
          <h3>password</h3>
          <input onChange={(e)=> this.handlePassword(e.target.value)}/>
        </div>
        <div>
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {username,password}=state
return{
   username,
   password
}
}

export default connect(
  mapStateToProps,{updateUsername, updatePassword}

)(Auth)