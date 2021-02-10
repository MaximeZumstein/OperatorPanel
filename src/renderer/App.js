import React from 'react'
import { hot } from 'react-hot-loader/root'

const App = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen">
      <button className="bg-blue-500 text-white px-4 rounded">Test</button>
    </div>
  )
}

export default hot(App)
