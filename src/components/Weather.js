import React from 'react'

const Weather = ({ weather }) => {
  return (
    <div style={{ color: 'white' }} >
      {weather.main && (
        <div className='row justify-content-md-center'>
          <div>
            <h4 >{Math.round(weather.main.temp)} C</h4>
          </div>
          <div className='ml-4'>
            <h4>{weather.weather[0].main}</h4>
          </div>
        </div>
      )}
    </div>

  )
}

export default Weather
