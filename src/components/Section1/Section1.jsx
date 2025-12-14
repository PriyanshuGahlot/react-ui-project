import React from 'react'
import Navbar from './Navbar'
import Card from "./Card"
import Page1Content from './Page1Content'

function Section1() {
  return (
    <div className='h-screen w-full'>
      <Navbar h1="Target Audience" h2 = "Digital Banking Platform"/>
      <Page1Content/>
    </div>
  )
}

export default Section1
