import React, {useState, useEffect, useCallback} from "react";
const Standings = () => {

    const [data,setData] = useState([]);
    const [selectedLeague,setSelectedLeague] = useState('ita.1');
    const [selectedYear,setSelectedYear] = useState('2021');
    const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

    
    const getLeagues = useCallback(async() => {
      let response = await fetch(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`)
      response = await response.json()
      console.log(response)
      setData(response.data.standings);
    });

    useEffect(() => {
      getLeagues()
    }, [getLeagues]);

    return (
        <div className="standings-container">
            <div className="select-container">
                <select
                    name="select-league"
                    id="select-league"
                    defaultValue={selectedLeague}
                    onChange={(e) => setSelectedLeague(e.target.value)}
                >
                    <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
                    <option value="aus.1">Australian A-League</option>
                    <option value="chn.1">Chinese Super League</option>
                    <option value="ned.1">Dutch Eredivisie</option>
                    <option value="eng.1">English Premier League</option>
                    <option value="fra.1">French Ligue 1</option>
                    <option value="ger.1">German Bundesliga</option>
                    <option value="idn.1">Indonesian Liga 1</option>
                    <option value="ita.1">Italian Serie A</option>
                    <option value="jpn.1">Japanese J League</option>
                    <option value="mys.1">Malaysian Super League</option>
                    <option value="mex.1">Mexican Liga BBVA</option>
                    <option value="por.1">Portugese Liga</option>
                    <option value="rus.1">Russian Premier League</option>
                    <option value="sgp.1">Singaporean Premier League</option>
                    <option value="esp.1">Spanish Primera División</option>
                    <option value="tha.1">Thai Premier League</option>
                    <option value="tur.1">Turkish Super Lig</option>
                    <option value="uga.1">Ugandan Super League</option>
                </select>
                <select
                    name="select-year"
                    id="select-year"
                    onChange={(e) => setSelectedYear(e.target.value)}
                    defaultValue={selectedYear}
                >
                  {years.map((year, index) =>(<option key={index} value={year}>{year}</option>))}
                </select>
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
          ))};
      </div>
    </div>
  );
};

export default Standings;