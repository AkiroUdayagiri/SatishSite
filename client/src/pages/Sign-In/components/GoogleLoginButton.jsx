import React from "react";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import {useEffect} from "react";
import {gapi} from "gapi-script";
import {useState} from "react";
import google from "../../../assets/imgs/google-logo.png"
import {clientId, clientSecret} from "../../../google.js";


function GoogleLoginButton() {
    const [login, setLogin] = useState(false);

    function responseGoogle(res) {
        console.log(res.profileObj);
        setLogin(true);
    }

    function responseGoogleFail(res) {
        console.log("Login failed!");
        setLogin(false);
    }

    function logout(){
        setLogin(false);
    }


    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId
            })
        }

        gapi.load("client:auth2", start)
    })

    if(login){
        return(
            <GoogleLogout
                render={renderProps => (
                        <div>
                            <br />
                                <button className="btn google-button btn-light" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <span><img style={{height: '20px'}} src={google}  alt="google"/></span> &nbsp; &nbsp; Logout with Google
                                </button>
                        </div>
                    )}
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            />
        )
    } else {
        return(
            <GoogleLogin
                    render={renderProps => (
                        <div>
                            <br />
                                <button className="btn google-button btn-light" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <span><img style={{height: '20px'}} src={google}  alt="google"/></span> &nbsp; &nbsp; Sign in with Google
                                </button>
                        </div>
                    )}
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogleFail}
                    cookiePolicy={'single_host_origin'}
                />
        )
    }

}

{/* example user object:

 {
    "googleId": "103585928059115814479",
    "imageUrl": "https://lh3.googleusercontent.com/a-/AOh14GgNMW5-GTQrEp9vGD8nLn-55W9WkYxAspGfRi8QiQ=s96-c",
    "email": "akiro.udayagiri@gmail.com",
    "name": "Akiro Udayagiri",
    "givenName": "Akiro",
    "familyName": "Udayagiri"
}

 */}

export default GoogleLoginButton;