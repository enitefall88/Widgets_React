import React from "react"



export default function Accordion ({items}) {
  let  listOfItems = items.map(item => {
    return <li>{item.title}</li>
  })
  return <ul>{listOfItems} </ul>
}
