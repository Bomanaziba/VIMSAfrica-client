
import React from "react";
import constants from "../../utils/constants"

const LeftSideBar = (props) => {

    return (

        <div className="nk-sidebar">
            <div className="nk-nav-scroll active">
                <ul className="metismenu in" id="menu">
                    <li className="nav-label">Dashboard</li>
                    <li className="mega-menu mega-menu-lg">
                        <a className="has-arrow" href={constants.routes.dashboard} aria-expanded="false">
                            <i className="mdi mdi-view-dashboard"></i><span className="nav-text">Dashboard</span>
                        </a>
                    </li>
                   
                    <li className="nav-label">Visits</li>
                    <li><a className="has-arrow" href="#" aria-expanded="false"><i className="mdi mdi-email-outline"></i> <span className="nav-text">Start</span></a>
                        
                    </li>
                    <li><a className="has-arrow" href="#" aria-expanded="false"><i className="mdi mdi-application"></i><span className="nav-text">All</span></a>
                        
                    </li>
                    <li className="nav-label">Vehicles</li>
                    <li className="mega-menu mega-menu-md"><a className="has-arrow" href={constants.routes.addvehicle} aria-expanded="false"><i className="mdi mdi-television-guide"></i><span className="nav-text">Add</span></a>
                        
                    </li>
                    <li className="mega-menu mega-menu-xl"><a className="has-arrow" href={constants.routes.vehicle} aria-expanded="false"><i className="mdi mdi-collage"></i><span className="nav-text">All</span></a>
                        
                    </li>
                    <li className="nav-label">Technicians</li>
                    <li className="mega-menu mega-menu-lg"><a className="has-arrow" href="#" aria-expanded="false"><i className="mdi mdi-gradient"></i><span className="nav-text">All</span> </a>
                        
                    </li>
                    <li className="nav-label">Settings</li>
                    <li><a className="has-arrow" href="#" aria-expanded="false"><i className="mdi mdi-table"></i><span className="nav-text">Brand and Model</span> </a>
                        
                    </li>
                    
                </ul>
            </div>
        </div>

    );

};

export default LeftSideBar;