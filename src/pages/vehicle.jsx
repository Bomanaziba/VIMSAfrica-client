import React from "react";
import Layout from '../components/layout';
import constants from "../utils/constants";
import { useResource } from "react-resource-router";
import ServerSideDatatable from "../components/tables/datatable";
import { vehicle } from "../apis/vehicleapis";
import { Toast } from "primereact/toast";
import { workshopResource } from "../utils/resources";

function Vehicle(props) {

    const [toast, setToast] = React.useState(null);
    const [tData, setTData] = React.useState([]);
    const [index, setIndex] = React.useState(1);
    const [size, setSize] = React.useState(10);
    const [searchParams, setSearchParams] = React.useState('');
    const { data: workshop, error, refresh } = useResource(workshopResource);

    const title = constants.modules.vehicle;

    React.useEffect(async () => {
        try {
            const data = await vehicle({ index, size, searchParams });
            setTData(data);
        }
        catch (error) {
            console.log(error);
        }
    }, []);


    function searchFunction(input) {

    }

    console.log("rendered")

    const columns =
        [
            { field: 'registrationNumber', header: 'Reg. No.' },
            { field: 'vin', header: 'VIN' },
            { field: 'vehicleLicenseExpiry', header: 'License Expiry' },
            { field: 'motExpiry', header: 'MOT Expiry' },
            { field: 'insuranceExpiry', header: 'Insurance Expiry' },
            { field: 'vehicleOwnerName', header: 'OwnerName' },
            { field: 'mileage', header: 'Mileage' }
        ];

    <div style={{ 'textAlign': 'left' }}>
        <i className="pi pi-search" style={{ margin: '4px 4px 0 0' }}></i>

    </div>

    return (
        <Layout Title={title} LoadPage={true} >
            <div className="row">
                <div className="col-lg-12">
                    <div className="card transparent-card">
                        <div className="card-header pb-0">
                            <h4 className="card-title mt-2">{title}</h4>
                        </div>
                        <div className="col-3 pull-right"> <a href={constants.routes.addvehicle} className="btn btn-primary" >
                                <span className="align-right"><i className="ti-plus"></i></span>
                            </a>
                        </div>
                            
                        <ServerSideDatatable
                            Title={title}
                            Data={tData.items}
                            PageIndex={index}
                            PageSize={size}
                            TotalCount={tData.total}
                            Columns={columns}
                            SearchParams={searchParams}
                        ></ServerSideDatatable>
                    </div>
                </div>
            </div>
            <Toast baseZIndex={1000} ref={el => setToast(el)} />
        </Layout>
    );
}
export default Vehicle;