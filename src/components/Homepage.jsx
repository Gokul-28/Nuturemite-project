import React from "react";
import IMAGES from "../images/image";
import Carousel from "./Carousel";

const Homepage = () => {
  return (
    <>
      <div className="Section">
      {/* Carousel */}
     <Carousel />
      {/* End of carousel  */}

      {/* Proposition Area */}
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <div className="card mb-1" style={{ maxWidth: "400px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={IMAGES.truck}
                  className="img-fluid rounded-start"
                  alt="image"
                />
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
        </div>
        <div className="p-2 bd-highlight">
          {" "}
          <div className="card mb-1" style={{ maxWidth: "400px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={IMAGES.truck}
                  className="img-fluid rounded-start"
                  alt="image"
                />
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
        </div>
        <div className="p-2 bd-highlight">
          {" "}
          <div className="card mb-2" style={{ maxWidth: "400px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={IMAGES.truck}
                  className="img-fluid rounded-start"
                  alt="image"
                />
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
        </div>
        <div className="p-2 bd-highlight">
          {" "}
          <div className="card mb-2" style={{ maxWidth: "400px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={IMAGES.truck}
                  className="img-fluid rounded-start"
                  alt="image"
                />
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
        </div>
      </div>
      {/* End of Proposition */}
      <hr />
      </div>
    </>
  );
};

export default Homepage;
