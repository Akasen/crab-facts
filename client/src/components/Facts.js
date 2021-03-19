import React, { useState } from "react";
import "./css/facts.css";



function Facts(props) {

    const [fact, setFact] = useState("CLICK THE BUTTON FOR A FACT");

    /*
    // Leftover code
    const factsList = [
        "CRABS ARE ALLERGIC TO KINDNESS, WHICH IS WHY THEY WILL ATTACK WHEN SHOWN LOVE",
        "I AM A RANDOM FACT",
        "THE MODEST CRAB KNOWS ONLY ONE DIRECTION, THE CRAB DIRECTION",
        "CRABS ARE ABLE TO LIVE TO BE OVER 9000 YEARS OLD (THERE'S NO WAY THAT CAN BE RIGHT, CAN IT?)",
        "CRUSTACEAN ANGER IS THE STRONGEST ANGER IN EXISTENCE"
    ]

    function changeRandomNumber() {
        return Math.floor(Math.random() * factsList.length);
    }

    function getRandomFact() {
        return (factsList[changeRandomNumber()]);
    }
    */

    function fetchFact() {
        fetch('/facts/randomfact')
            .then(resp => resp.json())
            .then(data => {
                // Check if the Fact received is the same as the fact currently displayed 
                if (data.message === fact) { fetchFact() }
                setFact(data.message)
            })
    }

    //const randomFACT = fetchFact();

    return (
        <div className="factsContainer">
            <div className="facts">
                {fact}
            </div>
            <input onClick={() => { fetchFact() }} type="button" className="newFactBtn" value="Get New Fact" />
        </div>
    )
}



export default Facts;