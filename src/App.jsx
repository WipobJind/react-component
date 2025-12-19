import { useState } from 'react'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'

import Greetings from './components/Greeting'

import User from './components/User'
function App() {
  return (
    <>
      <div className='card'>
        <div>
          <Greetings />
          <User name="Wipob Jindapornsuk" />
        </div>
      </div>
    </>
  )
}

export default App