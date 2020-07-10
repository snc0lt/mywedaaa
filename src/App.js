import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Search from './components/Serach'
import Date from './components/Date'
import Weather from './components/Weather'
import { key, base } from "./api";



const App = () => {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (e) => {
    if(e.key === 'Enter') {
      fetch(`${base}weather?q=${query}&units=metric&APPID=${key}`)
        .then( res => res.json())
        .then( result => {
          setWeather(result)
          setQuery('')
          console.log(result)
        })
    }
  }
  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 18) ?'warm' : 'cold' ) : 'cold'}>
      <Nav/>
      <div className="container">
      <Search query={query} setQuery={setQuery} search={search}/>
      <Date weather={weather}/>
      <Weather weather={weather}/>
      </div>
    </div>
  )
}

export default App
