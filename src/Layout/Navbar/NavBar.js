import { Link, NavLink, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile, CgUser } from "react-icons/cg";
import FilterIndex from "../../Components/Home/FilterIndex";
import { BiChevronDown, BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import CityModal from "../../Components/Modals/CityModal";
import  cities  from "../../enums/Cities"
import  useAuth  from '../../hooks/useAuth';
import axios from "../../api/axios";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import  categoryA  from "../../enums/CategoryA"
import { useTranslation } from "react-i18next";

function NavBar() {
    const [t, i18n] = useTranslation("global");
    const [modalOpen, setModalOpen ] = useState(false)
    const [checkedValues, setCheckedValues] = useState([]);

    const [catt, setCatt] = useState("");
    const[text, setText] = useState("")
    const handleChange = (value) => {
        setText(value);
    }

    const [searchLink, setSearchLink] = useState("")

//  cia bus notificationas login success
    const location = useLocation();

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const loginSuccess = params.get('loginSuccess');
      const regSuccess = params.get('registrationSuccess');
      const posterSuccess = params.get('posterSuccess');
      const passwordSuccess = params.get('passwordSuccess');
  
      if (loginSuccess === 'true') {
          toast.success('👍 Sėkmingai prisijungta!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (regSuccess === 'true') {
        toast.success('Sėkmingai užsiregistravote! 🎉', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (posterSuccess === 'true') {
        toast.success('Skelbimas sėkmingai įdėtas!📣', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (passwordSuccess === 'true') {
        toast.success('Slaptažodis sėkmingai pakeistas!🔐', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }, [location.search]);
  ///////////////////////////////////////////////////  
    const { auth, setAuth } = useAuth();

    const logout_URL="/api/v1/auth/logout";
    

    const handleLogout = async () => {
        try {
          await axios.post(logout_URL); // Send logout request using axios directly
          setAuth(false); // Update the auth state locally
        } catch (error) {
          console.error("Logout error:", error);
        }
      };
  
    useEffect(() => {
        let a = ""
        let b = ""
        let c = ""
        if (catt !== "") {
            a = catt; 
        }
        if (text !== "") {
            b = "&string=" + text; 
        }
        if (checkedValues.length > 0) {
            c = "&city=" + checkedValues; 
        }
        setSearchLink(a + b + c)
    }, [catt, checkedValues, text])


    const CityData = cities;
    // const categoryData = categoryA     

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
                            type="button" 
                            className="bg-subMain w-12 flex-colo h-12 rounded text-text"
                        >
                            <Link to={"/posters/search/" + searchLink}>
                                <FaSearch />
                            </Link> 
                        </button>
                        <input
                            type="text" 
                            placeholder={t("navbarButtons.searchPlaceHolder")}
                            className="font-medium placeholder:text-text text-sm w-11/12 h-12 bg-transparent border-none px-2 text-text"
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        
                    </form>
                    <span className="w-[5px]"></span>
                    {/* Miestas */}
                    <button onClick={() => setModalOpen(true)} className="relative border border-gray-800 w-[170px] text-text bg-background rounded py-4 pl-1 text-left text-xs">
                            {t("navbarButtons.city")}
                            <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none'>
                                    <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                            </span>
                    </button>
                    <span className="w-[5px]"></span>
                    <FilterIndex
                        catt={catt}
                        setCatt={setCatt} 
                    />
                </div>
                {/* menus */}
                <div className="col-span-3 pt-1 lg:pt-0 font-medium text-sm xl:gap-14 2xl:gap-24 justify-between flex items-center">
                  <NavLink to="/upload" className='hover:shake text-text text-base'>
                    {t("navbarButtons.newPostButton")}
                  </NavLink>  
                  <NavLink to="/posters/search/:searchType" className={Hover}>{t("navbarButtons.allPosts")}</NavLink>
                  <NavLink to="/dashboard" className={Hover}>{t("navbarButtons.dash")}</NavLink>
                  { auth?.userId ?                   
                    (
                        <>
                            <NavLink to="/profile" className={Hover}>
                                <CgProfile className="w-7 h-7" />
                            </NavLink>
                            <NavLink to="/" onClick={handleLogout} className={Hover}>
                                <BiLogIn className="w-8 h-8" />
                            </NavLink>
                        </>
                    ) : (
                        <NavLink to="/login" className={Hover}>
                        <CgUser className="w-8 h-8" />
                        </NavLink>
                    )} 
                </div>
            </div>
            <div className="absolute flex font-medium text-text w-18 h-7 right-7 top-4">
                <button className="w-9 h-7 transition justify-center items-center hover:scale-105 hover:text-teal-600">
                    LT
                </button>
                <span className="pt-[2px]">|</span>
                <button className="w-9 h-7 transition justify-center items-center hover:scale-105 hover:text-teal-600">
                    EN
                </button>
            </div> 
      </div>
    </>
  );
}

export default NavBar;
