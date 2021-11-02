import axios from "axios";


export const brand = async () => {
    try{
        const { data } = await axios.get("dropdown/brand");
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }
};

export const model = async ({ brandId }) => {
    try{
        const { data } = await axios.get(`dropdown/model?brandId=${brandId}`);
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }
};

export const year = async () => {
    try{
        const { data } = await axios.get("dropdown/year");
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }
};



