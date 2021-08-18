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

    if (searchTerm && !results.length) {
      search()
    } else
      {
        let timeoutId = setTimeout(() => {
          if (searchTerm) {
            search()
          }
        }, 500)
        return () => {
          clearTimeout(timeoutId)
        }
      }
    }, [searchTerm, results.length])

  let renderedList = results.map((result, i) => {
    return <div className="item" i={result.pageid}>
      <div className="right floated content">
        <a className="ui button"
           href={`https://en.wikipedia.org?curid=${result.pageid}`}
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">
          {result.title}
        </div>
        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
      </div>
    </div>
  })

  return <div>
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input value={searchTerm} onInput={(e) => onSearch(e.target.value)} className="input"/>
      </div>
    </div>
    <div className="ui celled list">
      {renderedList}
    </div>
  </div>
}

export default Search
