import React, { useState } from 'react'
import './index.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = ` https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c7266e829fc18c4132108240ce7073e8
`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className='app'>
      <div className='search'>
        <input
          type='text'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Search...'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temperature'>
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className='details'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name != undefined && (
          <div className='bottom'>
            <div className='feels-like'>
              {data.main ? (
                <p className='bold'>{data.main.feels_like}°C</p>
              ) : null}

              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}

              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.main ? (
                <p className='bold'>{data.wind.speed} km/h</p>
              ) : null}

              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
