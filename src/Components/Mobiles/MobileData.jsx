import { useEffect, useState } from "react"
import MobileFilter from "./MobileFilter"
import MobileCards from "./MobileCards"

const MobileData = () => {

  const [mobile, setMobile] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/Mobiles")
    .then((res)=>res.json())
    .then((res)=>setMobile(res.mobileProductData))
  },[])

  const [selectedBrand,setSelectedBrand]=useState([]);

  const [selectedRam,setSelectedRam]=useState("");
  const [selectedRom,setSelectedRom]=useState("");
  const [selectedDisplaySize,setSelectedDisplaySize]=useState([]);
  const [selectedDisplayStyle,setSelectedDisplayStyle]=useState([]);
  const [selectedDisplayRefreshRate,setSelectedDisplayRefreshRate]=useState([]);
  const [selectedDisplayType,setSelectedDisplayType]=useState([]);
  const [selectedBattery,setSelectedBattery]=useState([]);


  const brand = [...new Set(mobile.map((data) => (data.brand)))].sort();
  const ram = [...new Set(mobile.map((data) => (data.ram.toUpperCase().replace("GB", ""))))]

  const storage = [...new Set(mobile.map((data) => {
    const value = data.storage.toLowerCase();
    if (value.includes("tb")) {
      return parseInt(value) * 1024;
    }
    else if (value.includes("gb")) {
      return parseInt(value);
    }
  })
  )].sort((a, b) => a - b)

  const displaySize = [...new Set(mobile.map((data) => (data.displaySize)))].sort();

  const displayStyle=[...new Set(mobile.map((data)=>(data.displayStyle)))].sort();

  const displayRefreshRate=[...new Set(mobile.map((data)=>(data.displayRefreshRate)))].sort();

  const displayType=[...new Set(mobile.map((data)=>(data.displayType.toUpperCase())))].sort();

  const battery=[...new Set(mobile.map((data)=>(data.battery)))].sort();

const [mobileMinMax, setMobileMinMax] = useState([0, 0]);
const [mobilePrice, setMobilePrice] = useState([0, 0]);

useEffect(() => {
  if (mobile.length > 0) {
    const prices = mobile.map(d => d.offerPrice);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    setMobileMinMax([min, max]);
    setMobilePrice([min, max]);
  }
}, [mobile]);


  //------------------------ Filter ----------------------------
  const [matchFilter,setMatchFilter]=useState([]);
  useEffect(()=>{
    const filtered=mobile.filter((products)=>{
    const {brand,offerPrice,ram,storage,displaySize,displayStyle,displayType,displayRefreshRate,battery}=products;
    const matchBrand= selectedBrand.length==0 || selectedBrand.includes(brand);
    const matchPrice= offerPrice>=mobilePrice[0] && offerPrice<=mobilePrice[1];
    const matchRam= selectedRam=="" || Number(selectedRam)==Number(ram.replace(/(GB|TB)/i,""));
    const matchRom= selectedRom=="" || Number(selectedRom)==Number(storage.replace(/(GB|TB)/i,""));
    const matchDisplaySize=selectedDisplaySize.length==0 || selectedDisplaySize.includes(displaySize);
    const matchDisplayStyle=selectedDisplayStyle.length==0 || selectedDisplayStyle.includes(displayStyle);
    const matchDisplayType=selectedDisplayType.length==0 || selectedDisplayType.includes(displayType);
    const matchRefreshRate=selectedDisplayRefreshRate.length==0 || selectedDisplayRefreshRate.includes(displayRefreshRate);
    const matchBattery=selectedBattery.length==0 || selectedBattery.includes(battery);
    return matchBrand && matchPrice && matchRam && matchRom && matchDisplaySize && matchDisplayStyle && matchDisplayType && matchRefreshRate && matchBattery;
  });
  setMatchFilter(filtered);
},[mobile, selectedBrand, selectedRam, selectedRom, selectedDisplaySize, selectedDisplayStyle, selectedDisplayType, selectedDisplayRefreshRate, selectedBattery,mobilePrice])

  return (
    <>
      <div className="flex">
        <div>
          <MobileFilter brand={brand}
            mobilePrice={mobilePrice}
            setMobilePrice={setMobilePrice}
            ram={ram}
            storage={storage}
            displaySize={displaySize}
            displayStyle={displayStyle}
            displayRefreshRate={displayRefreshRate}
            displayType={displayType}
            battery={battery}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            mobileMinMax={mobileMinMax}
            setSelectedRam={setSelectedRam}
            selectedRom={selectedRom}
            setSelectedRom={setSelectedRom}
            selectedDisplaySize={selectedDisplaySize}
            setSelectedDisplaySize={setSelectedDisplaySize}
            selectedDisplayStyle={selectedDisplayStyle}
            setSelectedDisplayStyle={setSelectedDisplayStyle}
            selectedDisplayRefreshRate={selectedDisplayRefreshRate}
            setSelectedDisplayRefreshRate={setSelectedDisplayRefreshRate}
            selectedDisplayType={selectedDisplayType}
            setSelectedDisplayType={setSelectedDisplayType}
            selectedBattery={selectedBattery}
            setSelectedBattery={setSelectedBattery}
             />
        </div>
        <div className='ml-15 mt-5'>
          <p className='font-bold text-2xl text-green-900'>Products({matchFilter.length})</p>
          <div className="flex flex-wrap justify-center md:justify-start">
            {
              matchFilter.map((mobileData, index) => (
                <MobileCards key={index} mobileData={mobileData} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileData
