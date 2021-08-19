import React from "react"

let Dropdown = ({options}) => {
 let renderedListOfOptions =  options.map((option) => {
     return <div key={option.value} className="item">
            {option.label}
            </div>

 })
  return <h1>
    {renderedListOfOptions}
  </h1>
}

export default Dropdown
