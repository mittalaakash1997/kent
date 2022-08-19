import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';
import user from '../images/avatar-1.jpg';
function Header() {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  return (
    <>
      <header className="navbar pcoded-header navbar-expand-lg navbar-light">
        <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="#!"><span></span></a>
            <NavLink to={"/"} className="b-brand">
                   <div className="b-bg">
                       <i className="feather icon-trending-up"></i>
                   </div>
                   <span className="b-title">Kent</span>
               </NavLink>
        </div>
        <a className="mobile-menu" id="mobile-header" href="#!">
            <i className="feather icon-more-horizontal"></i>
        </a>
        <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav ml-auto">
                
                <li>
                    <div className={`dropdown drp-user ${isOpen ? "show" : ""}`}>
                        <span className="dropdown-toggle" data-toggle="dropdown" onClick={toggle}>
                            <i className="icon feather icon-settings"></i>
                        </span>
                        <div className={`dropdown-menu dropdown-menu-right profile-notification ${isOpen ? "show" : ""}`}>
                            <div className="pro-head">
                                <img src={user} className="img-radius" alt="User-Profile"/>
                                <span>John Doe</span>
                                <NavLink to={"/"} className="dud-logout" title="Logout">
                                    <i className="feather icon-log-out"></i>
                                </NavLink>
                            </div>
                            <ul className="pro-body">
                                <li><NavLink to={"/profile"} className="dropdown-item"><i className="feather icon-user"></i> Profile</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Header
