import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye , faEyeSlash} from '@fortawesome/free-solid-svg-icons'

class Inputs extends Component {
    state ={
        username : "",
        password : "",
        showPassword : false,
    }
    handleUsername =(e)=>{
        this.setState({username : e.target.value})
        this.props.getUsername(e.target.value)
    }
    handlePassword =(e)=>{
        this.setState({password : e.target.value})
        this.props.getPassword(e.target.value)
    }
    handleClick =(e)=>{
        if(!this.props.isReady ){
        e.preventDefault()
        }
    }
  render(){
    return(
        <Fragment>
            <input required type="text" placeholder="User Name :" value={this.state.username} onChange={this.handleUsername}/>
            <div>
            <input required type={this.state.showPassword ? "text" : "password"} placeholder="Password :" value={this.state.password} onChange={this.handlePassword}/>
            <FontAwesomeIcon icon={this.state.showPassword ? faEyeSlash : faEye} onClick={()=>this.setState({showPassword : !this.state.showPassword})}/>
            </div>
            <input type="submit" value="Sign In" onClick={this.handleClick}/>
        </Fragment>
    )
  }
}
export default Inputs