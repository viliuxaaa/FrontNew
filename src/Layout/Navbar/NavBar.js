import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

function NavBar() {
    const hover = "hover:text-textHover transitions text-text";
    const Hover = ({isActive}) => (isActive ? "text-custom" : hover)
    return (
        <>
        <div className="bg-main shadow-md md:sticky top-0 z-20">
            <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
                {/* Logo */}
                <div className="col-span-1 block pb-1">
                    <Link to="/">
                        <img 
                        src="/images/logo.png" 
                        alt="logo" 
                        className="w-full h-12 object-contain" 
                        />
                    </Link>
                </div>
                {/* search Form */}
                <div className="col-span-3">
                    <form  className="lg:w-full border border-text text-sm bg-background rounded flex-btn gap-4">
                        <button 
                            type="submit" 
                            className="bg-subMain w-12 flex-colo h-12 rounded text-text"
                        >
                            <FaSearch />  
                        </button>
                        <input
                            type="text" 
                            placeholder="Search Movie Name from here"
                            className="font-medium placeholder:text-text text-sm w-11/12 h-12 bg-transparent border-none px-2 text-text" 
                        />
                    </form>
                </div>
                {/* menus */}
                <div className="col-span-3 font-medium pt-4 text-sm xl:gap-14 2xl:gap-24 justify-between flex items-center">
                  <NavLink to="/upload" className={Hover}>Add Poster</NavLink>  
                  <NavLink to="/posters" className={Hover}>Skelbimai</NavLink>
                  <NavLink to="/dashboard" className={Hover}>Dash</NavLink>   
                  <NavLink to="/login" className={Hover}>
                    <CgUser className="w-8 h-8" />
                  </NavLink> 
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar
