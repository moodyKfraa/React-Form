import React , {Component, Fragment} from "react";
class PasswordReq extends Component {
    state={
        length: false,
        upperCase: false,
        number: false,
    }
    componentDidUpdate(){
    const password = this.props.password ;
    
    // check password length
    if(password.length >= 8 && this.state.length === false){
        this.setState({length: true}) ;
    }
    if(password.length < 8 && this.state.length === true){
        this.setState({length: false})
    }
    
    // check uppercase  
    if(/[A-Z]/g.test(password) && this.state.upperCase === false){
        this.setState({upperCase: true}) ;
    }
     if(!/[A-Z]/g.test(password) && this.state.upperCase === true){
        this.setState({upperCase: false}) ;
    }

    // check number
    if(/[0-9]/g.test(password) && this.state.number === false){
        this.setState({number: true}) ;
    }
     if(!/[0-9]/g.test(password) && this.state.number === true){
        this.setState({number: false}) ;
    }

    if(this.state.length === true && this.state.upperCase === true && this.state.number === true){
        this.props.isReady(true)
    }else{
        this.props.isReady(false)
    }

}

    render(){
        return(
            <Fragment>
                <ul>
                    <li style={{color :this.state.length ? "green" :"#333"}}>At least 8 characters</li>
                    <li style={{color :this.state.upperCase ? "green" :"#333"}}>At least one upper case character</li>
                    <li style={{color :this.state.number ? "green" :"#333"}}>At least one number</li>
                </ul>
            </Fragment>
        )
    }
}
export default PasswordReq