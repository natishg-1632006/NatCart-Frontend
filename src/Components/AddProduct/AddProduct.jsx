import React from 'react'
import { FaLaptop } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
     const navigate=useNavigate();
     const handelAddLaptops=()=>{
      navigate("Laptops")
     }

     const handelAddMobiles=()=>{
      navigate("Mobiles")
     }
  return (
    <>
      <div className='flex m-5 gap-5'>

        <div onClick={()=>handelAddLaptops()} className='cursor-pointer flex justify-center items-center gap-3 bg-gray-300 p-5 rounded-xl shadow-lg '>
          <div>
            <p className='text-7xl text-green-900'><FaLaptop /></p>
          </div>
          <div>
            <p className='font-bold text-2xl text-green-700'>Laptop</p>
          </div>
          <div>
            <p className='text-2xl font-extrabold text-green-900'><IoIosArrowForward /></p>
          </div>
        </div>

        <div onClick={()=>handelAddMobiles()} className='cursor-pointer flex justify-center items-center gap-3 bg-gray-300 p-5 rounded-xl shadow-lg '>
          <div>
            <p className='text-7xl text-green-900'><FaMobileAlt /></p>
          </div>
          <div>
            <p className='font-bold text-2xl text-green-700'>Mobile</p>
          </div>
          <div>
            <p className='text-2xl font-extrabold text-green-900'><IoIosArrowForward /></p>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddProduct
