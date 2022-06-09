import React from "react";
import cards from "../../../assets/imgs/cards.png"
import {Link} from "react-router-dom"


function ViewText() {
    return(
        <div>
            <div className="card-text-collection">
                <Link to="/"><h4 className="card-text first-card-text">Market Timing</h4></Link>
                <br/>
                <Link to="/"><h4 className="card-text">Plurality</h4></Link>
                <br/>
                <Link to="/"><h4 className="card-text">Market Selection</h4></Link>
            </div>
            <img className="cards" src={cards}  alt="" />
            <div className="company-details">
                <center><h1 className="company-name" style={{width: "fit-content", marginRight: "5%"}}>Udayagiri Capital</h1></center>
                <br />
                <h4 className="lead-in">Cut to the profits with UC</h4>
                <br />
                <div className="buttons">
                    <Link to="/sign-in">
                        <button type="button" className="btn btn-light">
                            <i className="fa-solid fa-arrow-right-to-bracket"/> Sign In
                        </button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to="/">
                        <button type="button" className="btn btn-outline-dark">
                            <i className="fa-solid fa-user-plus"/> Sign Up
                        </button>
                    </Link>
                </div>

                <br />
                <br />
                <p className="description"> principles rooted in technology and data science
                    as much as those found in financial services.
                    Fields like machine learning and distributed computing guide us</p>
            </div>
        </div>
    )
}

export default ViewText;