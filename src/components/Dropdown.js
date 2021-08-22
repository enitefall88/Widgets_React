import React from "react"

let Dropdown = ({options, onSelectedChange, selected}) => {
  let renderedListOfOptions = options.map((option) => {
    return <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
    >
      {option.label}
    </div>

  })
  return <div className="ui form">
    <div className="field">
      <label className="label">Select a label</label>
      <div className="ui selection dropdown visible active">
        <i className="dropdown icon"></i>
        <div  className="text">{selected.label}</div>
        <div className="menu visible transition">
          {renderedListOfOptions}
        </div>
      </div>
    </div>
  </div>


}

export default Dropdown
