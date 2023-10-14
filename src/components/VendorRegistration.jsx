import React from 'react';

const VendorRegistration = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Vendor Registration</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">Name of the Company</label>
              <input type="text" className="form-control" id="companyName" />
            </div>
            <div className="mb-3">
              <label htmlFor="firmType" className="form-label">Type of the Firm</label>
              <select className="form-select" id="firmType">
                <option>Public Limited</option>
                <option>Partnership</option>
                <option>Proprietorship</option>
                <option>Government Section</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="gstNumber" className="form-label">GST Number</label>
              <input type="text" className="form-control" id="gstNumber" />
            </div>
            <div className="mb-3">
              <label htmlFor="panNumber" className="form-label">PAN Number</label>
              <input type="text" className="form-control" id="panNumber" />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <input type="text" className="form-control" id="country" />
            </div>
            <div className="mb-3">
              <label htmlFor="companyStatus" className="form-label">Status of Company</label>
              <select className="form-select" id="companyStatus">
                <option>Manufacturer</option>
                <option>Authorized Dealer</option>
                <option>Trader</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary me-2">Submit</button>
            <button type="button" className="btn btn-secondary">Clear</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Vendor Details</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" className="form-control" id="state" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phoneNumber" />
            </div>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">Website</label>
              <input type="text" className="form-control" id="website" />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
              <input type="text" className="form-control" id="mobileNumber" />
            </div>
            <div className="mb-3">
              <label htmlFor="contactPersonName" className="form-label">Name of the Contact Person</label>
              <input type="text" className="form-control" id="contactPersonName" />
            </div>
            <div className="mb-3">
              <label htmlFor="contactPersonDesignation" className="form-label">Designation of the Contact Person</label>
              <input type="text" className="form-control" id="contactPersonDesignation" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorRegistration;
