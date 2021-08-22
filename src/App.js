import React, {useState} from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"

let items = [
  {
    title: 'What is React?',
    content: 'React is front-end framework'
  },
  { title: 'Why use React?',
    content: 'Makes life easier'
   },
  { title: 'How do you use React?',
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
  <Dropdown selected={selected}
            onSelectedChange={setSelected}
            options={options}/>
  </div>

}

export default App
