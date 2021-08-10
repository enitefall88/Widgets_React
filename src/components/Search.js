import React, {useState, useEffect} from "react"
import axios from 'axios'

let Search = () => {
let [searchTerm, setSearchTerm] = useState('')

  let onSearch = (input) => {
  setSearchTerm(input)
  }
useEffect(() => {
  let search = async () => {
    await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        origin: '*',
        srsearch: searchTerm
      }
    })
  }

}, [searchTerm] )

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
