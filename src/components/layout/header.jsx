
import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const Header = (props) => {


    return (
        <div className="header">
            <div className="header-content">
                <div className="header-left">
                    <ul>
                        <li className="icons position-relative">
                            <a href="javascript:void(0)">
                                <i className="icon-magnifier f-s-16"></i>
                            </a>
                            <div className="drop-down animated bounceInDown">
                                <div className="dropdown-content-body">
                                    <div className="header-search" id="header-search">
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="icon-magnifier"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <ul>
                        <li className="icons">
                            <a href="javascript:void(0)">
                                <i className="mdi mdi-comment"></i>
                                <div className="pulse-css"></div>
                            </a>
                            <div className="drop-down animated bounceInDown">
                                <div className="dropdown-content-heading">
                                    <span className="pull-left">Messages</span>
                                    <a href="javascript:void()" className="pull-right text-white">View All</a>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li className="notification-unread">
                                            <a href="javascript:void()">
                                                <img className="pull-left mr-3 avatar-img" src="../../images/avatar/1.jpg" alt="" />
                                                <div className="notification-content">
                                                    <div className="notification-heading">Druid Wensleydale</div>
                                                    <div className="notification-text">A wonderful serenit has take possession</div><small className="notification-timestamp">08 Hours ago</small>
                                                </div>
                                            </a><span className="notify-close"><i className="ti-close"></i></span>
                                        </li>
                                        <li className="notification-unread">
                                            <a href="javascript:void()">
                                                <img className="pull-left mr-3 avatar-img" src="../../images/avatar/2.jpg" alt="" />
                                                <div className="notification-content">
                                                    <div className="notification-heading">Fig Nelson</div>
                                                    <div className="notification-text">A wonderful serenit has take possession</div><small className="notification-timestamp">08 Hours ago</small>
                                                </div>
                                            </a><span className="notify-close"><i className="ti-close"></i></span>
                                        </li>
                                        <li>
                                            <a href="javascript:void()">
                                                <img className="pull-left mr-3 avatar-img" src="../../images/avatar/3.jpg" alt="" />
                                                <div className="notification-content">
                                                    <div className="notification-heading">Bailey Wonger</div>
                                                    <div className="notification-text">A wonderful serenit has take possession</div><small className="notification-timestamp">08 Hours ago</small>
                                                </div>
                                            </a><span className="notify-close"><i className="ti-close"></i></span>
                                        </li>
                                        <li>
                                            <a href="javascript:void()">
                                                <img className="pull-left mr-3 avatar-img" src="../../images/avatar/4.jpg" alt="" />
                                                <div className="notification-content">
                                                    <div className="notification-heading">Bodrum Salvador</div>
                                                    <div className="notification-text">A wonderful serenit has take possession</div><small className="notification-timestamp">08 Hours ago</small>
                                                </div>
                                            </a><span className="notify-close"><i className="ti-close"></i></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="icons">
                            <a href="javascript:void(0)">
                                <i className="mdi mdi-bell"></i>
                                <div className="pulse-css"></div>
                            </a>
                            <div className="drop-down animated bounceInDown dropdown-notfication">
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li>
                                            <a href="javascript:void()">
                                                <span className="mr-3 avatar-icon bg-success-lighten-2"><i className="fa fa-check"></i></span>
                                                <div className="notification-content">
                                                    <div className="notification-heading">Druid Wensleydale</div>
                                                    <span className="notification-text">A wonderful serenit of my entire soul.</span>
                                                    <small className="notification-timestamp">20 May 2018, 15:32</small>
                                                </div>
                                            </a>
                                            <span className="notify-close"><i className="ti-close"></i>
                                            </span>
                                        </li>
                                        <li><a href="javascript:void()"><span className="mr-3 avatar-icon bg-danger-lighten-2"><i className="fa fa-close"></i></span><div className="notification-content"><div className="notification-heading">Inverness McKenzie</div><span className="notification-text">A wonderful serenit of my entire soul.</span> <small className="notification-timestamp">20 May 2018, 15:32</small></div></a>
                                            <span className="notify-close"><i className="ti-close"></i>
                                            </span>
                                        </li>
                                        <li><a href="javascript:void()"><span className="mr-3 avatar-icon bg-success-lighten-2"><i className="fa fa-check"></i></span><div className="notification-content"><div className="notification-heading">McKenzie Inverness</div><span className="notification-text">A wonderful serenit of my entire soul.</span> <small className="notification-timestamp">20 May 2018, 15:32</small></div></a>
                                            <span className="notify-close"><i className="ti-close"></i>
                                            </span>
                                        </li>
                                        <li><a href="javascript:void()"><span className="mr-3 avatar-icon bg-danger-lighten-2"><i className="fa fa-close"></i></span><div className="notification-content"><div className="notification-heading">Inverness McKenzie</div><span className="notification-text">A wonderful serenit of my entire soul.</span> <small className="notification-timestamp">20 May 2018, 15:32</small></div></a>
                                            <span className="notify-close"><i className="ti-close"></i>
                                            </span>
                                        </li>
                                        <li className="text-left"><a href="javascript:void()" className="more-link">Show All Notifications</a>  <span className="pull-right"><i className="fa fa-angle-right"></i></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="icons">
                            <a href="javascript:void(0)" className="log-user">
                                <img src="../../images/avatar/1.jpg" alt="" /> <span>{props.FullName}</span>  <i className="fa fa-caret-down f-s-14" aria-hidden="true"></i>
                            </a>
                            <div className="drop-down dropdown-profile animated bounceInDown">
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li><a href="javascript:void()"><i className="icon-user"></i> <span>My Profile</span></a>
                                        </li>
                                        <li><a href="javascript:void()"><i className="icon-wallet"></i> <span>My Wallet</span></a>
                                        </li>
                                        <li><a href="javascript:void()"><i className="icon-envelope"></i> <span>Inbox</span></a>
                                        </li>
                                        <li><a href="javascript:void()"><i className="fa fa-cog"></i> <span>Setting</span></a>
                                        </li>
                                        <li><a href="javascript:void()"><i className="icon-lock"></i> <span>Lock Screen</span></a>
                                        </li>
                                        <li><a href="javascript:void()"><i className="icon-power"></i> <span>Logout</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;