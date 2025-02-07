import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from './components/Photo';
import "./App.css";

function App() {
  const [nasaData,setNasaData] = useState(null);

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response =>{
      setNasaData(response.data);
    })
    .catch(error => console.log(error));
  },[])

  return (
    <div className="App">
      {nasaData && <Photo photo ={nasaData} />}
    </div>
  );
}

export default App;
