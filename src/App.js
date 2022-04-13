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
            <p>2 °C</p>
            <div className='humidity'>
              <p>42%</p>
              <div className='wind'>42 MPH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
