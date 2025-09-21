import React, { useEffect, useState } from 'react'
import LaptopsCards from './LaptopsCards';
import LaptopFilter from './LaptopFilter';


const LaptopData = () => {
    const [laptop, setLaptop] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/Laptops")
            .then((res) => res.json())
            .then((res) => setLaptop(res.laptopProductData))
    }, [])

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

    const [priceFilter, setPriceFilter] = useState([0, 0]);
    const [minMaxPrice, setMinMaxPrice] = useState([0, 0]);

    useEffect(() => {
        if (laptop.length > 0) {
            const prices = laptop.map(p => p.offerPrice);
            setPriceFilter([Math.min(...prices), Math.max(...prices)]);
            setMinMaxPrice([Math.min(...prices), Math.max(...prices)]);
        }
    }, [laptop]);


    // ---------------------------Filter----------------------//
    const [matchFilter, setMatchFilter] = useState([]);
    useEffect(() => {
        const filtered = laptop.filter((product) => {
            const { brand, offerPrice, ram, storageCapacity, processor, displaySize } = product;
            const matchBrand = selectedBrand.length === 0 || selectedBrand.includes(brand);
            const matchPrice = offerPrice >= priceFilter[0] && offerPrice <= priceFilter[1];
            const matchRam = selectedRam === "" || Number(selectedRam) === Number(ram.replace(/(GB|TB)/i, ""));
            const matchRom = selectedRom === "" || Number(selectedRom) === Number(storageCapacity.replace(/(GB|TB)/i, ""));
            const matchDisplay = selectedDisplay.length === 0 || selectedDisplay.includes(displaySize);
            const matchProcessor = selectedProcessor.length === 0 || selectedProcessor.includes(processor);
            return matchBrand && matchPrice && matchRam && matchRom && matchDisplay && matchProcessor;
        });

        setMatchFilter(filtered);
    }, [laptop, selectedBrand, selectedRam, selectedRom, selectedDisplay, selectedProcessor, priceFilter]);

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
