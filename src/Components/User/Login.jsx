import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Login = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center bg-green-100 fixed'>
      <div className='bg-white p-5 shadow-xl rounded-md w-100'>
        <h1 className='text-center text-4xl font-bold text-green-900 mb-6'>Login NatCart</h1>
        <form className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="userInput" className='font-bold text-green-700'>Email:</label>
                <input type="email" id='userInput' placeholder='Enter your Mail' className='p-3 bg-green-100 rounded-lg outline-none'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="userInput" className='font-bold text-green-700'>Password:</label>
                <input type="password" id='userInput' placeholder='Enter your mail' className='p-3 bg-green-100 rounded-lg outline-none'/>
            </div>
            <button type='submit' className='bg-green-800 p-2 text-white rounded-lg cursor-pointer'>Login</button>
        </form>
        <div className='mt-3 flex justify-between'>
            <div className='flex gap-x-1 justify-center items-center'>
                <input type="checkbox" id='rememberMe' className='cursor-pointer accent-green-700'/>
                <label htmlFor="rememberMe" className='cursor-pointer'>Remember Me</label>
            </div>

            <div>
                <a href="" className='flex justify-center items-center text-green-800 font-semibold'>Sign Up <IoIosArrowForward /></a>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
