import React from "react";
import Layout from '../components/layout';
import constants from "../utils/constants";

function Vehicle(props) {

    const title = constants.modules.vehicle;
    
    return (
        <Layout Title={ title } LoadPage={true} >
            <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header pb-0">
                            <h4 className="card-title">{title}</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="example-style display" style={{"min-width": "1000px"}}>
                                    <thead>
                                        <tr>
                                            <th>S/No.</th>
                                            <th>Reg. No.</th>
                                            <th>Brand</th>
                                            <th>Model</th>
                                            <th>Model Year</th>
                                            <th>Owner</th>
                                            <th>Visits</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>098086ferr443</td>
                                            <td>Mercendes Benz</td>
                                            <td>S className</td>
                                            <td>2023</td>
                                            <td>B. Ogoni</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>S/No.</th>
                                            <th>Reg. No.</th>
                                            <th>Brand</th>
                                            <th>Model</th>
                                            <th>Model Year</th>
                                            <th>Owner</th>
                                            <th>Visits</th>
                                        </tr>
                                    </tfoot>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </Layout>
    );
}
export default Vehicle;