import React from "react";
import Layout from '../components/layout';
import { Toast } from "primereact/toast";
import constants from "../utils/constants";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { addvehicle } from "../apis/vehicleapis"
import { brand, model, year } from "../apis/dropdownapis"
import utils from "../utils";
import { useForm, Controller } from "react-hook-form";
import { flushSync } from "react-dom";

function AddVehicle() {

    const title = constants.modules.addvehicle

    const [regNo, setRegistrationNumber] = React.useState('');
    const [vehBId, setVehicleBrandId] = React.useState(0);
    const [vehMId, setVehicleModelId] = React.useState(0);
    const [modYId, setModelYearId] = React.useState(0);
    const [vn, setVin] = React.useState('');
    const [vehLicExp, setVehicleLicenseExpiry] = React.useState('');
    const [motExp, setMotExpiry] = React.useState('');
    const [insuranceExp, setInsuranceExpiry] = React.useState('');
    const [vehOwnerName, setVehicleOwnerName] = React.useState('');
    const [mil, setMileage] = React.useState('');
    
    
    const { handleSubmit } = useForm();
    const [toast, setToast] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [brandDD, setbrandDD] = React.useState([]);
    const [modelDD, setmodelDD] = React.useState([]);
    const [yearDD, setYearDD] = React.useState([]);

    function handleChangeRegistrationNumber(e) {
		setRegistrationNumber(e.target.value);
	  }
	
	function handleChangeVehicleModelId(e) {
		setVehicleModelId(e.target.value);
	  }
    
    function handleChangeModelYearId(e) {
		setModelYearId(e.target.value);
	  }

    function handleChangeVin(e) {
		setVin(e.target.value);
	  }

    function handleChangeVehicleLicenseExpiry(e) {
		setVehicleLicenseExpiry(e.target.value);
	  }

    function handleChangeMotExpiry(e) {
		setMotExpiry(e.target.value);
	  }
	
	function handleChangeInsuranceExpiry(e) {
		setInsuranceExpiry(e.target.value);
	  }
    
    function handleChangeVehicleOwnerName(e) {
		setVehicleOwnerName(e.target.value);
	  }

    function handleChangeMileage(e) {
		setMileage(e.target.value);
	  }
    


    React.useEffect(async () => {
        try {
            const dataB = await brand();
            setbrandDD(dataB);

            const dataY = await year();
            setYearDD(dataY);
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    const brandDropDown = brandDD.map(p => (
        <option value={p.id}>
            {p.name}
        </option>
    ));

    const modelDropDown = modelDD.map(p => (
        <option value={p.id}>
            {p.name}
        </option>
    ));

    const yearDropDown = yearDD.map(p => (
        <option value={p.id}>
            {p.name}
        </option>
    ));

    const getModel = async (brandId) => {
        setVehicleBrandId(brandId);
        try {
            const dataM = await model({ brandId });
            setmodelDD(dataM);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = async () => {

        setLoading(false);

        try {

            const response = await addvehicle({
                registrationNumber: regNo,
                vehicleBrandId: vehBId,
                vehicleModelId: vehMId,
                modelYearId: modYId,
                vin: vn,
                vehicleLicenseExpiry: vehLicExp,
                motExpiry: motExp,
                insuranceExpiry: insuranceExp,
                vehicleOwnerName: vehOwnerName,
                mileage: mil
            });

            console.log(response);
            
            if (response.status === 200 || response.status === 201) {
                setLoading(true);
                toast.show(
                    utils.toastCallback({
                        severity: "success",
                        detail: `${regNo} add successfully`
                    })
                );
            
            }else{

                console.log(response);
                setLoading(true);
                toast.show(
                utils.toastCallback({
                    severity: "error",
                    summary: "Server Error",
                    detail: response.error
                })
            );
            }

            

        } catch (error) {

            console.log(error);

            setLoading(true);
            toast.show(
                utils.toastCallback({
                    severity: "error",
                    summary: "Server Error",
                    detail: constants.networkErrorMessage
                })
            );
        }
    };

    return (
        <Layout Title={title} LoadPage={loading} >
            <div className="row">
                <div className="col-lg-12">
                    <div className="card forms-card">
                        <div className="card-body">
                            <h4 className="card-title mb-4">{title}</h4>
                            <div className="basic-form">

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Registration Number</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" className="form-control" value={regNo} name="registrationNumber" onChange={handleChangeRegistrationNumber} placeholder="Enter Vechicle Registration Number" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Brand</label>
                                        <div className="col-lg-9">
                                            <select className="form-control" value={vehBId} onChange={e => getModel(e.target.value)} name="vehicleBrandId" >
                                                <option className="text-muted" value={0} disabled selected style={{ 'display': 'none' }}>[Select Brand]</option>
                                                {brandDropDown}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Model</label>
                                        <div className="col-lg-9">
                                            <select className="form-control" value={vehMId} onChange={handleChangeVehicleModelId}>
                                                <option className="text-muted" value={0} name="vehicleModelId" disabled selected style={{ 'display': 'none' }}>[Select Model]</option>
                                                {modelDropDown}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Model Year</label>
                                        <div className="col-lg-9">
                                            <select className="form-control" value={modYId} onChange={handleChangeModelYearId}>
                                                <option className="text-muted" value={0}  name="modelYearId" disabled selected style={{ 'display': 'none' }}>[Select Year]</option>
                                                {yearDropDown}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">VIN</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" name="vin" value={vn} onChange={handleChangeVin} className="form-control" placeholder="Enter VIN" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Vechicle License Expiry</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" value={vehLicExp} onChange={handleChangeVehicleLicenseExpiry} name="vehicleLicenseExpiry" className="form-control" placeholder="Enter Vechicle License Expiry" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">MOT Expiry</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" value={motExp} onChange={handleChangeMotExpiry}  name="motExpiry" className="form-control" placeholder="Enter MOT Expiry" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Insurance Expiry</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" value={insuranceExp} onChange={handleChangeInsuranceExpiry}  name="insuranceExpiry" className="form-control" placeholder="Enter Insurance Expiry" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Mileage</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="number" value={mil} onChange={handleChangeMileage}  name="mileage" className="form-control" placeholder="Enter Mileage" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Owner's Name</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" value={vehOwnerName} onChange={handleChangeVehicleOwnerName}  name="vehicleOwnerName" className="form-control" placeholder="Enter Owner's Name" />
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-form mr-2">Submit</button>
                                    <a href={constants.routes.vehicle} type="button" className="btn btn-light text-dark btn-form">Back</a>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toast baseZIndex={1000} ref={el => setToast(el)} />
        </Layout>
    );
}
export default AddVehicle;