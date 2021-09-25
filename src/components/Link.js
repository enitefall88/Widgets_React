import React from "react"

export default function Link ({className, href, children}) {
 onclick = () => {

 }

  return <a onClick={onclick} className={className} href={href}>
    {children}
  </a>
}
