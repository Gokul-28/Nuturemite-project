import React from "react";
import IMAGES from "../images/image";

const ProposCard = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={IMAGES.truck} className="img-fluid rounded-start" alt="image" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Free Shipping</h5>
            <p className="card-text">
              Free Shipping on all orders over INR 2000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposCard;
