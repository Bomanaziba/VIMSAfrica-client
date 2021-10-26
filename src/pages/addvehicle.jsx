import React from "react";
import Layout from '../components/layout';
import constants from "../utils/constants";

function AddVehicle(props) {

    const title = constants.modules.addvehicle

    return (
        <Layout Title={ title } LoadPage={true} >
            <div className="row">
                <div className="col-lg-12">
                    <div className="card forms-card">
                        <div className="card-body">
                            <h4 className="card-title mb-4">{title}</h4>
                            <div className="basic-form">
                                <form>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Registration Number</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Enter Vechicle Registration Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Brand</label>
                                        <div className="col-lg-9">
                                            <select className="form-control">
                                                <option className="text-muted" disabled selected style={{ 'display': 'none' }}>[Select Brand]</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Model</label>
                                        <div className="col-lg-9">
                                            <select className="form-control">
                                                <option className="text-muted" disabled selected style={{ 'display': 'none' }}>[Select Model]</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Model Year</label>
                                        <div className="col-lg-9">
                                            <select className="form-control">
                                                <option className="text-muted" disabled selected style={{ 'display': 'none' }}>[Select Year]</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Mileage</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Enter Vechicle Registration Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">VIN</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Enter VIN" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Vechicle License Expiry</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="datetime" className="form-control" placeholder="Enter Vechicle License Expiry" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">MOT Expiry</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="datetime" className="form-control" placeholder="Enter MOT Expiry" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">Insurance Expiry</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="datetime" className="form-control" placeholder="Enter Insurance Expiry" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <label className="col-sm-3 col-form-label text-label">VIN</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Enter VIN" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label text-label">Comment</label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <textarea className="form-control" placeholder="Tell us something" name="textarea1" rows="6"></textarea>
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
        </Layout>
    );
}
export default AddVehicle;