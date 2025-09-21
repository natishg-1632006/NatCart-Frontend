import React, { useState } from 'react'

const Student = () => {
    const [dept,setDept]=useState("");

    function handelDept(e){
        setDept(e.target.value);
    }

  return (
    <>
      <div className='bg-white w-100 h-150 m-3 shadow-md'>
        <div className='flex flex-col gap-2 p-2'>
        <label htmlFor="nameInput" >Name</label>
        <input type="text" id="nameInput" className='bg-amber-200 border-2 border-amber-700 p-2' placeholder='Enter Your name'/>
        <label htmlFor="regInput">Reg No</label>
        <input type="text" id="regInput" className='bg-amber-200 border-2 border-amber-700 p-2' placeholder='Enter Your Reg no'/>
        <label htmlFor="regInput">Department</label>
        <select name="dept"  onClick={(e)=>handelDept(e)} className='bg-amber-200 border-2 border-amber-700 p-2'>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
        </select>
        <div className={`${dept===""?"hidden":"flex flex-col gap-2"}  `}>
        <label htmlFor="Specialization">Specialization:</label>
        <select id="Specialization" className={`${dept=="CSE"?"opacity-50":""} bg-amber-200 border-2 border-amber-700 p-2`} disabled={dept==="CSE"}>
           {dept==="CSE" && <option value="" >Select Specialization</option>}
            <option value="IT">IT</option>
            <option value="CORE">CORE</option>
        </select>
        </div>
        <button className='bg-amber-200 border-2 mt-5 border-amber-700 p-2'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Student
