import React from 'react'
import mobileimg from "/Image/mobile.png"


const MobileCards = (props) => {
  const {mobileData}=props
  const {brand,model,mrp,offerPrice}=mobileData
  return (
    <>
      <div className='m-5'>
        <div className='h-80 w-60 bg-white shadow-md rounded-md duration-1000 hover:shadow-lg cursor-pointer'>
            <div className='flex justify-center'>
                <img src={mobileimg} alt="Laptop image" className='h-40'/>
            </div>
            <div className='p-3 flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-green-700 line-clamp-1'>{model}</p>
                <p>Brand: {brand}</p>
                <div className='flex gap-4 font-semibold '>
                <p className='line-through text-gray-500'>RS.{mrp}</p>
                <p>Rs.{offerPrice}</p>
                </div>
            </div>
            <button className='bg-green-800 text-white cursor-pointer py-1'>Add to cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default MobileCards
