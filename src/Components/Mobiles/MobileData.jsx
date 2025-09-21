import { useState } from "react"
import MobileFilter from "./MobileFilter"
import MobileCards from "./MobileCards"
const INITIAL = [
  {
    "id": 1,
    "brand": "Samsung",
    "model": "Galaxy M14",
    "ram": "6GB",
    "storage": "128GB",
    "displaySize": "6.6 inch",
    "displayResolution": "FHD+",
    "displayType": "PLS LCD",
    "displayRefreshRate": "90Hz",
    "displayStyle": "Flat",
    "battery": "6000mAh",
    "mrp": 15999,
    "offerPrice": 12999,
    "processor": "Exynos 1330",
    "rating": 4.3,
    "description": "A budget powerhouse with a large battery and smooth display."
  },
  {
    "id": 2,
    "brand": "Apple",
    "model": "iPhone 14",
    "ram": "6GB",
    "storage": "128GB",
    "displaySize": "6.1 inch",
    "displayResolution": "Super Retina XDR",
    "displayType": "OLED",
    "displayRefreshRate": "60Hz",
    "displayStyle": "Flat",
    "battery": "3279mAh",
    "mrp": 79999,
    "offerPrice": 71999,
    "processor": "A15 Bionic",
    "rating": 4.8,
    "description": "Premium smartphone with advanced camera and iOS ecosystem."
  },
  {
    "id": 3,
    "brand": "OnePlus",
    "model": "Nord CE 3 Lite",
    "ram": "8GB",
    "storage": "128GB",
    "displaySize": "6.72 inch",
    "displayResolution": "FHD+",
    "displayType": "LCD",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Flat",
    "battery": "5000mAh",
    "mrp": 21999,
    "offerPrice": 18999,
    "processor": "Snapdragon 695",
    "rating": 4.4,
    "description": "Affordable 5G phone with smooth performance and sleek design."
  },
  {
    "id": 4,
    "brand": "Xiaomi",
    "model": "Redmi Note 12 Pro",
    "ram": "8GB",
    "storage": "256GB",
    "displaySize": "6.67 inch",
    "displayResolution": "FHD+",
    "displayType": "AMOLED",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Flat",
    "battery": "5000mAh",
    "mrp": 25999,
    "offerPrice": 22999,
    "processor": "MediaTek Dimensity 1080",
    "rating": 4.5,
    "description": "Great value smartphone with AMOLED display and fast charging."
  },
  {
    "id": 5,
    "brand": "Realme",
    "model": "Narzo 60x",
    "ram": "6GB",
    "storage": "128GB",
    "displaySize": "6.6 inch",
    "displayResolution": "FHD+",
    "displayType": "IPS LCD",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Flat",
    "battery": "5000mAh",
    "mrp": 16999,
    "offerPrice": 13999,
    "processor": "MediaTek Dimensity 6100+",
    "rating": 4.2,
    "description": "Stylish design with reliable 5G performance."
  },
  {
    "id": 6,
    "brand": "Google",
    "model": "Pixel 7a",
    "ram": "8GB",
    "storage": "128GB",
    "displaySize": "6.1 inch",
    "displayResolution": "FHD+",
    "displayType": "OLED",
    "displayRefreshRate": "90Hz",
    "displayStyle": "Flat",
    "battery": "4385mAh",
    "mrp": 43999,
    "offerPrice": 37999,
    "processor": "Google Tensor G2",
    "rating": 4.7,
    "description": "Compact Android phone with best-in-class camera software."
  },
  {
    "id": 7,
    "brand": "iQOO",
    "model": "Neo 7",
    "ram": "12GB",
    "storage": "256GB",
    "displaySize": "6.78 inch",
    "displayResolution": "FHD+",
    "displayType": "AMOLED",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Flat",
    "battery": "5000mAh",
    "mrp": 34999,
    "offerPrice": 29999,
    "processor": "MediaTek Dimensity 8200",
    "rating": 4.6,
    "description": "Performance-focused phone ideal for gaming and multitasking."
  },
  {
    "id": 8,
    "brand": "Motorola",
    "model": "Edge 40",
    "ram": "8GB",
    "storage": "256GB",
    "displaySize": "6.55 inch",
    "displayResolution": "FHD+",
    "displayType": "pOLED",
    "displayRefreshRate": "144Hz",
    "displayStyle": "Curved",
    "battery": "4400mAh",
    "mrp": 32999,
    "offerPrice": 28999,
    "processor": "MediaTek Dimensity 8020",
    "rating": 4.4,
    "description": "Slim design with curved display and clean stock Android."
  },
  {
    "id": 9,
    "brand": "Vivo",
    "model": "V29",
    "ram": "12GB",
    "storage": "256GB",
    "displaySize": "6.78 inch",
    "displayResolution": "FHD+",
    "displayType": "AMOLED",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Curved",
    "battery": "4600mAh",
    "mrp": 38999,
    "offerPrice": 34999,
    "processor": "Snapdragon 778G",
    "rating": 4.5,
    "description": "Stylish camera phone with Aura light for better portraits."
  },
  {
    "id": 10,
    "brand": "OPPO",
    "model": "Reno 10 Pro",
    "ram": "12GB",
    "storage": "256GB",
    "displaySize": "6.7 inch",
    "displayResolution": "FHD+",
    "displayType": "AMOLED",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Curved",
    "battery": "4600mAh",
    "mrp": 44999,
    "offerPrice": 39999,
    "processor": "Snapdragon 778G",
    "rating": 4.6,
    "description": "Premium camera-centric phone with telephoto portrait lens."
  },
  {
    "id": 11,
    "brand": "Nothing",
    "model": "Phone (2)",
    "ram": "12GB",
    "storage": "256GB",
    "displaySize": "6.7 inch",
    "displayResolution": "FHD+",
    "displayType": "OLED",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Flat",
    "battery": "4700mAh",
    "mrp": 49999,
    "offerPrice": 42999,
    "processor": "Snapdragon 8+ Gen 1",
    "rating": 4.5,
    "description": "Unique transparent design with glyph interface lighting."
  },
  {
    "id": 12,
    "brand": "Infinix",
    "model": "Zero Ultra",
    "ram": "8GB",
    "storage": "256GB",
    "displaySize": "6.78 inch",
    "displayResolution": "FHD+",
    "displayType": "AMOLED",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Curved",
    "battery": "4500mAh",
    "mrp": 32999,
    "offerPrice": 28999,
    "processor": "MediaTek Dimensity 920",
    "rating": 4.2,
    "description": "Ultra-fast charging phone with premium design."
  },
  {
    "id": 13,
    "brand": "Asus",
    "model": "ROG Phone 7",
    "ram": "16GB",
    "storage": "512GB",
    "displaySize": "6.78 inch",
    "displayResolution": "FHD+",
    "displayType": "AMOLED",
    "displayRefreshRate": "165Hz",
    "displayStyle": "Flat",
    "battery": "6000mAh",
    "mrp": 74999,
    "offerPrice": 69999,
    "processor": "Snapdragon 8 Gen 2",
    "rating": 4.8,
    "description": "Gaming beast with high refresh rate display and cooling system."
  },
  {
    "id": 14,
    "brand": "Poco",
    "model": "X5 Pro",
    "ram": "8GB",
    "storage": "256GB",
    "displaySize": "6.67 inch",
    "displayResolution": "FHD+",
    "displayType": "AMOLED",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Flat",
    "battery": "5000mAh",
    "mrp": 22999,
    "offerPrice": 19999,
    "processor": "Snapdragon 778G",
    "rating": 4.3,
    "description": "Mid-range performance phone with vibrant display."
  },
  {
    "id": 15,
    "brand": "Lava",
    "model": "Agni 2",
    "ram": "8GB",
    "storage": "2TB",
    "displaySize": "6.78 inch",
    "displayResolution": "FHD+",
    "displayType": "AMOLED",
    "displayRefreshRate": "120Hz",
    "displayStyle": "Curved",
    "battery": "4700mAh",
    "mrp": 24999,
    "offerPrice": 21999,
    "processor": "MediaTek Dimensity 7050",
    "rating": 4.1,
    "description": "Made-in-India 5G smartphone with curved AMOLED display."
  }
];


