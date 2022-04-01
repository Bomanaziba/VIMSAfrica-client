

import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../apis/authapis";
import constants from "../utils/constants";
import { useAuth } from "../utils/store/authStore";
import { Link, Redirect, useRouter, useRouterActions } from "react-resource-router";
import utils from "../utils/store/state";
import { Button } from "primereact/button";
import Preloader from "../components/layout/preloader";
import { Toast } from "primereact/toast";

const Login = () => {

    const [routerState] = useRouter();
    const { register, errors, handleSubmit, control } = useForm();
    const [{ isAuthenticated }, { onLoginSuccess }] = useAuth();
    const { push } = useRouterActions();
    const [loading, setLoading] = React.useState(true);
    const [toast, setToast] = React.useState(null);

    React.useEffect(() => {
        if (routerState.location.state)
            toast.show(utils.toastCallback({ severity: "success", detail: routerState.location.state }));
    }, [routerState, toast]);

    const onSubmit = async data => {

        setLoading(false);

        const { username, password } = data;

        console.log(username + " " + password)

        try {
            const {
                id, firstName, lastName, role, email, accessToken
            } = await login({ username, password });
            // store user details in global state
            console.log("Successful login");
            onLoginSuccess({ id, accessToken, email, firstName, lastName, role });
            push(constants.routes.dashboard);
            setLoading(true);
            document.getElementsByTagName('html')[0].removeAttribute('id', 'login-page2');
        } catch (error) {
            setLoading(true);
            if (error.response) {
                const {
                    data: { responseDescription }
                } = error.response;
                // display all errors as toast notification
                    toast.show(
                        utils.toastCallback({ severity: "error", summary: "Login Error", detail: responseDescription })
                    )
            } else {
                // network errors
                toast.show(
                    utils.toastCallback({
                        severity: "error",
                        summary: "Network Error",
                        detail: constants.networkErrorMessage
                    })
                );
            }
        }
    };

    if (isAuthenticated) {
        const path = sessionStorage.getItem("path") || constants.routes.dashboard;
        sessionStorage.removeItem("path");
        document.getElementsByTagName('html')[0].removeAttribute('id', 'login-page2');
        return <Redirect to={path} />;
    }

    
    document.getElementsByTagName('html')[0].setAttribute('id', 'login-page2');//.setAttribute("id", "login-page2");
    

    return (

        <div className="h-100">

            <Preloader Loader = { loading }/>

            <div className="login-bg2 h-100">
                <div className="container-fluid h-100">
                    <div className="row justify-content-between h-100">
                        <div className="col-xl-4">
                            <div className="login-info">
                                <h2>Manage Your Order</h2>
                                <p className="mb-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth.</p>
                                <h5>Ph: +880 123 1234</h5>
                                <h5>Email: hello@example.com</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 p-0">
                            <div className="form-input-content login-form bg-white">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="logo text-center">
                                            <a href="#">
                                                <img src="/src/utils/images/f-logo.png" alt="" />
                                            </a>
                                        </div>
                                        <h4 className="text-center mt-4">Log into Your Account</h4>
                                        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 mb-5">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input {...register('username')}  type="text" className="form-control" name="username" placeholder="Username" />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input {...register('password')} type="password" className="form-control" name="password"  placeholder="Password" />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <div className="form-check p-l-0">
                                                        <input className="form-check-input" type="checkbox" id="basic_checkbox_1" />
                                                        <label className ="form-check-label ml-3" for="basic_checkbox_1">Check me out</label>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-6 text-right"><a href="#">Forgot Password?</a>
                                                </div>
                                            </div>
                                            <div className="text-center mb-4 mt-4">
                                                <button href="#" type="submit" className="btn btn-primary">Sign in</button>
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <h5 className="mb-5">Or with Login</h5>
                                            <ul className="list-inline">
                                                <li className="list-inline-item m-t-10"><a href="#" className="btn btn-facebook"><i className="fa fa-facebook"></i></a>
                                                </li>
                                                <li className="list-inline-item m-t-10"><a href="#" className="btn btn-twitter"><i className="fa fa-twitter"></i></a>
                                                </li>
                                                <li className="list-inline-item m-t-10"><a href="#" className="btn btn-linkedin"><i className="fa fa-linkedin"></i></a>
                                                </li>
                                                <li className="list-inline-item m-t-10"><a href="#" className="btn btn-google-plus"><i className="fa fa-google-plus"></i></a>
                                                </li>
                                            </ul>
                                            <p className="mt-5">Dont have an account? <a href="#">Register Now</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toast ref={el => setToast(el)} />
        </div>

    );
};

export default Login;