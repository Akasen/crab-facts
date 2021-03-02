import React, { useState } from "react";
import "./css/facts.css";



function Facts(props) {

    const [fact, setFact] = useState("CLICK THE BUTTON FOR A FACT");

    const factsList = [
        "CRABS ARE ALLERGIC TO KINDNESS, WHICH IS WHY THEY WILL ATTACK WHEN SHOWN LOVE",
        "I AM A RANDOM FACT",
        "THE MODEST CRAB KNOWS ONLY ONE DIRECTION, THE CRAB DIRECTION",
        "CRABS ARE ABLE TO LIVE TO BE OVER 9000 YEARS OLD (THERE'S NO WAY THAT CAN BE RIGHT, CAN IT?)",
        "CRUSTACEAN ANGER IS THE STRONGEST ANGER IN EXISTENCE"
    ]

    function changeRandomNumber(){
        return Math.floor(Math.random() * factsList.length);
    }
    
    function getRandomFact() {
        return(factsList[changeRandomNumber()]);
    }

    return (
        <div className="factsContainer">
            <div className="facts">
                {fact}
            </div>
                <input onClick= {() => setFact(getRandomFact)} type="button" className="newFactBtn" value="Get New Fact"/>
        </div>
    )
}



export default Facts;