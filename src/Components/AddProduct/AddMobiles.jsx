import React, { useEffect, useState } from 'react'
import { FaMobileAlt } from "react-icons/fa";

const AddMobiles = () => {
    const [mobile, setMobile] = useState([]);
  
    useEffect(()=>{
      fetch("http://localhost:8000/Mobiles")
      .then((res)=>res.json())
      .then((res)=>setMobile(res.mobileProductData))
    },[])
   return (
    <div className='m-5'>
      <div className='flex justify-end'>
      <button className='bg-green-900 cursor-pointer flex justify-center items-center gap-2 text-white p-2 rounded'>Add New Mobile <FaMobileAlt /></button>
      </div>
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr className="text-left text-gray-700 uppercase text-sm">
            <th className="py-3 px-4 border-b whitespace-nowrap">S.NO</th>
            <th className="py-3 px-4 border-b whitespace-nowrap">Name</th>
            <th className="py-3 px-4 border-b whitespace-nowrap">Brand</th>
            <th className="py-3 px-4 border-b whitespace-nowrap">MRP</th>
            <th className="py-3 px-4 border-b whitespace-nowrap">Offer Price</th>
            <th className="py-3 px-4 border-b whitespace-nowrap">Processor</th>
            <th className="py-3 px-4 border-b whitespace-nowrap">Stock</th>
            <th className="py-3 px-4 border-b whitespace-nowrap text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {mobile && mobile.length > 0 ? (
            mobile.map((item, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">
                  {index+1}
                </td>
                <td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">
                  {item.name}
                </td>
                <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                  {item.brand}
                </td>
                <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                  ₹{item.mrp}
                </td>
                <td className="py-3 px-4 text-green-600 font-semibold whitespace-nowrap">
                  ₹{item.offerPrice}
                </td>
                <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                  {item.processor}
                </td>
                <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                  {item.stock}
                </td>
                <td className="py-3 px-4 text-center whitespace-nowrap">
                  <div className="flex justify-center gap-2">
                    <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm shadow-sm">
                      Edit
                    </button>
                    <button className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm shadow-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-center py-6 text-gray-500 italic"
              >
                No laptops available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Small hint for mobile users */}
      <p className="text-xs text-gray-500 text-center mt-2 md:hidden">
        👉 Scroll left/right to view more columns
      </p>
    </div>
    </div>
  );
}

export default AddMobiles
