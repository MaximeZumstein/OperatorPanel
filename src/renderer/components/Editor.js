import React from 'react'
import PropTypes from 'prop-types'

export const EditorPanel = function({ editing }) {
  if (!editing) return <></>

  return (
    <div className="z-10 top-0 right-0 absolute bg-gray-700 h-full text-gray-50 rounded-l-2xl shadow-xl w-60 divide-y divide-grey-50 p-2">
      <h2 className="text-xl font-bold text-center mb-2">{editing.name}</h2>
      <Section title="Configuration"></Section>
      <Section title="Pins">
        <button className="bg-gray-800 rounded-md px-5 w-full hover:bg-transparent border-gray-800 border-2 transition-colors">Test</button>
      </Section>
    </div>
  )
}

EditorPanel.propTypes = {
  editing: PropTypes.object
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
  children: PropTypes.element
}
