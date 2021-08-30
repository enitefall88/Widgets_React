import React, {useState} from "react"
import Dropdown from "./Dropdown"

let options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
    {
    label: 'Arabic',
    value: 'ar'
  },
    {
    label: 'Hindi',
    value: 'hi'
  },
]

export default function Translate({label}) {
  let [language, setLanguage] = useState(options[0])
  let [text, setText] = useState('')

  return <div>
    <input
     value={text}
     onInput={(event)=>{setText(event.target.value)}}
    />
    <Dropdown
      options={options}
      selected={language}
      onSelectedChange={setLanguage}
      label="Select a language"
    />
  </div>
}
