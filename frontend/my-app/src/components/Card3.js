import React from "react";
import "./Card3.css"
import photo from "../Assets/Untiteled21.jpeg"
const Card3 = (props) => {
    return (
        <div>
            <div className="container">

                <div className="card-wrapper">

                    <div className="card">

                        <div className="card-image">
                            <img src={photo} alt="profile one"/>
                        </div>

                        <ul className="social-icons">
                            <li>
                                <a href="">
                                    <i className="ion-social-reddit-outline"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="ion-social-twitter-outline"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="ion-social-vimeo-outline"></i>
                                </a>
                            </li>
                        </ul>

                        <div className="details">
                            <h2>{props.name}
                                <br/>
                                    <span className="job-title">{props.position}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3;