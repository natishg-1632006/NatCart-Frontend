import React, { useEffect, useState } from 'react'
import LaptopsCards from './LaptopsCards';
import LaptopFilter from './LaptopFilter';
const INITIAL = [
    {
        "id": 1,
        "name": "Dell Inspiron 15",
        "brand": "Dell",
        "model": "Inspiron 15 3520",
        "price": 65000,
        "offerPrice": 57999,
        "displaySize": 15.6,
        "ram": "8GB",
        "storageCapacity": "512GB",
        "storageType": "SSD",
        "processor": "Intel Core i5",
        "generation": "12th Gen",
        "category": "Work",
        "image": "DellImg"
    },
    {
        "id": 2,
        "name": "HP Pavilion x360",
        "brand": "HP",
        "model": "Pavilion x360 14-ek0074TU",
        "price": 72000,
        "offerPrice": 63999,
        "displaySize": 14,
        "ram": "16GB",
        "storageCapacity": "512GB",
        "storageType": "SSD",
        "processor": "Intel Core i7",
        "generation": "12th Gen",
        "category": "Convertible",
        "image": "DellImg"
    },
    {
        "id": 3,
        "name": "Apple MacBook Air M2",
        "brand": "Apple",
        "model": "MacBook Air M2",
        "price": 119900,
        "offerPrice": 104999,
        "displaySize": 13.6,
        "ram": "8GB",
        "storageCapacity": "256GB",
        "storageType": "SSD",
        "processor": "Apple M2",
        "generation": "2nd Gen",
        "category": "Ultrabook",
        "image": "DellImg"
    },
    {
        "id": 4,
        "name": "Lenovo IdeaPad Gaming 3",
        "brand": "Lenovo",
        "model": "IdeaPad Gaming 3 15ACH6",
        "price": 82000,
        "offerPrice": 74999,
        "displaySize": 15.6,
        "ram": "16GB",
        "storageCapacity": "512GB",
        "storageType": "SSD",
        "processor": "AMD Ryzen 7",
        "generation": "5000 Series",
        "category": "Gaming",
        "image": "DellImg"
    },
    {
        "id": 5,
        "name": "Asus ROG Strix G15",
        "brand": "Asus",
        "model": "ROG Strix G15 G513IH",
        "price": 95000,
        "offerPrice": 86999,
        "displaySize": 15.6,
        "ram": "16GB",
        "storageCapacity": "1TB",
        "storageType": "SSD",
        "processor": "AMD Ryzen 9",
        "generation": "5000 Series",
        "category": "Gaming",
        "image": "DellImg"
    },
    {
        "id": 6,
        "name": "Acer Aspire 7",
        "brand": "Acer",
        "model": "Aspire 7 A715-42G",
        "price": 58000,
        "offerPrice": 51999,
        "displaySize": 15.6,
        "ram": "8GB",
        "storageCapacity": "512GB",
        "storageType": "SSD",
        "processor": "AMD Ryzen 5",
        "generation": "5000 Series",
        "category": "Work",
        "image": "DellImg"
    },
    {
        "id": 7,
        "name": "Microsoft Surface Laptop 5",
        "brand": "Microsoft",
        "model": "Surface Laptop 5 13.5",
        "price": 110000,
        "offerPrice": 99999,
        "displaySize": 13.5,
        "ram": "16GB",
        "storageCapacity": "512GB",
        "storageType": "SSD",
        "processor": "Intel Core i7",
        "generation": "12th Gen",
        "category": "Ultrabook",
        "image": "DellImg"
    },
    {
        "id": 8,
        "name": "Dell XPS 13 Plus",
        "brand": "Dell",
        "model": "XPS 13 Plus 9320",
        "price": 135000,
        "offerPrice": 124999,
        "displaySize": 13.4,
        "ram": "16GB",
        "storageCapacity": "1TB",
        "storageType": "SSD",
        "processor": "Intel Core i7",
        "generation": "12th Gen",
        "category": "Ultrabook",
        "image": "DellImg"
    },
    {
        "id": 9,
        "name": "HP Victus Gaming",
        "brand": "HP",
        "model": "Victus 16-e0078AX",
        "price": 89000,
        "offerPrice": 81999,
        "displaySize": 16.1,
        "ram": "16GB",
        "storageCapacity": "512GB",
        "storageType": "SSD",
        "processor": "AMD Ryzen 7",
        "generation": "5000 Series",
        "category": "Gaming",
        "image": "DellImg"
    },
    {
        "id": 10,
        "name": "Asus ZenBook 14",
        "brand": "Asus",
        "model": "ZenBook 14 UX3402",
        "price": 94000,
        "offerPrice": 86999,
        "displaySize": 14,
        "ram": "16GB",
        "storageCapacity": "2TB",
        "storageType": "SSD",
        "processor": "Intel Core i7",
        "generation": "13th Gen",
        "category": "Ultrabook",
        "image": "DellImg"

    }
]

