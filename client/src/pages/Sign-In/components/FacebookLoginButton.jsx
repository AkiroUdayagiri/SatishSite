import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import appId from "../../../facebook";

function FacebookLoginComponent() {
  const [login, setLogin] = useState(false);

  const responseFacebook = (response) => {
    console.log(response);
    // Login failed
    if (response.status === "unknown") {
      console.log("Login failed!");
      setLogin(false);
      return false;
    }
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const logout = () => {
    setLogin(false);
  };

  return (
    <div className="container">
      {!login && (
        <FacebookLogin
          appId={appId}
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
          render={renderProps => (
                      <div>
                        <br />
                        <button className="btn facebook-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <span><i style={{height: '20px'}} className="fa-brands fa-facebook-f" /></span> &nbsp; Sign in with Facebook
                        </button>
                        <br />
                        <br />
                      </div>
                    )}
        />
      )}

      {login && (
        <div>
          <br />
          <button className="btn facebook-button" onClick={logout}>
              <span><i style={{height: '20px'}} className="fa-brands fa-facebook-f"/></span> &nbsp; Logout with Facebook
          </button>
          <br />
          <br />
        </div>
      )}
    </div>
  );
}

{/* example user object:

 {
    "name": "Akiro Udayagiri",
    "email": "akiro.udayagiri@gmail.com",
    "picture": {
        "data": {
            "height": 50,
            "is_silhouette": true,
            "url": "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=hR-8cMEpwvIAX-g3Hua&_nc_ht=scontent-sjc3-1.xx&edm=AP4hL3IEAAAA&oh=00_AT9vA5ySyZLHyXs7cXIiFzuQlzXBhHDOQHwEjsWSG82xVA&oe=62B89499",
            "width": 50
        }
    },
    "id": "108598915203058",
    "accessToken": "EAAHyoJYZAuBEBAASqO1gnjDf4zpGGS0fZBkkYQomvsZBZCHjZAj8beddUKZBSEQsuA1uFx8U75WUIIewFzY3vTHR8YkjhHvgBrtuXl86tFoOpKgY5H0HxmK9RZAFjayblsr0xo21vzOx3aIXRehzlTeRfFS0XVFbZCNcIcTLQYRKpZCR9MQRGuU16g2bqluewZAIgYwKmgkZCHxmKQx45YEFpZAtpEBXrSmx7vkZD",
    "userID": "108598915203058",
    "expiresIn": 5517,
    "signedRequest": "PhV-27d7nP3ofdRqNfGN2Zb1ieyYVz1pqcO4cTezb8I.eyJ1c2VyX2lkIjoiMTA4NTk4OTE1MjAzMDU4IiwiY29kZSI6IkFRQkk2R2s2bGRZdTRNVGdiLU4zVDd1eEI5VEVST011Vk5yQ2xxLUhwUE9iRlhKMWhaS1B0Tmlma19oWkY4emdlM0hTRFpUSFNLNGx1cXF5ckx5UmpQcC1NUmJiOGl4LWxCQUVTTldVRzJFWE9UZGNwcmxHV1RUV0J1VmhBWlJCWFVrTUcyeU5uSlJ4cWZVUVJRcGFJZTk0azN0OXA4azlwUjlPSm5lWm5abGgyOXIxS1p1RFRUNTNxb0lUd3ctLU1xMy03ak5Zc1ZXZXE0b0d4akZnNnhHLWdKU2RaNHNKel82ODRVVUxYT1phcWI1NVZwSHpSUk4tbG9HOXJOcGpxQTVxZFI2YlZMems1SE5oRmMtMzR3dG1pMDJYVWlYRUhDLW9PYUlYY0JQOUJBV0prUl9BcFd2OUNiOUVnR2Z2V2RFNEJqOGFpZjkzWWF6aE5abmxpNFd0IiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE2NTM4NzA0ODN9",
    "graphDomain": "facebook",
    "data_access_expiration_time": 1661646483
}

 */}

export default FacebookLoginComponent;