import React, { useState } from 'react'

const InputHandling = () => {

  let data = { }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');



    const handleSubmit = (e) =>{
        e.preventDefault();

        data = {
          name,
          email,
          age,
          gender
        }


        console.log(data);
        
        
        
    }
  return (
    <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='p-5 rounded-2xl border-2 flex flex-col gap-2' >
            <label htmlFor="name">Enter your name</label>
            <input type="text" className='rounded p-2 border' onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">Enter your Email</label>
            <input type="text" className='rounded p-2 border' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="age">Enter your Age</label>
            <input type="number" className='rounded p-2 border' onChange={(e) => setAge(e.target.value)} />
            <label htmlFor="Gender">Gender :</label>
            <select id="Gender" onChange={(e) => setGender(e.target.value)} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit" className='px-3 py-2 rounded bg-green-900 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default InputHandling