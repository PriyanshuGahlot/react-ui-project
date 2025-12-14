import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='relative w-80 h-[85%] rounded-3xl overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.imgUrl} alt="" />
        <div className='absolute top-0 left-0  h-full w-full p-8 flex flex-col justify-between'>
          <div className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.index}</div>
          <div className='h-[40%] flex justify-between flex-col'>
            <div className='text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam? Iste aspernatur atque debitis mollitia voluptatem voluptas iure facere alias?</div>
            <button className='bg-blue-500 text-white h-10 rounded-full'>{props.btnTxt}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
