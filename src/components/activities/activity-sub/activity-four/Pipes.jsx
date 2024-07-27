import React from 'react';

const Pipes = () => {
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
        <h3 className="petroheadline">Pipes</h3>
        <br />
      </div>
      <br />
      <br />
      <div className="pipehead" style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li className="pipelist">
                  <div className="data">
                    <h3>Steel Pipes</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Renowned for their strength and durability, steel pipes
                      are essential in transporting crude oil, natural gas, and
                      refined products. They are capable of withstanding high
                      pressures and harsh environments, ensuring safe and
                      efficient transport of materials. Steel pipes comply with
                      ISO 3183 (for oil and gas transportation) and API 5L
                      standards, meeting GCC requirements for quality and
                      performance.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Steel Pipes.svg"
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
                        src="assets/images/activity-four/svg/Stainless Steel Pipes.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Stainless Steel Pipes</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Highly resistant to corrosion, stainless steel pipes are
                      perfect for environments where chemical reactions could
                      degrade other materials. They offer longevity and
                      reliability in transporting fluids that might be
                      corrosive. Stainless steel pipes comply with ISO 1127 and
                      ASTM A312 standards, ensuring compatibility and resilience
                      in the challenging conditions of the petroleum sector,
                      meeting GCC norms.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Alloy Pipes</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These pipes are engineered for high-temperature and
                      high-pressure applications. Their composition allows them
                      to maintain structural integrity under extreme conditions,
                      making them ideal for critical parts of the petroleum
                      infrastructure. Alloy pipes comply with ISO 15590-1 and
                      ASTM A335 standards, guaranteeing their strength,
                      durability, and suitability for demanding industrial
                      applications as per GCC standards.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Alloy Pipes.svg"
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

export default Pipes;
