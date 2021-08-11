import React, {useState, useEffect} from "react"
import axios from 'axios'

let Search = () => {
let [searchTerm, setSearchTerm] = useState('haskell')
let [results, setResults] = useState([])

  console.log(results)

  let onSearch = (input) => {
  setSearchTerm(input)
  }
useEffect(() => {
  let search = async () => {

    let {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        origin: '*',
        srsearch: searchTerm
      }
    })
  setResults(data.query.search)
  }
  search()
}, [searchTerm] )

  let renderedList = results.map(el => {
    return <div>{el.title}</div>
  })

  return <div>
 <div className="ui form">
   <div className="field">
     <label>Enter Search Term</label>
     <input value={searchTerm} onInput={(e) => onSearch(e.target.value)} className="input"/>
      </div>
 </div>
    <div>
      {renderedList}
    </div>
 </div>
}

export default Search
