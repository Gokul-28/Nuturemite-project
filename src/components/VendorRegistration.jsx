import React from "react";
import { Link } from "react-router-dom";
import VendorLogin from "./VendorLogin";

const VendorRegistration = () => {
  return (
    <div className="Sections bg-dark text-light">
      <div className="container mt-5 ">
        <div className="row">
          <h2 className="text-center mt-4">Vendor Registration</h2>
          <div className="col-md-6 ">
            <form>
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label">
                  Name of the Company
                </label>
                <input type="text" className="form-control" id="companyName" />
              </div>
              <div className="mb-3">
                <label htmlFor="firmType" className="form-label">
                  Type of the Firm
                </label>
                <select className="form-select" id="firmType">
                  <option>Public Limited</option>
                  <option>Partnership</option>
                  <option>Proprietorship</option>
                  <option>Government Section</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="gstNumber" className="form-label">
                  GST Number
                </label>
                <input type="text" className="form-control" id="gstNumber" />
              </div>
              <div className="mb-3">
                <label htmlFor="panNumber" className="form-label">
                  PAN Number
                </label>
                <input type="text" className="form-control" id="panNumber" />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h2></h2>
            <form>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="address" />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="city" />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input type="text" className="form-control" id="state" />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="phoneNumber" />
              </div>

              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button type="button" className="btn btn-secondary">
                Clear
              </button>

              <p className="text-light mt-2">

                Already Have account?
                <Link to="/login" element={<VendorLogin />}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegistration;
