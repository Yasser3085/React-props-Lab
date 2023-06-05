import React from 'react'

export default function Companies(props) {
  return (
    <div className='companies-div'>
      <h1> Name : <h3>{props.name}</h3></h1>
      <h1> Employees<h3>{props.employee} </h3></h1>
      <h1> Est : <h3>{props.est} </h3></h1>

    </div>
  )
}
