import React from 'react';

const About = () => {
  return (
    <div className='Section'>
    <div className='card my-5 mx-auto' style={{ maxWidth: '800px' }}>
      <div className='card-body bg-dark text-light'>
        <h5 className='card-title text-center'>Web Developer Selection Task </h5>
        <p className='card-text'>
          <strong>Company:</strong> Nuturemite<br />
          <strong>Current Website:</strong> <a href='https://nuturemite.info/'>https://nuturemite.info/</a>
        </p>
        <p className='card-text'><strong>Objective</strong>: Analyze the current website and develop a new prototype for Nuturemite, keeping in mind the future transition to a multi-vendor platform.</p>
        <p className='card-text'><strong>Instructions:</strong> Please complete the tasks outlined below. Your submissions will help us assess your skills and fit for the web developer role at Megaminds IT Services.</p>
        <hr />

        <h5>1. Current Website Analysis:</h5>
        <p><strong>Objective:</strong> Evaluate the current website's structure and performance.</p>
        <p><strong>Task:</strong> Analyze the website's design, responsiveness, load times, and identify any bugs or issues.</p>
        <p><strong>Deliverables:</strong> A report detailing your findings and suggestions for improvement.</p>
        <hr />

        <h5>2. New Website Design:</h5>
        <p><strong>Objective:</strong> Create a modern and user-friendly design for the new website.</p>
        <p><strong>Task:</strong> Design a homepage, product page, and vendor registration page.</p>
        <p><strong>Deliverables:</strong> Mockups or wireframes of the designed pages.</p>
        <hr />

        <h5>3. New Website Development:</h5>
        <p><strong>Objective:</strong> Develop a functional prototype of the new website.</p>
        <p><strong>Task:</strong> Using your preferred web development framework, develop the pages you've designed. Ensure the site is responsive and mobile-friendly.</p>
        <p><strong>Deliverables:</strong> A link to the hosted prototype or a GitHub repository containing the code.</p>
        <hr />

        <h5>4. Multi-Vendor Consideration:</h5>
        <p><strong>Objective:</strong> Ensure the website structure supports future multi-vendor functionalities.</p>
        <p><strong>Task:</strong> Implement a basic vendor registration form and a dashboard mockup where vendors can view their products and sales.</p>
        <p><strong>Deliverables:</strong> Functional vendor registration form and dashboard mockup integrated into the prototype.</p>
        <hr />

        <h5>5. Database Design:</h5>
        <p><strong>Objective:</strong> Plan for a scalable database structure.</p>
        <p><strong>Task:</strong> Draft a database schema that can accommodate multiple vendors, products, and transactions in the future.</p>
        <p><strong>Deliverables:</strong> A database schema diagram and a brief explanation of your design choices.</p>
        <hr />

        <h5>6. Documentation:</h5>
        <p><strong>Objective:</strong> Provide clarity on your development choices and future scalability.</p>
        <p><strong>Task:</strong> Document your choice of web development framework, database structure, and any third-party tools or plugins you've used or recommend for future development.</p>
        <p><strong>Deliverables:</strong> A brief documentation report.</p>
      </div>
    </div>
    </div>
  );
};

export default About;
