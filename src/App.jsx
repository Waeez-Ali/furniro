import { useState } from 'react'
import furniroLogo from './assets/furniro.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <img src={furniroLogo} alt="logo" className="w-18px h-18px" />
      <h1 className="text-5xl font-bold text-gray-800">
        Furniro
      </h1>
    </div>
  )
}

export default App
