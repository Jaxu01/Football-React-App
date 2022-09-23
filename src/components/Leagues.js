import React, { useState, useEffect, useCallback } from "react";
import '../App.css';

const Leagues = () => {
    const [leagues,setLeagues] = useState([]);

    const getLeagues = useCallback(async() => {
        let response = await fetch("https://api-football-standings.azharimm.site/leagues")
        response = await response.json()
        setLeagues(response.data);
    });

    useEffect(() => {
        getLeagues()
    }, [getLeagues]);

    return (
        <div className="leagues-container">
            {leagues?.map((league) => (
                <div key={league.id} className="league-div">
                    <img src={league.logos.light} alt="#" />
                    <p>{league.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Leagues;