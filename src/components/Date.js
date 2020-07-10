import React from 'react'

const Date = ({ weather }) => {

  let date = String(new window.Date())
  date = date.slice(3, 15)
  return (
    <div className='row justify-content-md-center'>
      {weather.main && (
        <div style={{ color: 'white' }} >
          <div>
            <h4>{weather.name}, {weather.sys.country}</h4>
          </div>

        </div>
      )}
      <div style={{ color: 'white' }} className='ml-2'>
        <h4>{date}</h4>
      </div>
    </div>
  )
}

export default Date
