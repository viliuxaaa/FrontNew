import Layout from '../../Layout/Layout'
import { BsFillGridFill } from 'react-icons/bs'
import { FaListAlt, FaUsers, FaHeart } from 'react-icons/fa'
import { RiMovie2Fill, RiLockPasswordLine } from 'react-icons/ri'
import { HiViewGridAdd } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

function SideBar({admin, children}) {
    const AdminLinks = [
        {
            name:"Dashboard",
            link:"/dashboard",
            icon:BsFillGridFill,
        },
        {
            name:"Visi Skelbimai",
            link:"/skelbimulist",
            icon:FaListAlt,
        },
        {
            name:"Add Movie",
            link:"/addmovie",
            icon:RiMovie2Fill,
        },
        {
            name:"Categories",
            link:"/categories",
            icon:HiViewGridAdd,
        },
        {
            name:"Users",
            link:"/users",
            icon:FaUsers,
        },
        {
            name:"Update Profile",
            link:"/profile",
            icon:FiSettings,
        },
        {
            name:"Favorites Movies",
            link:"/favorites",
            icon:FaHeart,
        },
    ]

    const Links = [
        {
            name: "Mano Profilis",
            link: "/dashboard",
            icon: BsFillGridFill,
            },
            {
            name: "Mano skelbimai",
            link: "/skelbimulist",
            icon: FaListAlt,
            },
            {
            name: "Pridėti Skelbima",
            link: "/upload",
            icon: RiMovie2Fill,
            },
            // {
            // name: "Atnaujinti profilį",
            // link: "/profile",
            // icon: FiSettings,
            // },
            // {
            // name: "Mėgstamiausi skelbimai",
            // link: "/favorites",
            // icon: FaHeart,
            // },
            {
            name: "Keisti slaptažodį",
            link: "/password",
            icon: RiLockPasswordLine,
            },
    ]

    const active = 'bg-dyGray text-background'
    const hover = 'hover:text-black hover:bg-main'
    const inActive = 'rounded font-medium text-sm transitions flex gap-3 items-center p-4'
    const Hover = ({isActive}) => 
        isActive ? `${active} ${inActive}` : `${inActive} ${hover}`
    

  return (
    <Layout>
        <div className='min-h-screen container mx-auto px-2 text-text'>
            <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
                <div className='col-span-2 xs:my-2 xl:my-0 sticky bg-darkAccent border border-gray-800 p-6 rounded-md xl:mb-0 mb-0'>
                    

                    {
                        admin ? 
                        (
                        // Admin Links
                        AdminLinks.map((link, index) => (
                            <NavLink to={link.link} key={index} className={Hover}>
                                <link.icon /> <p>{link.name}</p>
                            </NavLink>
                        ))
                        ) : (
                           // user Links
                        Links.map((link, index) => (
                            <NavLink to={link.link} key={index} className={Hover}>
                                <link.icon /> <p>{link.name}</p>
                            </NavLink>
                        )) 
                        )
                    }
                </div>
                <div 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="10"
                    data-aos-offset="200"
                    className='col-span-6 rounded-md bg-darkAccent border border-gray-800 p-6'>
                        {children}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default SideBar