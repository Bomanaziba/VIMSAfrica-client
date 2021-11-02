import axios from "axios";


export const vehicle = async ({ 
    index,  
    size, 
    searchParams
}) => {

    try{
        const { data } = await axios.get(`vehicle/get?index=${index}&size=${size}&searchParams=${searchParams}`);
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }

};

export const addvehicle = async ({ 
    registrationNumber, 
    vehicleBrandId, 
    vehicleModelId, 
    modelYearId, 
    vin, 
    vehicleLicenseExpiry, 
    motExpiry, 
    insuranceExpiry, 
    vehicleOwnerName, 
    mileage
}) => {

    try{
        const { data } = await axios.post("vehicle/add", { 
            registrationNumber, 
            vehicleBrandId, 
            vehicleModelId, 
            modelYearId, 
            vin, 
            vehicleLicenseExpiry, 
            motExpiry, 
            insuranceExpiry, 
            vehicleOwnerName, 
            mileage
        });
        return data;
    } catch (error) {
        console.log(error);
        throw (error);
    }

};



