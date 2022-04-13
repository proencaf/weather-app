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
          <div className='feels-like'>
            <p>2 °C</p>
          </div>
          <div className='humidity'>
            <p>42%</p>
          </div>
          <div className='wind'>
            <p>21 MPH</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
