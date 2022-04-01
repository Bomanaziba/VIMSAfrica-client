
import React, { useState } from "react";

import BreadCrumb from "./breadcrumb";
import Footer from "./footer";
import Preloader from "./preloader";
import Header from "./header";
import HeaderNav from "./headernav";
import LeftSideBar from "./leftsidebar";

import { useAuth } from "../../utils/store/authStore";


const Index = (props) => {

    const [{ Id, firstName, lastName }] = useAuth();

    const showPage = (props.LoadPage)?"show":""; 
  
    return (
        <>
            <Preloader Loader = { props.LoadPage }/>

            <HeaderNav />
            <Header FullName = { firstName + " " + lastName } />
            <LeftSideBar />

            <div id="main-wrapper" className={showPage}>
                
                <div className="content-body" >
                    <div className="container-fluid">
                        <BreadCrumb Title = { props.Title } />
                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Index;