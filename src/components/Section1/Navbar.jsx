import React from 'react'

const Navbar = (props) => {
  return (
    <div className='flex justify-between items-center'>
       <h4 className='uppercase text-white bg-black px-2 py-1 rounded-full tracking-wider text-sm'>
        {props.h1}</h4>
       <button className='uppercase bg-gray-200 px-2 py-1 rounded-full tracking-wider text-sm'>
        {props.h2}</button>
    </div>
  )
}

export default Navbar
