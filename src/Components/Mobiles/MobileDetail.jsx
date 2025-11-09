import React, { useContext, useEffect, useState } from 'react'
import mobileimg from "/Image/mobile.png"
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const MobileDetail = () => {
  const [mobileDetails,setMobileDetails]=useState(null);
  const {setAddItems}=useContext(AppContext);
  const {id}=useParams()
  useEffect(()=>{
    fetch(`http://localhost:8000/Mobiles/${id}`)
    .then((res)=>res.json())
    .then((res)=>setMobileDetails(res.mobileProductDetails))
  },[]);

    const handleAddItem=(MobileData)=>{
      setAddItems((prev)=>{
        const existingItem=prev.find((data)=>data._id===MobileData._id);
        if(existingItem){
           if(existingItem.quantity<Number(existingItem.stock)){
             return prev.map((item)=>item._id===MobileData._id?{...item,quantity:item.quantity+1}:item);
           }
           else{
            return prev;
           }
        }
        return [...prev,{...MobileData,quantity:1}];
      })
    }

  return (
    <>
    {mobileDetails &&
      <div className='my-10  flex flex-wrap md:flex-row justify-center gap-x-25'>
        <div className='w-100  p-5 pb-20'>
            <img src={mobileimg} alt="laptopImg" />
        </div>
        <div className='flex flex-col gap-2 ml-5 relative'>
            <p className='text-green-800 font-bold text-2xl'>{mobileDetails.name}</p>
            <p className='text-gray-500 font-semibold'>Brand:{mobileDetails.brand}</p>
            <p className='font-semibold uppercase'>Features:</p>
            <p className=''>Ram: {mobileDetails.ram}</p>
            <p>Storage: {mobileDetails.storage}</p>
            <p>Storage Type: {mobileDetails.storageType}</p>
            <p>Processor: {mobileDetails.processor}</p>
            <p>Display Size: {mobileDetails.displaySize}</p>
            <p>Battery: {mobileDetails.battery}</p>
            <p className='w-100'>Description: A budget powerhouse with a large battery and smooth display.</p>
            <p className={`absolute right-0 ${mobileDetails.stock>0?"bg-green-600":"bg-red-600"}  text-white px-1 rounded-full`}>{mobileDetails.stock>0?"In stock":"Out of stock"}</p>
            <div className='flex gap-20 items-center mt-3'>
                <span className='line-through font-bold text-gray-400 text-xl'>RS.{mobileDetails.mrp}</span>
                <span className='font-bold text-xl'>RS.{mobileDetails.offerPrice}</span>
            </div>
            <button className='bg-green-800 text-white p-2 w-100' onClick={()=>handleAddItem(mobileDetails)}>Add To cart</button>
        </div>
      </div>
    }
    </>
  )
}

export default MobileDetail


  // const [MobileDetail,setMobileDetail]=useState(null);