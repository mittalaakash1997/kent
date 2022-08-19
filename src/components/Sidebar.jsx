import React, { useState } from 'react';
import { FaTh, FaUserAlt, FaMapMarkedAlt, FaHouseUser, FaTint } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Header from './Header';
function Sidebar({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/users",
            name: "Users",
            icon: <FaUserAlt />
        },
        {
            path: "/customers",
            name: "Customers",
            icon: <FaHouseUser />
        },
        {
            path: "/ro-models",
            name: "Ro Models",
            icon: <FaTint />
        },
        {
            path: "/map-marker",
            name: "Map Marker",
            icon: <FaMapMarkedAlt />
        }
    ]

    return (
        <>

            {/* sidebar start */}
            <nav className={`pcoded-navbar ${isOpen ? "navbar-collapsed" : ""}`}>
                <div className="navbar-wrapper">
                    <div className="navbar-brand header-logo">
                        <NavLink to="/" className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-trending-up"></i>
                            </div>
                            <span className="b-title">Kent</span>
                        </NavLink>
                        <span className={`mobile-menu ${isOpen ? "on" : ""}`} id="mobile-collapse" onClick={toggle}><span></span></span>
                    </div>
                    <div className="navbar-content scroll-div">
                        <ul className="nav pcoded-inner-navbar">
                            {
                                menuItem.map((item, index) => (
                                    <li key={index} data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className={`nav-item`}>
                                        <NavLink to={item.path} className="nav-link" activeclassname="active">
                                            <span className="pcoded-micon">{item.icon}</span>
                                            <span className="pcoded-mtext">{item.name}</span>
                                        </NavLink>
                                    </li>

                                ))
                            }

                        </ul>
                    </div>
                </div>
            </nav>
            {/* sidebar end */}

            {/* header start */}
            <Header />
            {/* header end */}
            {/* content area start */}
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            {/* content area end */}

        </>
    )
}

export default Sidebar
