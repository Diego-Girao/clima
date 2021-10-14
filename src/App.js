import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, []);

  if (location === false) {
    return (
      <Fragment>
        <h1>Você precisa habilitar a localização no browser 🧭🌍</h1>
      </Fragment>
    )

  } else if (weather === false) {
    return (
      <Fragment>
        Carregando o clima...🌄
      </Fragment>
    )

  } else {
    return (
      <Fragment>
        <h3>Clima atual em {weather['name']},{weather['sys']['country']}({weather['weather'][0]['description']})</h3>
        <hr />
        <ul>
          <li><strong>Temperatura atual: {weather['main']['temp']}°C</strong></li> 
          <li>Temperatura máxima:{weather['main']['temp_max']}°C</li>
          <li>Temperatura minima:{weather['main']['temp_min']}°C</li>
          <button onClick={() => alert('Clima e Playlist gravadas com sucesso !')}>Salvar</button>
        </ul>
      </Fragment>
    );
  }
}
    //buscando playlist na API Shazam
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/charts/list/',
      headers: {
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_OPEN_SHAZAM_KEY,
      }
    };  
    axios.request(options).then(function (response) {  
      console.log(response.data.global.genres.filter(playlist => playlist.name === 'Pop'));
      console.log(response.data.global.genres.filter(playlist => playlist.name === 'R&B/Soul'));
      console.log(response.data.global.genres.filter(playlist => playlist.name === 'Rock'));
      console.log(response.data.global.genres.filter(playlist => playlist.name === 'Singer/Songwriter'));
    }).catch(function (error) {
    console.error(error);
  });
    // const temperature = weather['main']['temp'];
    
    // if (temperature < 16) {
    //   console.log(response.data.global.genres.filter(playlist => playlist.name === 'R&B/Soul'));
      
    //   } else if(temperature > 32) {
    //     console.log(response.data.global.genres.filter(playlist => playlist.name === 'Rock'));
  
    //   } else if(temperature < 32 && temperature > 24) {
    //     console.log(response.data.global.genres.filter(playlist => playlist.name === 'Pop'));
    
    //   } else if(temperature < 24 && temperature > 16){ 
    //     console.log(response.data.global.genres.filter(playlist => playlist.name === 'Singer/Songwriter'));
    //   }

    export default App;