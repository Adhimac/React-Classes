import React from 'react'
import Fetchdata from '../Fetchdata/Fetchdata'

const Aboutpage = (props) => {
  return (
    <div>
        <h1>This is {props.name}</h1>
        <Fetchdata />
    </div>
  )
}

export default Aboutpage