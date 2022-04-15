import React, { useState, useEffect, useCallback } from "react";
import '../App.css';

const Leagues = () => {
    const [data,setData] = useState([]);

    const getLeagues = useCallback(async() => {
        let response = await fetch("https://api-football-standings.azharimm.site/leagues")
        response = await response.json()
        setData(response.data);
    });

    useEffect(() => {
        getLeagues()
    }, [getLeagues]);

    return (
        <div className="leagues-container">
            {data?.map((data) => (
                <div key={data.id} className="league-div">
                    <img src={data.logos.light} alt="#" />
                    <p>{data.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Leagues;