import React, { useEffect, useState } from 'react'
import MainModalForCity from './MainModalForCity'

function CityModal({ modalOpen, setModalOpen, CityData }) {

    const [checkedValues, setCheckedValues] = useState([]);


    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setCheckedValues((prevValues) => [...prevValues, value]);
        } else {
            setCheckedValues((prevValues) => prevValues.filter(item => item !== value));
        }
    };

    useEffect(() => {
        console.log(checkedValues)
    }, [checkedValues])

  return (
    <MainModalForCity modalOpen={modalOpen} setModalOpen={setModalOpen} setCheckedValues={setCheckedValues} checkedValues={checkedValues}>
        <div className='inline-block border border-border md:w-3/5 lg:w-4/5 align-middle p-1 overflow-y-auto h-4/5 lg:h-3/5 2xl:-2/5 bg-darkAccent text-white'>
                <div className='flex flex-col pb-10 gap-1'>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Visi Miestai</h3>
                    <ul className="grid w-full gap-6 md:grid-cols-8">
                        {CityData.map((city,i) => (
                            <li key={i} className='flex'>
                                <label className="inline-flex items-center justify-between w-full p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">{city.title}</div>
                                </div>
                                <input                                                                    
                                    type="checkbox"
                                    value={city.enum}
                                    id={city.value}   
                                    checked={checkedValues.includes(city.enum)}                              
                                    onChange={(event) => handleCheckboxChange(event)}
                                    className="peer"
                                />
                                </label>
                            </li>
                        ))}

                        
                    </ul>
                </div>
            <button 
                className='border border-text text-text bg-subMain px-2 rounded float-left'
                onClick={() => setModalOpen(false)}
            >
                issaugoti poasirinkima
            </button>
            <button 
                className='border border-text text-text bg-subMain px-2 rounded float-right'
                onClick={() => setCheckedValues([])}
            >
                isvalyti viska
            </button>
        </div>
    </MainModalForCity>
  )
}

export default CityModal