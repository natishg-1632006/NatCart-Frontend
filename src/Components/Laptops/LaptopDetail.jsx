import React, { useContext, useEffect, useState } from 'react'
import laptoImg from "/Image/Laptopimg.webp"
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const LaptopDetail = () => {
  const [LaptopDetails,setLaptopDetails]=useState(null);
  const {setAddItems}=useContext(AppContext);
  const {id}=useParams()
  useEffect(()=>{
    fetch(`http://localhost:8000/Laptops/${id}`)
    .then((res)=>res.json())
    .then((res)=>setLaptopDetails(res))
  },[]);

    const handleAddItem=(LaptopData)=>{
      setAddItems((prev)=>{
        const existingItem=prev.find((data)=>data._id===LaptopData._id);
        if(existingItem){
          if(existingItem.quantity<Number(existingItem.stock)){
            return prev.map((item)=>item._id===LaptopData._id?{...item,quantity:item.quantity+1}:item);
          }
          else{
            return prev;
          }
        }
        return [...prev,{...LaptopData,quantity:1}];
      })
    }

  return (
    <>
    {LaptopDetails &&
      <div className='my-10  flex flex-wrap md:flex-row justify-center gap-x-25'>
        <div className='w-100  p-5 pb-20'>
            <img src={laptoImg} alt="laptopImg" />
        </div>
        <div className='flex flex-col gap-2 ml-5 relative'>
            <p className='text-green-800 font-bold text-2xl'>{LaptopDetails.laptopProductDetails.name}</p>
            <p className='text-gray-500 font-semibold'>Brand:{LaptopDetails.laptopProductDetails.brand}</p>
            <p className='font-semibold uppercase'>Features:</p>
            <p className=''>Ram: {LaptopDetails.laptopProductDetails.ram}</p>
            <p>Storage: {LaptopDetails.laptopProductDetails.storageCapacity}</p>
            <p>Storage Type: {LaptopDetails.laptopProductDetails.storageType}</p>
            <p>Processor: {LaptopDetails.laptopProductDetails.processor}</p>
            <p>Generation: {LaptopDetails.laptopProductDetails.generation}</p>
            <p>Category: {LaptopDetails.laptopProductDetails.category}</p>
            <p className='w-100'>Description: A budget powerhouse with a large battery and smooth display.</p>
            <p className={`absolute right-0 ${LaptopDetails.laptopProductDetails.stock>0?"bg-green-600":"bg-red-600"}  text-white px-1 rounded-full`}>{LaptopDetails.laptopProductDetails.stock>0?"In stock":"Out of stock"}</p>
            <div className='flex gap-20 items-center mt-3'>
                <span className='line-through font-bold text-gray-400 text-xl'>RS.{LaptopDetails.laptopProductDetails.price}</span>
                <span className='font-bold text-xl'>RS.{LaptopDetails.laptopProductDetails.offerPrice}</span>
            </div>
            <button className='bg-green-800 text-white p-2 w-100' onClick={()=>handleAddItem(LaptopDetails.laptopProductDetails)}>Add To cart</button>
        </div>
      </div>
    }
    </>
  )
}

export default LaptopDetail
