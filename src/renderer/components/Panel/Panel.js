import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { EditorPanel } from '../Editor'

const componentsData = [
  {
    id: 'dl',
    name: 'Dispatch L',
    configuration: {
      design: {
        constructor: 'Schneider',
        theme: 'XB5',
        reference: 'ZB5AW3'
      },
      pins: {
        in: 8,
        led: 13
      }
    }
  },
  {
    id: 'g',
    name: 'Gates',
    configuration: {
      design: {
        constructor: 'Schneider',
        theme: 'XB5',
        reference: 'ZB5AD'
      },
      pins: {
        'in 1': 2,
        'in 2': 3
      }
    }
  },
  {
    id: 'r',
    name: 'Restrains',
    configuration: {
      design: {
        constructor: 'Schneider',
        theme: 'XB5',
        reference: 'ZB5AD'
      },
      pins: {
        'in 1': 4,
        'in 2': 5
      }
    }
  },
  {
    id: 'dr',
    name: 'Dispatch R',
    configuration: {
      design: {
        constructor: 'Schneider',
        theme: 'XB5',
        reference: 'ZB5AW3'
      },
      pins: {
        in: 8,
        led: 13
      }
    }
  }
]

export const Panel = function() {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const panelBgRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    function handleClick(event) {
      if (!panelRef || !panelBgRef) return
      if (event.target === panelBgRef.current || !panelRef.current.contains(event.target)) {
        setSelectedComponent(null)
      }
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [panelRef])

  const onClicked = function(id) {
    const finded = componentsData.find((c) => c.id === id)
    setSelectedComponent(finded)
  }

  const components = componentsData.map(
    (c) => <Component component={c} selected={selectedComponent && c.id === selectedComponent.id} key={c.id} onClick={onClicked}></Component>
  )

  return (
    <div ref={panelRef} className="w-full h-full">
      <div ref={panelBgRef} className="bg-gray-300 w-2/3 h-full rounded-xl grid grid-flow-col justify-around mx-auto my-5 p-2">
        {components}
      </div>
      <EditorPanel editing={selectedComponent}></EditorPanel>
    </div>
  )
}

const Component = function ({ component, selected, onClick }) {
  const { id, configuration } = component
  const { design } = configuration

  const src = require(`../../assets/components/${design.theme}/${design.reference}.png`).default

  return (
    <img
      src={src}
      className={`${selected ? 'ring border-blue-400 border-' : ''}`}
      onClick={() => onClick(id)}
    >
    </img>
  )
}

Component.propTypes = {
  component: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}
