import React from "react"
import Accordion from "./components/Accordion"

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

function App() {
  return <div>
<Accordion items={items}/>
    </div>

}

export default App
