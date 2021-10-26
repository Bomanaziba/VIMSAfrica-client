
import React from "react";
import constants from "../../utils/constants";

const Preloader = (props) => {


    const rendered = (!props.Loader) ? (<div id="preloader">
        <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
            </svg>
        </div>
    </div>) : <></>;


    return (
         rendered 
    );

};

export default Preloader;