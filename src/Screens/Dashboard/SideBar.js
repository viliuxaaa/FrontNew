import Layout from '../../Layout/Layout'
import { BsFillGridFill } from 'react-icons/bs'
import { FaListAlt, FaUsers, FaHeart } from 'react-icons/fa'
import { RiMovie2Fill, RiLockPasswordLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useTranslation } from "react-i18next";
import { AiOutlineTable, AiOutlineUserAdd } from 'react-icons/ai'

function SideBar({ children}) {
    const [t, i18n] = useTranslation("global");
    const { auth } = useAuth();
    const AdminLinks = [
        {
            name:t("sideBar.myProfile"),
            link:"/dashboard",
            icon:BsFillGridFill,
        },
        {
            name:t("sideBar.allPosts"),
            link:"/skelbimulist",
            icon:AiOutlineTable,
        },
        {
            name: t("sideBar.myPosts"),
            link: `/manoskelbimai/${auth.userId}`,
            icon: FaListAlt,
        },
        {
            name:t("adminReg.adminRegText"),
            link:"/adminregister",
            icon:AiOutlineUserAdd,
        },
        {
            name:t("sideBar.allUsers"),
            link:"/userslist",
            icon:FaUsers,
        },
        {
            name: t("sideBar.changePassword"),
            link: "/password",
            icon: RiLockPasswordLine,
        },
    ]

    const Links = [
        {
            name: t("sideBar.myProfile"),
            link: "/dashboard",
            icon: BsFillGridFill,
            },
            {
            name: t("sideBar.myPosts"),
            link: `/manoskelbimai/${auth.userId}`,
            icon: FaListAlt,
            },
            {
            name: t("sideBar.addPost"),
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
            name: t("sideBar.changePassword"),
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
                            auth.roles === "ADMIN" ? 
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