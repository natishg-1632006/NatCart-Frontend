import React from 'react'
import { MdFilterAlt } from "react-icons/md";


const LaptopFilter = (props) => {
  const { brands, ram, storageCapacity, displaySize, processor, priceFilter, setPriceFilter, selectedBrand, setSelectedBrand, minMaxPrice, selectedRam, setSelectedRam, selectedRom, setSelectedRom, selectedDisplay, setSelectedDisplay, selectedProcessor, setSelectedProcessor} = props;
  return (
    <>
      {/* Mobile */}
      <div className='fixed md:hidden mt-2 ml-2 top-17 flex h-10 w-25 items-center p-3 gap-1 cursor-pointer bg-green-700 text-white'>
        <p className='text-xl'>Filter</p>
        <MdFilterAlt className='text-3xl' />
      </div>

      {/* Desktop */}

      <div className='hidden p-4 h-[660px] overflow-y-auto md:flex sticky top-17 md:w-64 bg-green-200 md:shadow-lg'>
        <div className='p-2'>

          <p className='text-3xl font-bold text-center box-border text-green-800'>Laptops</p>

          {/* Brands */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Brands</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                brands.map((data) => (
                  <div key={data} className='flex gap-2'>
                    <input type="checkbox" className='accent-green-800' value={selectedBrand.includes(data)} onChange={()=>setSelectedBrand(selectedBrand.includes(data)?selectedBrand.filter((b)=>b!==data):[...selectedBrand,data])}/>
                    <label>{data}</label>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Price */}

           <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Price</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                <input type="range"  className='w-45 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ' min={minMaxPrice[0]} max={minMaxPrice[1]} onChange={(e)=>setPriceFilter([minMaxPrice[0],parseInt(e.target.value)])}
                value={priceFilter[1]}
                />
              }
              <div className='flex justify-between mt-3 text-sm text-green-700 font-semibold'>
                <span>₹ {priceFilter[0]}</span>
                <span>₹ {priceFilter[1]}</span>
              </div>
            </div>
          </div>


          {/* Ram */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Ram</p>
            <div className='flex flex-col mt-2 gap-2'>
              <select className='bg-green-600  text-white border outline-none border-green-600 p-1 rounded'
              value={selectedRam}
                 onChange={(e)=>setSelectedRam(e.target.value?parseInt(e.target.value):"")}
              >
                <option value="">All</option>
                {
                  ram.map((data) => (
                    <option key={data} value={data} className='outline-none'>{data} GB</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* Storage Capacity */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Storage Capacity</p>
            <div className='flex flex-col mt-2 gap-2'>
               <select className='bg-green-600  text-white border outline-none border-green-600 p-1 rounded'
               value={selectedRom}
               onChange={(e)=>setSelectedRom(e.target.value?e.target.value<1024?parseInt(e.target.value):parseInt(e.target.value/1024):"")}
               >
                <option value="">All</option>
                {
                  storageCapacity.map((data) => (
                    <option key={data} value={data} className='outline-none'>{data >= 1024 ? data / 1024 + " TB" : data + " GB"}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* Display Size */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Display Size</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                displaySize.map((data) => (
                  <div key={data} className='flex gap-2'>
                    <input type="checkbox" className='accent-green-800' value={selectedDisplay.includes(data)}
                    onChange={()=>setSelectedDisplay(selectedDisplay.includes(data)?selectedDisplay.filter((d)=>d!==data):[...selectedDisplay,data])}
                    />
                    <label>{data} inch</label>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Processor */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Processor</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                processor.map((data) => (
                  <div key={data} className='flex gap-2'>
                    <input type="checkbox" className='accent-green-800' value={selectedProcessor.includes(data)} onChange={()=>setSelectedProcessor(selectedProcessor.includes(data)?selectedProcessor.filter((p)=>p!==data):[...selectedProcessor,data])}/>
                    <label>{data}</label>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LaptopFilter
