import axios from "axios";

export const login = async ({ username, password}) => {

    try{
        const { data } = await axios.post("/account/login", { username, password});
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }

};

export const register = async ({ username, password}) => {

    try{
        const { data } = await axios.post("/register", { username, password});
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }

};



