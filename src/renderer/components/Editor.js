import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { HiPencil, HiCheck } from 'react-icons/hi'
import { onCreateFocus } from '../utils/FormUtils'

export const EditorPanel = function({ editing }) {
  if (!editing) {
    return (
      <div className="z-10 top-0 right-0 absolute bg-gray-700 h-full text-gray-50 rounded-l-2xl shadow-xl w-60 divide-y divide-grey-50 p-2 transition-transform transform translate-x-60"/>
    )
  }
  return (
    <div className="z-10 top-0 right-0 absolute bg-gray-700 h-full text-gray-50 rounded-l-2xl shadow shadow-xl w-60 divide-y divide-grey-50 p-2 transition-transform transform translate-x-0 ">
      <Title title={editing.name}/>
      <Section title="Configuration"></Section>
      <PinsSection config={editing.configuration.pins} />
    </div>
  )
}

EditorPanel.propTypes = {
  editing: PropTypes.object
}

const Title = function({ title: _title }) {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(_title)

  useEffect(() => {
    setTitle(_title)
    setEditing(false)
  }, [_title])

  const startEdit = function() {
    setEditing(true)
  }

  const editDone = function() {
    setEditing(false)
  }

  const onTitleChange = function(event) {
    setTitle(event.target.value)
  }

  const onInputKeyDown = function(event) {
    switch (event.key) {
      case 'Enter':
        editDone()
        break
      case 'Escape':
        setTitle(_title)
        setEditing(false)
        break
    }
  }

  if (editing) {
    return (
      <div className="flex justify-center">
        <input className="bg-gray-700 mb-1" value={title} onChange={onTitleChange} onKeyDown={onInputKeyDown} ref={onCreateFocus}></input>
        <button className="bg-gray-800 rounded-md w-8 h-8" onClick={editDone}><HiCheck className="m-auto"/></button>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
      <button className="bg-gray-800 rounded-md w-8 h-8 ml-2" onClick={startEdit}><HiPencil className="m-auto"/></button>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string
}

const PinsSection = function({ config }) {
  const _config = config || {}
  const inputs = Object.entries(_config).map(function([key, value]) {
    return (
      <div key={key} className="grid grid-cols-2">
        <label className="capitalize">{key} :</label>
        <input type="text" value={value} className="bg-gray-700 border-b mb-1 border-gray-50"/>
      </div>
    )
  })

  return (
    <Section title="Pins">
      {inputs}
      <button className="bg-gray-800 rounded-md px-5 w-full hover:bg-transparent border-gray-800 border-2 transition-colors my-1">Test</button>
    </Section>
  )
}

PinsSection.propTypes = {
  config: PropTypes.object
}

const Section = function({ title, children }) {
  return (
    <div className="mb-2 px-2">
      <h3 className="text font-semibold">{title}</h3>
      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array
}
