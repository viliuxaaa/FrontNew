import { Listbox, Transition } from '@headlessui/react';
import { useState, Fragment, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import  CategoryA  from "../../enums/CategoryA"
import { useTranslation } from "react-i18next";



function FilterIndex({catt, setCatt, language, placeholder}) {
    
    const categoryA = CategoryA();
    const [t, i18n] = useTranslation("global");
    const [cat, setCat] = useState({name:placeholder});
    
    useEffect(() => {
        for(let i=0; i < categoryA.length; i++) {
            if(categoryA[i].name === cat.name) {
                setCatt(categoryA[i].search)
            }
        }
    }, [cat])

    const Filter = [
        {
            value:cat,
            onChange:setCat,
            items:categoryA
        }
    ]

  return (
    <div className='bg-dry text-dryGray grid grid-cols-1 rounded w-[170px]'>
        {Filter.map((item, index) => (
                <Listbox key={index} value={item.value} onChange={item.onChange}>
                    <div className='relative'>
                        {/* button */}
                        <Listbox.Button className="relative border border-gray-800 w-full text-text bg-background rounded cursor-default py-4 pl-1 text-left text-xs">
                            <span className='block truncate'>{item.value.name}</span>
                            <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none'>
                                <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        {/* drop down menu */}
                        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Listbox.Options className="absolute z-10 mt-1 w-[120px] bg-white border border-gray-800 text-text rounded-md shadow-lg max-h-60 ring-opacity-5 overflow-auto focus:outline-none text-xs sm:text-sm">
                                {
                                    item.items.map((item, index) => (
                                        <Listbox.Option key={index} className={({active}) => `relative cursor-default select-none py-2 pl-1 ${
                                           active ? "bg-subMain text-text" : "text-text" 
                                        }`} value={item}>
                                            {({selected}) => (
                                                <>
                                                   <span className={`block truncated ${
                                                    selected ? 'font-semibold' : 'font-normal'
                                                    }`}>
                                                    {item.name} 
                                                    {
                                                        selected ? (
                                                            <span className='absolute inset-y-0 left-0 flex items-center pl-1'>
                                                            </span>
                                                        ):null
                                                    }
                                                    </span>
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))
                                }
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            ))}
    </div>
  )
}

export default FilterIndex