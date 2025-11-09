import React, { useContext } from 'react'
import laptoImg from "/Image/Laptopimg.webp"
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const LaptopsCards = (props) => {
    const {LaptopData}=props;
    
    const {name,brand,price,offerPrice,_id}=LaptopData;
    const navigate=useNavigate();
    const {addItems,setAddItems}=useContext(AppContext)

    const handelDetails=()=>{
      navigate("/Laptops/"+_id);
    }

    const handleAddItem=(LaptopData)=>{
      setAddItems((prev)=>{
        const existingItem=prev.find((data)=>data._id===LaptopData._id);
        if(existingItem)
        if(existingItem.quantity<Number(existingItem.stock)){
          return prev.map((item)=>item._id===LaptopData._id?{...item,quantity:item.quantity+1}:item);
        }
        else{
          return prev;
        }
        return [...prev,{...LaptopData,quantity:1}];
      })
    }

  return (
    <>
      <div className='m-5'>
        <div className='h-80 w-60 bg-white shadow-md rounded-md duration-1000 hover:shadow-lg cursor-pointer'>
            <div className='flex justify-center'>
                <img src={laptoImg} alt="Laptop image" className='h-40' onClick={handelDetails}/>
            </div>
            <div className='p-3 flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-green-700 line-clamp-1' onClick={handelDetails}>{name}</p>
                <p>Brand: {brand}</p>
                <div className='flex gap-4 font-semibold '>
                <p className='line-through text-gray-500'>RS.{price}</p>
                <p>Rs.{offerPrice}</p>
                </div>
            </div>
            <button className='bg-green-800 rounded-md text-white cursor-pointer py-1 duration-500 hover:bg-green-700' onClick={()=>handleAddItem(LaptopData)}>Add to cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default LaptopsCards
