import constants from "../utils/constants";
import Home from "../pages/home";
import Login from "../pages/login";
import Logout from "../pages/logout";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/notfound";
import InternalServerError from "../pages/internalservererror";
import RouteGuard from "../RouteGuard";
import Vehicle from "../pages/vehicle";
import AddVehicle from "../pages/addvehicle";


export const routes = [
    {
        path: constants.routes.home,
        name: "HOME",
        exact: true,
        component: Home
    },
    {
        path: constants.routes.login,
        name: "LOGIN",
        exact: true,
        component: Login
    }, 
    {
        path: constants.routes.dashboard,
        name: "DASHBOARD",
        exact: true,
        component: Dashboard
    }, 
    {
        path: constants.routes.vehicle,
        name: "VEHICLE",
        exact: true,
        component: Vehicle
    }, 
    {
        path: constants.routes.addvehicle,
        name: "ADDVEHICLE",
        exact: true,
        component: AddVehicle
    }, 
    {
        path: constants.routes.logout,
        name: "LOGOUT",
        exact: true,
        component: RouteGuard(Logout)
    },
    {
      path: "*",
      name: "NOT_FOUND",
      component: NotFound
    },
    {
        path: "*",
        name: "INTERNAL_SERVER_ERROR",
        component: InternalServerError
    }
];