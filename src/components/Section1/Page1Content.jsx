import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='h-[95vh] flex justify-between'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content
