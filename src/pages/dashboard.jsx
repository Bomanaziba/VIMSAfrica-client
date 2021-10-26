
import React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/layout"
import constants from "../utils/constants";


function Dashboard (props){

    return (
        <Layout Title = { constants.modules.dashboard } LoadPage = { true } >
                <div className="row" id="dragdrop">
                    <div className="col-md-4 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-two">
                                    <div className="media">
                                        <div className="media-body">
                                            <h2 className="mt-0 mb-1 text-info">2,02,150</h2><span className="">Total Orders</span>
                                        </div>
                                        <img className="ml-3" src="../../images/icons/1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-two">
                                    <div className="media">
                                        <div className="media-body">
                                            <h2 className="mt-0 mb-1 text-danger">2,02,150</h2><span className="">Total Orders</span>
                                        </div>
                                        <img className="ml-3" src="../../images/icons/2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-two">
                                    <div className="media">
                                        <div className="media-body">
                                            <h2 className="mt-0 mb-1 text-warning">2,02,150</h2><span className="">Total Orders</span>
                                        </div>
                                        <img className="ml-3" src="../../images/icons/3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-xxl-7 col-lg-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title m-t-10">Orders Monthly</h4>
                                <div className="table-action float-right">
                                    <form action="#">
                                        <div className="form-row">
                                            <div className="form-group m-b-0">
                                                <select className="selectpicker show-tick" data-width="auto">
                                                    <option selected="selected">Last 30 Days</option>
                                                    <option>Last 1 Month</option>
                                                    <option>Last 6 Month</option>
                                                    <option>Last Year</option>
                                                </select>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="card-body">
                                <canvas id="monthly-orders-chart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-xxl-5 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Most Selling Items</h4>
                            </div>
                            <div className="card-body">
                                <canvas id="most-selling-items"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header pb-0">
                                <h4 className="card-title">Worldwide Customers</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-5 col-xl-6">
                                        <div id="world-map-restaurant"></div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="map-coruntry-list">
                                            <h4 className="mb-5">Country List</h4>
                                            <ul>
                                                <li><a href="javascript:void()"><i className="fa fa-circle-o text-success"></i> Canada <span>55%</span></a>
                                                </li>
                                                <li><a href="javascript:void()"><i className="fa fa-circle-o text-warning"></i> Brasil <span>60%</span></a>
                                                </li>
                                                <li><a href="javascript:void()"><i className="fa fa-circle-o text-info"></i> Russia <span>18%</span></a>
                                                </li>
                                                <li><a href="javascript:void()"><i className="fa fa-circle-o text-secondary"></i> Egypt <span>20%</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3">
                                        <div className="restaurant-country-data">
                                            <div id="australia"></div>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-12 col-sm-4">
                                                    <p>Percentage</p>
                                                    <h3>65%</h3>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-sm-4">
                                                    <p>Customers</p>
                                                    <h3>12,500</h3>
                                                </div>
                                                <div className="col-lg-12 col-sm-4">
                                                    <p>Profit</p>
                                                    <h3>25.20%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    
                        <div className="col-lg-9">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-sm-3 mb-sm-0">
                                            <div className="stat-widget-three py-2">
                                                <div className="media">
                                                    <img className="mr-4 mt-3" src="../../images/icons/4.png" alt="" />
                                                    <div className="media-body">
                                                        <h2 className="mt-0 mb-1 text-info">62,150</h2>
                                                        <span className="text-pale-sky ">Total Orders</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 mb-sm-0">
                                            <div className="stat-widget-three py-2">
                                                <div className="media">
                                                    <img className="mr-4 mt-3" src="../../images/icons/5.png" alt="" />
                                                    <div className="media-body">
                                                        <h2 className="mt-0 mb-1 text-success">9,750</h2>
                                                        <span className="text-pale-sky ">Total Delivery</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="stat-widget-three py-2">
                                                <div className="media">
                                                    <img className="mr-4 mt-3" src="../../images/icons/6.png" alt="" />
                                                    <div className="media-body">
                                                        <h2 className="mt-0 mb-1 text-danger">4,250</h2>
                                                        <span className="text-pale-sky ">Pending Orders</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="stat-widget-three py-2">
                                                <div className="media">
                                                    <img className="mr-4 mt-3" src="../../images/icons/7.png" alt="" />
                                                    <div className="media-body">
                                                        <h2 className="mt-0 mb-1 text-warning">4,250</h2>
                                                        <span className="text-pale-sky ">Orders Hold</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="stat-widget-three py-2">
                                        <div className="media">
                                            <img className="mr-4" src="../../images/icons/8.png" alt="" />
                                            <div className="media-body">
                                                <div className="rating d-flex align-items-center">
                                                    <span className="m-0">
                                                        <span className="text-warning"><i className="fa fa-star"></i></span>
                                                        <span className="text-warning"><i className="fa fa-star"></i></span>
                                                        <span className="text-warning"><i className="fa fa-star"></i></span>
                                                        <span className="text-warning"><i className="fa fa-star"></i></span>
                                                        <span className=""><i className="fa fa-star"></i></span>
                                                    </span>
                                                    <h2 className="mt-0 mb-0 ml-3 text-warning">4.0</h2>
                                                </div>
                                                <span className="text-pale-sky ">Customer Satisfaction</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card transparent-card">
                            <div className="card-header pb-0">
                                <h4 className="card-title mt-2"> Recent Orders List</h4>
                                <div className="table-action float-sm-right mt-4 mt-sm-0">
                                    <form action="#">
                                        <div className="form-row">
                                            <div className="form-group mr-3">
                                                <select className="selectpicker show-tick" data-width="auto">
                                                    <option selected="selected">Russia</option>
                                                    <option>USA</option>
                                                    <option>Canada</option>
                                                    <option>Australia</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="selectpicker show-tick" data-width="auto">
                                                    <option selected="selected">Last 30 Days</option>
                                                    <option>Last 1 MOnth</option>
                                                    <option>Last 6 MOnth</option>
                                                    <option>Last Year</option>
                                                </select>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-padded recent-order-list-table table-responsive-fix-big">
                                        <thead>
                                            <tr>
                                                <th>#No</th>
                                                <th>Customer Name</th>
                                                <th>Delivery Date & Time</th>
                                                <th>Location</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td><a href="javascript:void()" className="mr-2 bg-primary rounded-circle text-center text-uppercase d-inline-block">SM</a> <span className="text-pale-sky">Valentino Morose</span>
                                                </td>
                                                <td className="text-muted">04 May 2018, 10:30 AM</td>
                                                <td><a href="javascript:void()" className="text-primary">Moscow</a></td>
                                                <td><span className="text-pale-sky">$ 25.000</span></td>
                                                <td><span className="label label-xl label-rounded label-warning">Hold</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td><a href="javascript:void()" className="mr-2 bg-lgreen rounded-circle text-center text-uppercase d-inline-block">RM</a> <span className="text-pale-sky">Adib</span>
                                                </td>
                                                <td className="text-muted">04 May 2018, 10:30 AM</td>
                                                <td><a href="javascript:void()" className="text-primary">Samara</a></td>
                                                <td><span className="text-pale-sky">$ 35.000</span></td>
                                                <td><span className="label label-xl label-rounded label-success">Delivered</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03</td>
                                                <td><a href="javascript:void()" className="mr-2 bg-dpink rounded-circle text-center text-uppercase d-inline-block">SE</a> <span className="text-pale-sky">Adam Razu</span>
                                                </td>
                                                <td className="text-muted">04 May 2018, 10:30 AM</td>
                                                <td><a href="javascript:void()" className="text-primary">Suzdal</a></td>
                                                <td><span className="text-pale-sky">$ 29.000</span></td>
                                                <td><span className="label label-xl label-rounded label-danger">Cancel</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>04</td>
                                                <td><a href="javascript:void()" className="mr-2 bg-success rounded-circle text-center text-uppercase d-inline-block">FM</a> <span className="text-pale-sky">David Aziz</span>
                                                </td>
                                                <td className="text-muted">04 May 2018, 10:30 AM</td>
                                                <td><a href="javascript:void()" className="text-primary">Hrasnoyarsk</a></td>
                                                <td><span className="text-pale-sky">$ 38.000</span></td>
                                                <td><span className="label label-xl label-rounded label-success">Delivered</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>05</td>
                                                <td><a href="javascript:void()" className="mr-2 bg-info rounded-circle text-center text-uppercase d-inline-block">FK</a> <span className="text-pale-sky">David Morose</span>
                                                </td>
                                                <td className="text-muted">04 May 2018, 10:30 AM</td>
                                                <td><a href="javascript:void()" className="text-primary">Samara</a></td>
                                                <td><span className="text-pale-sky">$ 75.000</span></td>
                                                <td><span className="label label-xl label-rounded label-warning">Hold</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>06</td>
                                                <td><a href="javascript:void()" className="mr-2 bg-warning rounded-circle text-center text-uppercase d-inline-block">MS</a> <span className="text-pale-sky">Lionel Morose</span>
                                                </td>
                                                <td className="text-muted">04 May 2018, 10:30 AM</td>
                                                <td><a href="javascript:void()" className="text-primary">Suzdal</a></td>
                                                <td><span className="text-pale-sky">$ 225.000</span></td>
                                                <td><span className="label label-xl label-rounded label-warning">Hold</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>07</td>
                                                <td><a href="javascript:void()" className="mr-2 bg-primary rounded-circle text-center text-uppercase d-inline-block">GM</a> <span className="text-pale-sky">Cristiano Morose</span>
                                                </td>
                                                <td className="text-muted">04 May 2018, 10:30 AM</td>
                                                <td><a href="javascript:void()" className="text-primary">Moscow</a></td>
                                                <td><span className="text-pale-sky">$ 25. 000</span></td>
                                                <td><span className="label label-xl label-rounded label-danger">Cancel</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <nav>
                                    <ul className="pagination pagination-rounded pagination-md justify-content-end">
                                        <li className="page-item"><a className="page-link" href="javascript:void()">1</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void()">2</a></li>
                                        <li className="page-item active"><a className="page-link" href="javascript:void()">3</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void()">4</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void()">5</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

        </Layout>
    );
};

export default Dashboard;