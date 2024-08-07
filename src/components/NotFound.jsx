import React from 'react';
import './notfound.css';

const NotFound = () => {
  return (
    <>
      <div style={{ marginBottom: '-30px' }}>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details"></div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <div className="heading" style={{ marginTop: '-5%' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        {/* <h2>Meet Our Team</h2> */}
        {/* <hr /> */}
      </div>
      <div className="container" style={{ marginTop: '-4%' }}>
        <br />
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}
        >
          <h1 style={{ fontSize: '122px' }}>404</h1>
        </div>
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}
        >
          <h1 style={{ fontSize: '62px' }}>Not Found</h1>
        </div>

        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}
        >
          <h1 style={{ fontSize: '38px', textDecoration: 'none' }}>
            <a href="/" style={{ textDecoration: 'underline' }}>
              Go to Home
            </a>
          </h1>
        </div>
        <br />
      </div>
    </>
  );
};

export default NotFound;
