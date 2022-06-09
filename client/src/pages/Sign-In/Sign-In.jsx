import React from "react";
import "./sign-in.css";
import logo from "../../assets/imgs/UC.png";
import CustomLogin from "./components/CustomFormLogin";
import {Link} from "react-router-dom";
import GoogleLoginButton from "./components/GoogleLoginButton";
import FacebookLoginButton from './components/FacebookLoginButton';


function SignIn(){

    return (
        <div>
            <div className="sign-in">
                <div className="sign-in-area">
                    <h2 className="company-name">
                        <span>
                            <img width="50" src={logo}  alt=""/>
                        </span>
                        &nbsp;
                        Udayagiri Capital
                    </h2>
                    <h1 className="login-text">Login to you account</h1>
                    <center>
                        <GoogleLoginButton />
                        <FacebookLoginButton />
                        <div style={{width: '90%', textAlign: "center"}}>
                            <div className="strike">
                                <span>or</span>
                            </div>
                        </div>
                    </center>
                    <CustomLogin />
                </div>
            </div>
        </div>
    )
}

export default SignIn;