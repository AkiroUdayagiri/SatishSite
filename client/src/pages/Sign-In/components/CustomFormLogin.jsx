import React, {useState} from "react";
import "../sign-in.css";
import {Link} from "react-router-dom";

function CustomLogin() {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });


    function handleChange(event) {
        const { value, name } = event.target;

        setUserInfo(preValue => {
            if (name === "email") {
                return {
                    email: value,
                    password: preValue.password
                };
            } else if (name === "password") {
                return {
                    email: preValue.email,
                    password: value
                };
            }
        });
    }

    return(
        <form onSubmit={
            function (event) {
                event.preventDefault();
                console.log(userInfo);

            }

        }>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input name="email" onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input name="password" onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <br />
            <br />
            <button type="submit" className="btn btn-light submit">Next</button>
            &nbsp;
            &nbsp;
            <span className="small-text">Don't have an account?
                <Link to="/sign-up" className="small-text"> Sign Up</Link>
            </span>
        </form>
    )
}

export default CustomLogin;