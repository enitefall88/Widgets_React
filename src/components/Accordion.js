import React, {useState} from "react"


export default function Accordion({items}) {

  let [activeIndex, setActiveIndex] = useState(null)

  let onTitleClick = (index) => {
    setActiveIndex(index)
  }


  let listOfItems = items.map((item, index) => {
    let active = index== activeIndex ? 'active' : ''

    return <React.Fragment key={item.title}>
      <div
        className={`title ${active}`}
        onClick={() => onTitleClick(index)}
      >
        <i className="dropdown icon"></i>
      {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  })
  return <div className="ui styled accordion">{listOfItems}
    </div>
}
