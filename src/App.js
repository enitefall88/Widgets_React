import React, {useState} from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import Route from "./components/Route"
import Header from "./components/Header"

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

function App() {
  let [selected, setSelected] = useState(options[0])
  return <div>
    <Header/>
    <Route path="/">
      <Accordion items={items}/>
    </Route>
    <Route path="/list">
       <Search/>
    </Route>
    <Route path="/dropdown">
      <Dropdown
          label="Select a color"
          options={options}
          onSelectedChange={setSelected}
          selected={selected}

      />
    </Route>
    <Route path="/translate">
      <Translate/>
    </Route>

  </div>

}

export default App
