import React from "react"

export default function Link ({className, href, children}) {
let onclick = (event) => {
 if (event.metaKey || event.ctrlKey) {
  return
 }
  event.preventDefault()
 window.history.pushState({}, '', href)

 let navEvent = new PopStateEvent('popstate')
 window.dispatchEvent(navEvent)
 }

  return <a onClick={onclick} className={className} href={href}>
    {children}
  </a>
}
