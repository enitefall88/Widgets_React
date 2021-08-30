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

export default function Translate() {
  let [language, setLanguage] = useState(options[0])

  return <div>
    <Dropdown
      options={options}
      selected={language}
      onSelectedChange={setLanguage}
    />
  </div>
}
