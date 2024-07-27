import React from 'react';

const Valves = () => {
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
      <div className="heading" style={{ marginTop: '0px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>LET'S HELP YOU WITH OUR PRODUCTS</span>
        <h3 className="petroheadline">Valves</h3>
      </div>

      <div className="container">
        <br />
      </div>
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h3>Gate Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Designed for on/off control, gate valves provide a
                      reliable, tight seal in pipelines, preventing leaks. They
                      are ideal for high-pressure applications where a
                      straight-line flow and minimal flow restriction are
                      needed. These valves comply with ISO 10434 and API 600
                      standards, ensuring durability and safety, which are
                      endorsed by GCC regulations. Gate valves meet the
                      stringent requirements of the petroleum industry in the
                      region, providing reliable operation under demanding
                      conditions.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Gate Valves.svg"
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
                        src="assets/images/activity-four/svg/Butterfly Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Butterfly Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Lightweight and compact, butterfly valves are used for
                      flow regulation. They offer quick operation and are
                      suitable for large-volume applications. These valves are
                      versatile and can handle various types of fluids,
                      including corrosive ones. Adhering to ISO 5752 and API 609
                      standards, butterfly valves are designed to withstand the
                      demanding conditions of the petroleum sector, providing
                      reliable performance and ease of maintenance.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Globe Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Ideal for throttling applications, globe valves provide
                      precise control over fluid flow. They are designed to
                      handle high-pressure and high-temperature environments,
                      ensuring consistent performance and longevity. Globe
                      valves meet ISO 17292 and API 602 standards, ensuring
                      safety and efficiency. These standards are endorsed by GCC
                      regulations, making them a reliable choice for critical
                      applications within the petroleum industry.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Globe Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
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
                        src="assets/images/activity-four/svg/Check Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Check Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Essential for preventing backflow, check valves ensure the
                      unidirectional flow of fluids. They are crucial in
                      maintaining system integrity and protecting equipment from
                      potential damage due to reverse flow. Check valves comply
                      with ISO 14313 and API 594 standards, ensuring high
                      reliability and safety in petroleum applications.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Ball Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Known for their durability and excellent shutoff
                      capabilities, ball valves are widely used in the petroleum
                      industry. They offer low-pressure drop and high flow
                      capacity, making them suitable for both liquid and gaseous
                      applications. Ball valves comply with ISO 17292 and API
                      608 standards, ensuring robustness, performance, and
                      compatibility with various petroleum products. These
                      valves meet GCC norms, ensuring safe and efficient
                      operations.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Ball Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
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

export default Valves;
