import {useState, useEffect} from "react";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';

const Standings = () => {

    const [data,setData] = useState([]);
    const defaultLeague = 'ita.1';
    const defaultYear = '2021';
    const [selectedLeague,setSelectedLeague] = useState(defaultLeague);
    const [selectedYear,setSelectedYear] = useState(defaultYear);
    const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

    useEffect(() => {
      const abortController = new AbortController();
      const getLeagues = async() => {
        try{
          let response = await fetch(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`, {signal: abortController.signal})
          response = await response.json()
          setData(response.data.standings)
        }
        catch(error) {
          if (abortController.signal.aborted) {
            // cancelled
          }
          else
            throw error;
        };
      };
      getLeagues()
      return function () {
        abortController.abort()
      };
    }, [selectedLeague, selectedYear]);

  return (
    <Paper elevation={3}
      sx={{
        width: 600,
      }}
    >
        <div className="standings-container">
        
            <div className="select-container">
            <FormControl>
              <InputLabel id="select-label-league">League</InputLabel>
                <Select
                    labelId="select-label-league"
                    name="select-league"
                    id="select-league"
                    defaultValue={defaultLeague}
                    onChange={(e) => setSelectedLeague(e.target.value)}
                >
                    <MenuItem value="arg.1">Argentine Liga Profesional de Fútbol</MenuItem>
                    <MenuItem value="aus.1">Australian A-League</MenuItem>
                    <MenuItem value="chn.1">Chinese Super League</MenuItem>
                    <MenuItem value="ned.1">Dutch Eredivisie</MenuItem>
                    <MenuItem value="eng.1">English Premier League</MenuItem>
                    <MenuItem value="fra.1">French Ligue 1</MenuItem>
                    <MenuItem value="ger.1">German Bundesliga</MenuItem>
                    <MenuItem value="idn.1">Indonesian Liga 1</MenuItem>
                    <MenuItem value="ita.1">Italian Serie A</MenuItem>
                    <MenuItem value="jpn.1">Japanese J League</MenuItem>
                    <MenuItem value="mys.1">Malaysian Super League</MenuItem>
                    <MenuItem value="mex.1">Mexican Liga BBVA</MenuItem>
                    <MenuItem value="por.1">Portugese Liga</MenuItem>
                    <MenuItem value="rus.1">Russian Premier League</MenuItem>
                    <MenuItem value="sgp.1">Singaporean Premier League</MenuItem>
                    <MenuItem value="esp.1">Spanish Primera División</MenuItem>
                    <MenuItem value="tha.1">Thai Premier League</MenuItem>
                    <MenuItem value="tur.1">Turkish Super Lig</MenuItem>
                    <MenuItem value="uga.1">Ugandan Super League</MenuItem>
                </Select>
              </FormControl>
            <FormControl>
              <InputLabel id="select-label-year">Year</InputLabel>
                <Select
                    labelId="select-label-year"
                    name="select-year"
                    id="select-year"
                    onChange={(e) => setSelectedYear(e.target.value)}
                    defaultValue={defaultYear}
                >
                  {years.map((year, index) =>(<MenuItem key={index} value={year}>{year}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
            <div className="ranking-div">

          {data?.map((data, index) => (
            <div key={index} className="ranking-div-inner">
              <h1>
                <span>
                  {`${index + 1}.`}
                  <img
                    src={data.team.logos[0]?.href}
                    alt="#"
                    className="logo-small"
                    style={{ width: "30px" }}
                  />
                </span>{" "}
                {data.team.shortDisplayName}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default Standings;