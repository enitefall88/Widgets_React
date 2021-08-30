import React, {useEffect, useState, useRef } from "react"

let Dropdown = ({options, onSelectedChange, selected, label}) => {
  let [open, setOpen] = useState(false)
  const ref = useRef()

    useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

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
      <label className="label">{label}</label>
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
