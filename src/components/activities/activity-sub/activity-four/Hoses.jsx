import React from 'react';

const Hoses = () => {
  return (
    <>
      <div>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          {/* <div className="container">
            <div className="row">
              <div className="banner-details" style={{ textAlign: 'center' }}>
                <h2>Industrial Chemical Products</h2>
              </div>
            </div>
          </div> */}
        </section>
      </div>
      <br />
      {/* <figure
        style={{
          // display: 'flex',
          // justifyContent: 'center',
          width: '100vw',
        }}
      > */}
      {/* <div className="container" style={{}}>
        <img
          className="industry"
          style={{ width: '100%' }}
          // src="assets/svg4/petroleum and petrochemical products (2).svg"
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div> */}
      {/* </figure> */}

      {/* ---------Head ends-------- */}
      {/* ------------Chemical Products Starts ------------------ */}
      {/* ------------Chemical Products Ends ------------------ */}
      {/* ------------Petroleum Products Starts ------------------ */}
      <div className="heading" style={{ marginTop: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>LET'S HELP YOU WITH OUR PRODUCTS</span>
        <h2>Hoses and Tubing</h2>
        <br />
      </div>
      <br />
      <br />
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li className="pipelist">
                  <div className="data">
                    <h3>Flexible Metal Hoses</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These hoses absorb vibration, compensate for misalignment,
                      and facilitate movement within the pipeline system. They
                      are durable and capable of handling a variety of fluids
                      and gases. Flexible metal hoses comply with ISO 10380 and
                      API 570 standards, ensuring they provide reliable and
                      long-lasting service in the demanding conditions of the
                      petroleum industry as per GCC norms.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Flexible metal hoses.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Rubber Hoses.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Rubber Hoses</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Known for their flexibility and durability, rubber hoses
                      are used for transferring petroleum products. They are
                      designed to handle the pressures and conditions of the
                      petroleum industry. Rubber hoses meet ISO 1436 and SAE
                      J517 standards, ensuring they offer safe, reliable, and
                      efficient fluid transfer solutions as per GCC
                      requirements.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>PTFE Hoses</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Resistant to chemicals and high temperatures, PTFE hoses
                      are ideal for transporting corrosive fluids. They offer a
                      long service life and maintain their integrity under
                      extreme conditions. PTFE hoses comply with ISO 12086 and
                      SAE AS4897 standards, ensuring they provide safe,
                      reliable, and high-performance solutions for handling
                      aggressive fluids in the petroleum sector as per GCC
                      norms.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/PTFE Hoses.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hoses;
