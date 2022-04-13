import React, { useState } from 'react'
import './index.css'
import axios from 'axios'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Birmingham</p>
          </div>
          <div className='temperature'>
            <h1>4 °C</h1>
          </div>
          <div className='details'>
            <p>Cloudy</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels_like'>
            <p className='bold'>2 °C</p>
            <p>Feels like</p>
            <div className='humidity'>
              <p className='bold'>42%</p>
              <p>Humidity</p>
              <div className='wind'>
                <p className='bold'>42 MPH</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
