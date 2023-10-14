import React from "react";
import { blogDetails } from "../data";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const Blog = () => {
  const chunkSize = 3;
  const chunkedBlogDetails = [];

  for (let i = 0; i < blogDetails.length; i += chunkSize) {
    chunkedBlogDetails.push(blogDetails.slice(i, i + chunkSize));
  }

  return ( <>
  <hr></hr>
  <div className="section">
    <div className="blog">
    <h4 className="text-center">Latest Blog</h4>
    <div id="blogCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {chunkedBlogDetails.map((chunk, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="card-group d-flex justify-content-center">
              {chunk.map((blog) => (
                <div key={blog.blogIndex} className="card m-2" style={{ width: '18rem' }}>
                  <img src={blog.img} className="card-img-top" alt="..." style={{ maxHeight: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-subtitle"><small>{blog.description}</small></p>
                    <p className="card-text">
                      <small className="text-muted float-start"><BsFillCalendarCheckFill />{blog.date}</small>
                      <button className="btn btn-outline-success float-end">Read Post</button>
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#blogCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#blogCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    
 
      {/* SubScribe To NewsLetter section */}
      <div className="container mt-1">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card border-0">
            <div className="card-body text-center">
              <h4 className="card-title mb-3">Subscribe to Newsletter</h4>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <button type="submit" className="btn btn-outline-success">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      </div>
    </>
  );
};

export default Blog;
