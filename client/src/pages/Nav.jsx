import React from 'react';
import logo from "../assets/imgs/UC.png"
import hamburger from "../assets/imgs/hamburger.png"
import {Link} from "react-router-dom"


function Nav() {
    return (
        <div>
            <nav className="navbar bg-white fixed-top" style={{borderBottom: "2px solid #000000"}}>
                <div className="container-fluid">
                    <div>
                        <Link to="/"><a href="#" className="nav-link" style={{paddingLeft: "20px", paddingBottom: "5px", paddingTop: "5px"}}>
                            <img width="40" src={logo} alt="logo" />
                        </a></Link>
                        <Link to="/"><a href="#" className="nav-link">Models</a></Link>
                        <Link to="/"><a href="#" className="nav-link">Discoveries</a></Link>
                        <Link to="/"><a href="#" className="nav-link">Methods</a></Link>
                    </div>
                    <div className="offCanvas"> {/* Off Canvas Nav */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <img className="navbar-toggler-icon" src={hamburger} alt="logo" />
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                             aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Udayagiri Capital</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"/>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item dropdown">
                                        <a style={{paddingLeft: "15px", paddingBottom: "15px", fontSize: "20px"}} className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown"
                                           role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            My Account
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                            <Link to="/sign-in"><li><a className="dropdown-item" href="#">Sign in</a></li></Link>
                                            <Link to="/sign-up"><li><a className="dropdown-item" href="#">Sign up</a></li></Link>
                                        </ul>
                                    </li>
                                    <Link to="/"><li className="nav-item">
                                        <a style={{fontSize: "18px"}} className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li></Link>
                                    <Link to="/plurality">
                                        <li className="nav-item">
                                            <span className="nav-link" href="#">Plurality</span>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div> {/* End of Off Canvas Nav */}
                </div>
            </nav>
        </div>
    )
}

export default Nav;