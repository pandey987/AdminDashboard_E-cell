import Card1 from "./Card1";
import Card3 from "./Card3";
import "./Team.css";
import { useState } from "react";

const Team = (props) => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const square = entry.target.querySelector('.team-div');

            if (entry.isIntersecting) {
                square.classList.add('team-div-animation');
                return;
            }
            square.classList.remove('team-div-animation');
        });
    });
    window.onscroll = function () {
        let div_list = document.querySelectorAll('.team-div-wrapper')
        for (let i = 0; i < div_list.length; i++) {
            observer.observe(div_list[i]);
        }
    }
    return (
        <>
            <div id="container" className="team-div-wrapper">
                <div className="team-div team-div-animation">
                    <div className="team-decription">
                        <h1 style={{ color: "white", fontSize:"2rem"}}>{props.team_name}</h1>
                        <p style={{ color: "white" }}>The sun peeked over the horizon, painting the sky in hues of pink and gold. Birds chirped joyously, welcoming the new day with their melodious songs. In the quaint little town of Willow Creek, life began to stir as people woke up to the promise of another beautiful morning. The aroma of freshly brewed coffee wafted through the air, mingling with the scent of blooming flowers. It was a day ripe with possibilities, a blank canvas waiting to be painted with adventures and memories.</p>
                    </div>
                    <div className="team-members">
                        {props.team_members.map((members, index) => {
                            return <Card1 name={members.Name} position={members.Position} photo={members.Photo} key={index} key_prop={index} ></Card1>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;