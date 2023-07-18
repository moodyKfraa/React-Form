import React, { Children, Component } from "react";
import Inputs from "./Form Components/FormInputs"
import styles from "./style.module.css"
import PasswordReq from "./Form Components/passwordReq"

 class Form extends Component{
    state = { 
        username :"",
        password :"",
        isReady : false,
      }

    getUsername =(input)=>{
        this.setState({username : input});
      }
      getPassword =(input)=>{
        this.setState({password : input});
      }
      isReady = (input)=>{
        if(this.state.isReady !== input){
          this.setState({isReady : input});
      }}

    render(){

        return(
            <form >
                <h1>Sign In</h1>
            <div className={styles.inputs}>
            <Inputs getUsername={this.getUsername}  getPassword={this.getPassword} isReady = {this.state.isReady}/>
            </div>
          <hr/>
          <div className={styles.passwordReq}>
          <PasswordReq password ={this.state.password} isReady={this.isReady}/>
          </div>
            </form>
        )
    }
}

Form.Inputs = Inputs
Form.PasswordReq = PasswordReq
export default Form
