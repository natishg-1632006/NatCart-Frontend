import { TbTruckDelivery } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom"

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const Navigate=useNavigate();

  function handelDown() {
    setDropDown(!dropDown);
    console.log(dropDown);

  }

  function handelLogin(){
    Navigate("/login")
  }

  return (
    <>
      <header className='bg-green-300 h-17 sticky top-0 flex items-center w-full px-5 shadow-md z-50 '>
        <nav className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl text-green-950 font-bold font-Poppins">NatCart</h1>
            <span className="text-5xl text-green-800"><TbTruckDelivery /></span>
          </div>
          <div className="flex items-center gap-5">
            <ul className="flex gap-4 items-center">
              <div><NavLink to="/" className="nav-link">Home</NavLink></div>

              <div className="relative">
                <p className="nav-link flex items-center gap-1" onClick={handelDown}>Categories<FaCaretDown className={`duration-500 ${dropDown ? "rotate-180" : "rotate-0"}`} /></p>
                <div className={`${dropDown ? "flex" : "hidden"}`}>
                  <div className="absolute  top-10 bg-green-300 w-30 p-3 shadow-md rounded-md flex flex-col gap-3 z-50">
                    <div><NavLink to="Laptops" className="nav-link" onClick={handelDown}>Laptops</NavLink></div>
                    <div><NavLink to="Mobiles" className="nav-link" onClick={handelDown}>Mobiles</NavLink></div>
                  </div>
                </div>
              </div>

              <div><a href="#" className="nav-link">Contact</a></div>
              <div className="relative">
                <span className="absolute text-[11px] left-4 -top-1 bg-green-700  text-white rounded-full h-4 w-4 text-center ">0</span>
              <div className="text-2xl duration-500 text-green-800 cursor-pointer hover:text-amber-600"><FaShoppingCart /></div>
              </div>
                <button className="bg-green-900 px-3 py-1 rounded-full text-white cursor-pointer duration-500 hover:bg-green-600" onClick={handelLogin}>Log in</button>
            </ul>

          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
