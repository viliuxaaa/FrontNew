import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import FilterIndex from "../../Components/Home/FilterIndex";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import CityModal from "../../Components/Modals/CityModal";
import  cities  from "../../enums/Cities"

function NavBar() {
    const [modalOpen, setModalOpen ] = useState(false)
    const [city, setCity] = useState();

    const [checkedValues, setCheckedValues] = useState([]);

    
    useEffect(() => {
        console.log(checkedValues)
    }, [checkedValues])

    useEffect(() => {
        if(modalOpen === false) {
          setCity();
        }
      }, [modalOpen])

      const CityData = cities;     

    const hover = "hover:text-cyan-800 transition hover:scale-105 transitions text-text";
    const Hover = ({isActive}) => (isActive ? "text-custom" : hover)
    
    return (
        <>
        <CityModal
          modalOpen={modalOpen} 
          setModalOpen={setModalOpen} 
          setCheckedValues={setCheckedValues}
          checkedValues={checkedValues}
          CityData={CityData} 
        />
        <div className="bg-main shadow-md md:sticky top-0 z-20 h-[165px] lg:h-full">
            <div className="container mx-auto py-6 lg:px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
                {/* Logo */}
                <div className="col-span-1 block pb-1 scale-110 hover:scale-125 transition w-[250px] mx-auto lg:w-full">
                    <Link to="/">
                        <img 
                            src="/images/logo.png" 
                            alt="logo" 
                            className="w-full h-12 object-contain" 
                        />
                    </Link>
                </div>
                {/* search Form */}
                <div className="col-span-3 flex w-full">
                    <form  className="w-full border border-text text-sm bg-background rounded flex-btn gap-4">
                        <button 
                            type="submit" 
                            className="bg-subMain w-12 flex-colo h-12 rounded text-text"
                        >
                            <FaSearch />  
                        </button>
                        <input
                            type="text" 
                            placeholder="Ko Ieskosime ?"
                            className="font-medium placeholder:text-text text-sm w-11/12 h-12 bg-transparent border-none px-2 text-text" 
                        />
                        
                    </form>
                    {/* Miestas */}
                    <button onClick={() => setModalOpen(true)} className="relative border border-gray-800 w-[170px] text-text bg-background rounded py-4 pl-1 text-left text-xs">
                            Miestas
                            <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none'>
                                    <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                            </span>
                    </button>
                    <FilterIndex />
                </div>
                {/* menus */}
                <div className="col-span-3 pt-1 lg:pt-0 font-medium text-sm xl:gap-14 2xl:gap-24 justify-between flex items-center">
                  <NavLink to="/upload" className={Hover}>Add Poster</NavLink>  
                  <NavLink to="/posters" className={Hover}>Skelbimai</NavLink>
                  <NavLink to="/dashboard" className={Hover}>Dash</NavLink>   
                  <NavLink to="/login" className={Hover}>
                    <CgUser className="w-8 h-8" />
                  </NavLink> 
                </div>
            </div>
            <div className="absolute flex font-medium text-text w-18 h-7 right-7 top-4">
                <button className="w-9 h-7 transition justify-center items-center hover:scale-105 hover:text-teal-600">
                    LT
                </button>
                <span className="pt-[2px]">|</span>
                <button className="w-9 h-7 transition justify-center items-center hover:scale-105 hover:text-teal-600">
                    RU
                </button>
            </div>
        </div>
        </>
    )
}

export default NavBar
