import React, { useContext } from 'react'
import mobileimg from "/Image/mobile.png"
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';


const MobileCards = (props) => {
  const {mobileData}=props
  const {brand,name,mrp,offerPrice,_id}=mobileData
  const navigate=useNavigate();
  const {setAddItems}=useContext(AppContext);

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

  const handelDetails=()=>{
      navigate("/Mobiles/"+_id);
    }
  return (
    <>
      <div className='m-5'>
        <div className='h-80 w-60 bg-white shadow-md rounded-md duration-1000 hover:shadow-lg cursor-pointer'>
            <div className='flex justify-center'>
                <img src={mobileimg} alt="Laptop image" className='h-40'onClick={handelDetails}/>
            </div>
            <div className='p-3 flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-green-700 line-clamp-1' onClick={handelDetails}>{name}</p>
                <p>Brand: {brand}</p>
                <div className='flex gap-4 font-semibold '>
                <p className='line-through text-gray-500'>RS.{mrp}</p>
                <p>Rs.{offerPrice}</p>
                </div>
            </div>
            <button className='bg-green-800 text-white cursor-pointer py-1' onClick={()=>handleAddItem(mobileData)}>Add to cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default MobileCards
