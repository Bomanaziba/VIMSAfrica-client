
import React from "react";
import constants from "../../utils/constants";

const BreadCrumb = (props) => {



    return (

        <div className="row page-titles">
            <div className="col p-md-0">
                <h4>VIMSAfrica</h4>
            </div>
            <div className="col p-md-0">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">{props.Title}</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="">VIMSAfrica</a>
                    </li>
                </ol>
            </div>
        </div>
    );

};

export default BreadCrumb;