const LaptopData = () => {
    const [laptop, setLaptop] = useState(INITIAL);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedRam, setSelectedRam] = useState("");
    const [selectedRom, setSelectedRom] = useState("");
    const [selectedDisplay, setSelectedDisplay] = useState([]);
    const [selectedProcessor, setSelectedProcessor] = useState([]);

    const brands = [...new Set(laptop.map((data) => data.brand))].sort();

    const ram = [...new Set(laptop.map((data) => data.ram.replace(/(GB|TB)/i, "")))].sort((a, b) => a - b);

    const storageCapacity = [...new Set(laptop.map((data) => {
        const value = data.storageCapacity.toUpperCase();
        if (value.includes("TB")) {
            return parseInt(value) * 1024;
        }
        else if (value.includes("GB")) {
            return parseInt(value)
        }
    }))].sort((a, b) => a - b);

    const displaySize = [...new Set(laptop.map((data) => data.displaySize))].sort((a, b) => a - b)

    const processor = [...new Set(laptop.map((data) => data.processor))]

    // filter

    const [priceFilter, setPriceFilter] = useState([Math.min(...laptop.map((data) => data.offerPrice)),
    Math.max(...laptop.map((data) => data.offerPrice))
    ])

    const [minMaxPrice, setMinMaxPrice] = useState([Math.min(...laptop.map((data) => data.offerPrice)),
    Math.max(...laptop.map((data) => data.offerPrice))
    ])

    // ---------------------------Filter----------------------//
    
    const matchFilter = laptop.filter((product) => {
        const { brand, offerPrice, ram, storageCapacity, processor, displaySize } = product;
        const matchBrand = selectedBrand.length === 0 || selectedBrand.includes(brand);
        const matchPrice = offerPrice >= priceFilter[0] && offerPrice <= priceFilter[1];
        const matchRam =selectedRam == 0 || selectedRam==ram.replace(/(GB|TB)/i,"");
        const matchRom=selectedRom == 0 || selectedRom==storageCapacity.replace(/(GB|TB)/i,"");
        const matchDisplay=selectedDisplay.length == 0 || selectedDisplay.includes(displaySize);
        const matchProcessor=selectedProcessor.length == 0 ||selectedProcessor.includes(processor);
        return matchBrand && matchPrice && matchRam && matchRom && matchDisplay && matchProcessor;
    })

    return (
        <>
            <div className='flex'>
                <div>
                    <LaptopFilter brands={brands} ram={ram}
                        storageCapacity={storageCapacity}
                        displaySize={displaySize}
                        processor={processor}
                        priceFilter={priceFilter}
                        minMaxPrice={minMaxPrice}
                        setPriceFilter={setPriceFilter}
                        selectedBrand={selectedBrand}
                        setSelectedBrand={setSelectedBrand}
                        selectedRam={selectedRam}
                        setSelectedRam={setSelectedRam}
                        selectedRom={selectedRom}
                        setSelectedRom={setSelectedRom}
                        selectedDisplay={selectedDisplay}
                        setSelectedDisplay={setSelectedDisplay}
                        selectedProcessor={selectedProcessor}
                        setSelectedProcessor={setSelectedProcessor}
                    />
                </div>
                <div className='ml-15 mt-5'>
                    <p className='font-bold text-2xl text-green-900'>Products({matchFilter.length})</p>
                {
                    matchFilter.length === 0 ?
                        (
                                <p className='text-xl text-gray-400'>No product fount based on your filter</p>) :
                        (<div className='flex flex-wrap justify-center md:justify-start'>
                            {
                                matchFilter.map((LaptopData, index) => (
                                    <LaptopsCards key={index} LaptopData={LaptopData} />
                                ))
                            }
                        </div>)
                }
                </div>
            </div>
        </>
    )
}

export default LaptopData
