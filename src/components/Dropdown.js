import React, {useEffect, useState, useRef } from "react"

let Dropdown = ({options, onSelectedChange, selected}) => {
  let [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(()=> {
    document.body.addEventListener('click', (event) => {
     if (ref.current.contains(event.target)) {
       return
     }
      setOpen(false)
    }, {capture: true})
  }, [])

  let renderedListOfOptions = options.map((option) => {
    if(option.value === selected.value) {
      return null
    }
      return <div
          key={option.value}
          className="item"
          onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
  })

  return <div ref={ref} className="ui form">
    <div className="field">
      <label className="label">Select a label</label>
      <div onClick={() => setOpen(!open) }
           className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
        <i className="dropdown icon"></i>
        <div  className="text">{selected.label}</div>
        <div className={`menu ${open ? 'visible transition' : ''}`}>
          {renderedListOfOptions}
        </div>
      </div>
    </div>
  </div>


}

export default Dropdown
