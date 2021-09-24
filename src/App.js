import React, {useState} from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate";

let items = [
  {
    title: 'What is React?',
    content: 'React is front-end framework'
  },
  {
    title: 'Why use React?',
    content: 'Makes life easier'
  },
  {
    title: 'How do you use React?',
    content: 'By creating components'
  }
]

let options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
  {
    label: 'The Color Green',
    value: 'green'
  }
]

let showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items}/>
  }
}

let showList = () => {
  if (window.location.pathname === '/list') {
    return <Search/>
  }
}

let showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown/>
  }
}

let showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate/>
  }
}


function App() {
  return <div>
    {showAccordion()}
    {showList()}
    {showDropdown()}
    {showTranslate()}
  </div>

}

export default App
