import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Panel } from './components/Panel/Panel'

const App = () => {
  return (
    <div className="z-0 bg-gray-50 w-screen h-screen overflow-hidden relative">
      <div className="container flex justify-center">
        <div className="">
          <p>Hello World</p>
        </div>
        <Panel></Panel>
      </div>
    </div>
  )
}

export default hot(App)
