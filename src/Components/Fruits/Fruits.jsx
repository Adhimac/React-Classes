import React from 'react'

const Fruits = () => {

    const fruits =["apple","pineapple","grapes","orange","cherry"]
  return (
    <div>
       <ul className='flex justify-center items-center gap-5 bg-amber-300 font-bold p-5'>
         {fruits.map((item,index)=> item.includes("a") ? <li key={index}>{item}</li>: null ) }
       </ul>
    </div>
  )
}

export default Fruits