
import React from "react";
import constants from "../../utils/constants";

const HeaderNav = (props) => {
    return (
        <div className="nav-header">
            <div className="brand-logo">
                <a href="index.html">
                    <b>
                        <img src="../../images/logo.png" alt="" /> 
                    </b>
                    <span className="brand-title">
                        <img src="../../images/logo-text.png" alt="" />
                    </span>
                </a>
            </div>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span>  
                    <span className="line"></span>  
                    <span className="line"></span>
                </div>
            </div>
        </div>
    );
};

export default HeaderNav;