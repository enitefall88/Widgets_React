import React, {useState} from "react"

let Search = () => {
let [searchTerm, setSearchTerm] = useState('')

  let onSearch = (input) => {
  setSearchTerm(input)
  }

  return <div>
 <div className="ui form">
   <div className="field">
     <label>Enter Search Term</label>
     <input value={searchTerm} onInput={(e) => onSearch(e.target.value)} className="input"/>
      </div>
 </div>
 </div>
}

export default Search
