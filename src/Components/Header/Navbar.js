import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                  <Link to="/" className="navbar-logo">
                      HARIVIDEO
                  </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;