const MobileData = () => {

  const [mobile, setMobile] = useState(INITIAL);

  const [selectedBrand,setSelectedBrand]=useState([]);
  const [mobileMinMax,setMobileMinMax]=useState([Math.min(...mobile.map((data)=>(data.offerPrice))),Math.max(...mobile.map((data)=>(data.offerPrice)))])
  const [selectedRam,setSelectedRam]=useState("");
  const [selectedRom,setSelectedRom]=useState("");
  const [selectedDisplaySize,setSelectedDisplaySize]=useState([]);
  const [selectedDisplayStyle,setSelectedDisplayStyle]=useState([]);
  const [selectedDisplayRefreshRate,setSelectedDisplayRefreshRate]=useState([]);
  const [selectedDisplayType,setSelectedDisplayType]=useState([]);
  const [selectedBattery,setSelectedBattery]=useState([]);


  const [mobilePrice, setMobilePrice] = useState([Math.min(...mobile.map((data) => data.offerPrice)), Math.max(...mobile.map((data) => data.offerPrice))])

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

  //------------------------ Filter ----------------------------
  const matchFilter=mobile.filter((products)=>{
    const {brand,offerPrice,ram,storage,displaySize,displayStyle,displayType,displayRefreshRate,battery}=products;
    const matchBrand= selectedBrand.length==0 || selectedBrand.includes(brand);
    const matchPrice= offerPrice>=mobilePrice[0] && offerPrice<=mobilePrice[1];
    const matchRam= selectedRam=="" || selectedRam==ram.replace(/(GB|TB)/i,"");
    const matchRom= selectedRom=="" || selectedRom==storage.replace(/(GB|TB)/i,"");
    const matchDisplaySize=selectedDisplaySize.length==0 || selectedDisplaySize.includes(displaySize);
    const matchDisplayStyle=selectedDisplayStyle.length==0 || selectedDisplayStyle.includes(displayStyle);
    const matchDisplayType=selectedDisplayType.length==0 || selectedDisplayType.includes(displayType);
    const matchRefreshRate=selectedDisplayRefreshRate.length==0 || selectedDisplayRefreshRate.includes(displayRefreshRate);
    const matchBattery=selectedBattery.length==0 || selectedBattery.includes(battery);
    return matchBrand && matchPrice && matchRam && matchRom && matchDisplaySize && matchDisplayStyle && matchDisplayType && matchRefreshRate && matchBattery;
  })

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
