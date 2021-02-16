import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Panel } from './components/Panel/Panel'

const App = () => {
  return (
    <div className="z-0 bg-gray-50 w-screen h-screen overflow-hidden relative">
      <div className="flex flex-col">
        <h1 className="text-4xl text-center">OperatorPanel</h1>
        <Panel></Panel>
      </div>
    </div>
  )
}

export default hot(App)
