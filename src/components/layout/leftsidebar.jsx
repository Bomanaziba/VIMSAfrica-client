
import React from "react";

const LeftSideBar = (props) => {


    console.log(props.collapseOption);

    return (

        <div className="nk-sidebar">
            <div className="nk-nav-scroll active">
                <ul className="metismenu in" id="menu">
                    <li className="nav-label">Dashboard</li>
                    <li className="mega-menu mega-menu-lg">
                        <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i className="mdi mdi-view-dashboard"></i><span className="nav-text">Dashboard</span><span className="badge bg-dpink text-white nav-badge">21</span>
                        </a>
                    </li>
                   
                    <li className="nav-label">Visits</li>
                    <li><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-email-outline"></i> <span className="nav-text">Email</span><span className="badge bg-lgreen text-white nav-badge">০3</span></a>
                        
                    </li>
                    <li><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-application"></i><span className="nav-text">Apps</span> <span className="badge badge-info nav-badge">05</span></a>
                        
                    </li>
                    <li><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-ticket"></i><span className="nav-text">Ticket</span> <span className="badge bg-lgreen text-white nav-badge">02</span></a>
                        
                    </li>
                    <li className="mega-menu mega-menu-lg"><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-chart-bar"></i> <span className="nav-text">Charts</span> <span className="badge badge-primary nav-badge">19</span></a>
                        
                    </li>
                    <li className="nav-label">Vehicles</li>
                    <li className="mega-menu mega-menu-md"><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-television-guide"></i><span className="nav-text">UI </span> <span className="badge badge-danger nav-badge">19</span></a>
                        
                    </li>
                    <li className="mega-menu mega-menu-xl"><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-collage"></i><span className="nav-text">Components</span> <span className="badge bg-lgreen text-white nav-badge">39</span></a>
                        
                    </li>
                    <li><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-widgets"></i><span className="nav-text">Widget</span> <span className="badge bg-dpink text-white nav-badge">03</span></a>
                        
                    </li>
                    <li className="nav-label">Technicians</li>
                    <li className="mega-menu mega-menu-lg"><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-gradient"></i><span className="nav-text">Forms</span> <span className="badge badge-info nav-badge">28</span></a>
                        
                    </li>
                    <li className="nav-label">Settings</li>
                    <li><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-table"></i><span className="nav-text">Table</span> <span className="badge badge-primary nav-badge">13</span></a>
                        
                    </li>
                    <li className="nav-label">Extra</li>
                    <li><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-message-draw"></i><span className="nav-text">Invoice</span><span className="badge badge-success nav-badge">03</span></a>
                        
                    </li>
                    <li><a className="has-arrow" href="javascript:void()" aria-expanded="false"><i className="mdi mdi-book-open-page-variant"></i><span className="nav-text">Pages</span> <span className="badge badge-info nav-badge">28</span></a>
                    </li>
                </ul>
            </div>
        </div>

    );

};

export default LeftSideBar;