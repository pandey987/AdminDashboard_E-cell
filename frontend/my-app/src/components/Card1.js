import React from "react";
import "./Card1.css"
import photo from "../Assets/Untiteled.jpg"
const Card1 = (props) => {
    console.log(props.key_prop)
    return (
        
        <div className={"card1-container"} id={"key-"+props.key_prop}>
            <figure className="snip1344"><img src={props.photo} alt="profile-sample1" className="background" /><img src={props.photo} alt="profile-sample1" className="profile" />
                <figcaption>
                    <h3 style={{fontSize:'large'}}>{props.name}<span>{props.position}</span></h3>
                    <div className="icons"><a href="#"><i className="ion-social-linkedin-outline"></i></a><a href="#"> <i className="ion-social-twitter-outline"></i></a><a href="#"> <i className="ion-social-instagram-outline"></i></a></div>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card1;