
import React from "react";
import constants from "../utils/constants";

const NotFound = () => {



    return (

        <div>
            <p>You seems lost. <a href={constants.routes.dashboard}>Please go back home</a></p>
        </div>
    );

};

export default NotFound;