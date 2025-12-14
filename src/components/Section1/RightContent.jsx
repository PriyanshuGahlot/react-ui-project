import React from 'react'
import Card from './Card'

const RightContent = () => {

    const cards =[
        {imgUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           btnTxt: "Satisfied" 
        },
        {
            imgUrl:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTxt: "Underserved"
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1646589391055-06efac9ab4a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTxt:"Underbanked"
        }
    ]

  return (
    <div className='h-full p-4 w-2/3 flex justify-between mt-8 ml-16'>
        {
            cards.map(function(elem,i){

                return <div key = {i}>
                    <Card index={i+1} imgUrl={elem.imgUrl} btnTxt={elem.btnTxt} />
                </div>
            })
        }
    </div>
  )
}

export default RightContent
