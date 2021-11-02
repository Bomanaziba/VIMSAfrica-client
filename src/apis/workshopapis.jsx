import axios from "axios";


export const getWorkshop = async ({ 
    workShopId
}) => {

    try{
        const { data } = await axios.get(`workshop/get?workShopId=${workShopId}`);
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }

};

export const addWorkshop = async ({ 
    
}) => {

    try{
        const { data } = await axios.post("workshop/add", { 
           
        });
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }

};



