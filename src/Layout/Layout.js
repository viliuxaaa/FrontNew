import React, { useEffect } from 'react'
import NavBar from "./Navbar/NavBar"
import Footer from "./Footer/Footer"

function Layout({children}) {
    useEffect(() =>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div className="text-white bg-gradient-to-b from-darkAccent from-2% via-accent via-5% to-background to-70%">
                <NavBar/>
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
