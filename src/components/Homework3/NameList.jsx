
import React from 'react'

const names = ["John", "James", "Robert", "David", "William", "Richard"]

const ShowName = (props) => {
    return(
        <li>{props.value}</li>
    )
}

export default function NameList() {
    const elements = names.map(elem => <ShowName value={elem}/>)
  return (
    <ul>{elements}</ul>
  )
}
