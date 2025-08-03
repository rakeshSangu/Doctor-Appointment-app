import { useState } from "react";
import { useNavigate,useLocation  } from 'react-router-dom';
import "./style.css"

import { IoMenu } from "react-icons/io5";

import { Link } from "react-router-dom";

const Header = () => {
    const [showMenu,setshowMenu] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const path = location.pathname
    

    const goHome = () => {
        navigate("/")
    }
    
    return (
        <>
            <header className="mobile-header">
                <button onClick={goHome}>
                    <img className="header-mobile-logo" alt="NirogCare" src="https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-doctor-appointment-icon-with-stethoscope-png-image_2007502.jpg" />
                </button>
                <p className="page-title">
                    NirogCare
                </p>
                <button onClick={() => setshowMenu(!showMenu)} className="menu-button">
                    <IoMenu className="menu-icon" />
                    <div className={`mobile-menu-list-container ${showMenu ? "showmenu" : ""}`}>
                        <Link to="/" className={`mobile-nav-links ${path==="/" ? "active-link" : ""}`}>Home</Link>
                        <Link to="/about-us" className={`mobile-nav-links ${path==="/about-us" ? "active-link" : ""}`}>About</Link>
                        <Link to="/contact-us" className={`mobile-nav-links ${path==="/contact-us" ? "active-link" : ""}`}>Contact us</Link>
                        <Link to="/your-appointments" className={`mobile-nav-links ${path==="/your-appointments" ? "active-link" : ""}`}>Your Appointments</Link>
                    </div>
                </button>
            </header>
            <header className="large-header">
                <Link to="/">
                    <div className="large-logo-container">
                        <img className="header-mobile-logo" alt="NirogCare" src="https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-doctor-appointment-icon-with-stethoscope-png-image_2007502.jpg" />
                        <p className="page-title">
                            NirogCare
                        </p>
                    </div>
                </Link>
                <nav className="large-nav-bar">
                    <Link to="/" className={`large-nav-link ${path==="/" ? "active-link" : ""}`}>Home</Link>
                    <Link to="/about-us" className={`large-nav-link ${path==="/about-us" ? "active-link" : ""}`}>About us</Link>
                    <Link to="/contact-us"  className={`large-nav-link ${path==="/contact-us" ? "active-link" : ""}`}>Contact us</Link>
                </nav>
                <Link to="/your-appointments" className={`large-nav-link ${path==="/your-appointments" ? "active-link" : ""}`}>Your Appointments</Link>
            </header>
        </>
        
    )
}

export default Header
