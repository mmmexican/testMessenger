import React, {Component} from 'react';
import '../styles/registration.css';

class Registration extends Component{

    state = {
        login :"",
        password : "",
        email: ""
    }

    render(){
        return(
        <div className="registration">
            <div className="reg-title">
            Registration
            </div>
            <div className="table">
            <div className="row reg-row">
                    <div className="cell reg-cell">
                        Login
                    </div>
                    <div className="cell reg-cell">
                    <input type="text" value={this.state.login} onChange={this.loginChange}></input>
                    </div>
                </div>

                <div className="row reg-row">
                    <div className="cell reg-cell">
                        Password
                    </div>
                    <div className="cell reg-cell">
                        <input type="password" value={this.state.password} onChange={this.passwordChange}></input>
                    </div>
                </div>

                <div className="row reg-row">
                    <div className="cell reg-cell">
                        Email
                    </div>
                    <div className="cell reg-cell">
                        <input type="email" value={this.state.email} onChange={this.emailChange}></input>
                    </div>
                </div>
            </div>
            <div className="reg-send">
                <button className="reg-send-button" onClick={this.sendRegistrationReq}>Send</button>
            </div>
        </div>
        );
    }

    sendRegistrationReq = ()=>{
        alert("login: " + this.state.login + " password: " + this.state.password + " email: " + this.state.email + ""  );
    }

    loginChange = (event)=> {
        this.setState({login: event.target.value});
    }
    passwordChange = (event)=> {
        this.setState({password: event.target.value});
    }
    emailChange = (event)=> {
        this.setState({email: event.target.value});
    }
}

export default Registration;