import React from 'react'
import "./style.scss"
const Header:React.FC<{title:any}> = ({title}) => {
  return (
    <h1 className="content_header">
        { title }
    </h1>
  )
}

export default Header