import React, {useState} from "react"
import Dropdown from "./Dropdown"
import Convert from "./Convert"


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
    <div className="ui form">
    <div className="field">
      <label>Enter text</label>
      <input value={ text} onInput={(event) => setText(event.target.value)}
    />
      </div>
      </div>
    <Dropdown
      options={options}
      selected={language}
      onSelectedChange={setLanguage}
      label="Select a language"
    />
    <hr/>
    <h3 className="ui header">Output</h3>
    <Convert text={text} language={language}/>
  </div>
}
