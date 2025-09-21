import React from 'react'

const MobileFilter = (props) => {
  const { brand, mobilePrice, setMobilePrice, ram, storage, displaySize, displayStyle, displayType, battery, displayRefreshRate, selectedBrand, setSelectedBrand, mobileMinMax, setSelectedRam, selectedRom, setSelectedRom, selectedDisplaySize, setSelectedDisplaySize, selectedDisplayStyle, setSelectedDisplayStyle, selectedDisplayRefreshRate,setSelectedDisplayRefreshRate, selectedDisplayType,setSelectedDisplayType, selectedBattery,setSelectedBattery } = props;
  return (
    <>
      <div className=' p-4 h-[660px] overflow-y-auto md:flex sticky top-17 md:w-64 bg-green-200 md:shadow-lg'>
        <div className='p-2'>
          <p className='text-3xl ml-7 font-bold text-center box-border text-green-800'>Mobiles</p>

          {/* Brand */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Brands</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                brand.map((b) => (
                  <div key={b} className='flex gap-2'>
                    <input type="checkbox" id={b}
                      className='accent-green-800 cursor-pointer'
                      value={selectedBrand.includes(b)}
                      onChange={() => setSelectedBrand(selectedBrand.includes(b) ? selectedBrand.filter((data) => (b !== data)) : [...selectedBrand, b])}
                    />
                    <label htmlFor={b}>{b}</label>
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
                <input type="range" className='w-45 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ' min={mobileMinMax[0]} max={mobileMinMax[1]} value={mobilePrice[1]} onChange={(e) => (setMobilePrice([mobilePrice[0], parseInt(e.target.value)]))} />
              }
              <div className='flex justify-between text-green-700 font-semibold'>
                <span>{mobilePrice[0]}</span>
                <span>{mobilePrice[1]}</span>
              </div>
            </div>
          </div>

          {/* Ram */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Ram</p>
            <div className='flex flex-col mt-2 gap-2'>
              <select name="ram" id="ram" onChange={(e) => setSelectedRam(e.target.value)} className='bg-green-600  text-white border outline-none border-green-600 p-1 rounded'>
                <option value="">All</option>
                {
                  ram.map((r) => (
                    <option value={r} key={r}>{r} GB</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* Storage */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Storage Capacity</p>
            <div className='flex flex-col mt-2 gap-2'>
              <select name="ram" id="ram" className='bg-green-600  text-white border outline-none border-green-600 p-1 rounded' onChange={(e) => setSelectedRom(e.target.value)}>
                <option value="">All</option>
                {
                  storage.map((s) => (
                    <option value={s >= 1024 ? s / 1024 : s} key={s}>{s >= 1024 ? s / 1024 : s} {s >= 1024 ? "TB" : "GB"}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* Display */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Display Size</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                displaySize.map((d) => (
                  <div key={d} className='flex gap-2'>
                    <input type="checkbox" value={selectedDisplaySize.includes(d)} id={d} className='accent-green-800 cursor-pointer'
                      onChange={() => setSelectedDisplaySize(selectedDisplaySize.includes(d) ? selectedDisplaySize.filter((data) => (data != d)) : [...selectedDisplaySize, d])}
                    />
                    <label htmlFor={d}>{d}</label>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Display Style */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Display Style</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                displayStyle.map((d) => (
                  <div key={d} className='flex gap-2'>
                    <input type="checkbox" value={selectedDisplayStyle.includes(d)} id={d} className='accent-green-800 cursor-pointer' 
                    onChange={()=>setSelectedDisplayStyle(selectedDisplayStyle.includes(d)?selectedDisplayStyle.filter((data)=>d!==data):[...selectedDisplayStyle,d])}
                    />
                    <label htmlFor={d}>{d}</label>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Display Type */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Display Type</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                displayType.map((d) => (
                  <div key={d} className='flex gap-2'>
                    <input type="checkbox" value={selectedDisplayType.includes(d)} id={d} className='accent-green-800 cursor-pointer' 
                    onChange={()=>setSelectedDisplayType(selectedDisplayType.includes(d)?selectedDisplayType.filter((data)=>data!==d):[...selectedDisplayType,d])}
                    />
                    <label htmlFor={d}>{d}</label>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Display RefreshRate */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>RefreshRate</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                displayRefreshRate.map((d) => (
                  <div key={d} className='flex gap-2'>
                    <input type="checkbox" value={selectedDisplayRefreshRate.includes(d)} id={d} className='accent-green-800 cursor-pointer' 
                    onChange={()=>setSelectedDisplayRefreshRate(selectedDisplayRefreshRate.includes(d)?selectedDisplayRefreshRate.filter((data)=>d!==data):[...selectedDisplayRefreshRate,d])}
                    />
                    <label htmlFor={d}>{d}</label>
                  </div>
                ))
              }
            </div>
          </div>


          {/* Battery */}

          <div>
            <p className='mt-5 text-lg text-green-600 font-semibold'>Battery</p>
            <div className='flex flex-col mt-2 gap-2'>
              {
                battery.map((d) => (
                  <div key={d} className='flex gap-2'>
                    <input type="checkbox" value={selectedBattery.includes(d)} id={d} className='accent-green-800 cursor-pointer' 
                    onChange={()=>setSelectedBattery(selectedBattery.includes(d)?selectedBattery.filter((data)=>d!==data):[...selectedBattery,d])}
                    />
                    <label htmlFor={d}>{d}</label>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {console.log(selectedBattery)
        }
      </div>
    </>
  )
}

export default MobileFilter
