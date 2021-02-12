import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { EditorPanel } from '../Editor'

const componentsData = [
  {
    id: 'dl',
    name: 'Dispatch L'
  },
  {
    id: 'g',
    name: 'Gates'
  },
  {
    id: 'r',
    name: 'Restrains'
  },
  {
    id: 'dr',
    name: 'Dispatch R'
  }
]

export const Panel = function() {
  const [selectedComponent, setSelectedComponent] = useState(null)

  const onClicked = function(id) {
    const finded = componentsData.find((c) => c.id === id)
    setSelectedComponent(finded)
  }

  const components = componentsData.map(
    (c) => <Component component={c} selected={selectedComponent && c.id === selectedComponent.id} key={c.id} onClick={onClicked}></Component>
  )

  return (
    <>
      <div className="bg-gray-300 w-2/3 h-32 rounded-xl table">
        {components}
      </div>
      <EditorPanel editing={selectedComponent}></EditorPanel>
    </>
  )
}

const Component = function ({ component, selected, onClick }) {
  const { id } = component
  return (
    <div className={`border-2 bg-black w-10 h-10 ${selected ? 'border-blue-400' : ''}`} onClick={() => onClick(id)}>
    </div>
  )
}

Component.propTypes = {
  component: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}
