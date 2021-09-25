import React, {useEffect, useState} from 'react'

export default function Route ({path, children}) {
 let [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    let onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  return currentPath === path
      ? children
      : null
}
