import React, { useState } from 'react'

const InputHandling = () => {

    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("name:",name);
    }
  return (
    <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='p-5 rounded-2xl border-2 flex flex-col gap-2' >
            <label htmlFor="name">Enter your name</label>
            <input type="text" className='rounded p-2 border' onChange={(e) => setName(e.target.value)} />
            <button type="submit" className='px-3 py-2 rounded bg-green-900 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default InputHandling