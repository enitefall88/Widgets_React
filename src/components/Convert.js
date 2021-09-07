import React, {useEffect, useState} from "react"
import axios from 'axios'

export default function Convert({language, text}) {
  let [translated, setTranslated] = useState('')

  useEffect(() => {
    let doTranslation = async() => {
      let {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      })
      setTranslated(data.data.translations[0].translatedText)
    }
    doTranslation()
  }, [language, text])

  return <div>
    {translated}

  </div>
}
