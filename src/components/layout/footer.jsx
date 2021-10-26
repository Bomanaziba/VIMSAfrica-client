
import React from "react";
import constants from "../../utils/constants";

const Footer = (props) => {



    return (

        <div className="footer">
            <div className="copyright">
                <p>Copyright &copy; Designed by <a href="https://themeforest.net/user/digitalheaps">Digitalheaps</a>, Developed by <a href="https://themeforest.net/user/quixlab">Quixlab</a> {new Date().getFullYear()}</p>
            </div>
        </div>
    );

};

export default Footer;