import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { AppContext } from '../../Context/AppContext';
import laptoImg from "/Image/Laptopimg.webp"
import mobileimg from "/Image/mobile.png"
import { FaSadTear } from "react-icons/fa";
const CartSidebar = ({ isCartOpen, setIsCartOpen }) => {
  const { addItems, setAddItems, updateItem, removeItem } = useContext(AppContext);
  return (
    <>
      <div className={`fixed p-3 pb-50 right-0 h-screen overflow-y-auto w-110 lg:w-110 z-100 shadow-lg bg-green-100 transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-bold text-green-800'>Your Cart</div>
          <div className='font-bold text-2xl text-green-800 cursor-pointer hover:text-green-700' onClick={() => setIsCartOpen(false)}><IoClose /></div>
        </div>
        <div className='mt-5'>
          {
            addItems.map((item, index) => {
              return (
                <div key={index} className='w-full flex h-25 mb-2 p-2 bg-white rounded-md shadow-sm'>
                  <div className='flex gap-2'>
                    <div>
                      <img src={item.productType=="mobile"?mobileimg:laptoImg} className='w-20' />
                    </div>
                    <div>
                      <p className='text-green-700 font-semibold line-clamp-1'>{item.name}</p>
                      <div className='flex gap-15'>
                        <div>
                          <p>RS.{item.offerPrice}</p>
                        </div>
                        <div className='flex gap-2'>
                          <button className='bg-gray-300 w-4 h-6 shadow cursor-pointer' onClick={() => updateItem(item._id, item.quantity - 1,item.stock)}>-</button>
                          {item.quantity}
                          <button className='bg-gray-300 w-4 h-6 shadow cursor-pointer' onClick={() => updateItem(item._id, item.quantity + 1,item.stock)}>+</button>
                        </div>
                      </div>
                      <div>
                        <p className='flex justify-end text-sm mt-4 text-gray-400 underline cursor-pointer' onClick={() => removeItem(item._id)}>remove item</p>
                      </div>
                    </div>
                  </div>
                </div>)
            })
          }
        </div>
        <div>
          {
            addItems.length > 0 ?
              (
                <div>

                  <table className="border-collapse  w-full">
                    <thead className='border-b-2'>
                      <tr className='text-green-800'>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody className='text-center '>
                      {
                        addItems.map((item, index) => {
                          return (
                            <tr key={index} className='border-b-2 border-b-gray-400'>
                              <td className='line-clamp-1 text-left'>{item.name}</td>
                              <td>₹ {item.offerPrice}</td>
                              <td>{item.quantity}</td>
                              <td>₹ {item.offerPrice * item.quantity}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                    <tfoot>
                      <tr className='text-center'>
                        <td></td>
                        <td className='text-right font-bold text-xl text-green-800'>Total:</td>
                        <td>{addItems.reduce((sum, item) => item.quantity + sum, 0)}</td>
                        <td>₹ {addItems.reduce((sum, item) => Number(item.offerPrice) * item.quantity + sum, 0)}</td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className='flex justify-center'>
                    <button className='w-full bg-green-800 shadow-md` cursor-pointer hover:bg-green-700 text-white p-1 rounded mt-5'>Buy Now</button>
                  </div>
                </div>
              ) : (
                <div className='flex flex-col items-center'>
                  <FaSadTear className='text-9xl text-green-800' />
                  <h1 className='font-bold text-gray-600'>Your Cart Is Empty</h1>
                </div>
              )
          }
        </div>
      </div>
    </>
  )
}

export default CartSidebar
