import React, { useEffect } from 'react';

const Instrumentation = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
      let elements = document.querySelectorAll('[data-aos]');
      for (let i = 0; i < elements.length; i++) {
        //if ios remove the attribute
        if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
          elements[i].removeAttribute('data-aos');
        }
      }
    });
  return (
    <>
      <div>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2 style={{ textAlign: 'center' }}>
                  Oil & Gas Equipment Supply
                </h2>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  tenetur culpa rerum, ipsam odio voluptatem excepturi quasi!
                </p> */}
              </div>
            </div>
          </div>
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
        <h3 className="petroheadline">Instrumentation and Controls</h3>
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
                    <h3>Pressure Gauges</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Essential for monitoring pipeline pressure, these gauges
                      ensure the safe and efficient operation of petroleum
                      systems. They provide real-time data, helping to prevent
                      overpressure situations. Pressure gauges comply with ISO
                      5171 and ASME B40.100 standards, ensuring they deliver
                      accurate, reliable, and consistent measurements critical
                      for maintaining operational safety as per GCC standards.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Pressure+gauges.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Temperature+Sensors.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Temperature Sensors</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Track temperature changes within the pipeline and
                      equipment, ensuring optimal operating conditions. These
                      sensors help in maintaining system stability and
                      preventing overheating. Temperature sensors comply with
                      ISO 9001 and IEC 60751 standards, ensuring they provide
                      precise and reliable temperature monitoring essential for
                      safe and efficient petroleum operations as per GCC norms.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Flow Meters</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Measure the flow rate of liquids and gases, providing
                      crucial data for maintaining the efficiency of petroleum
                      processes. They are available in various types, each
                      suited for specific applications. Flow meters meet ISO
                      4064 and OIML R49 standards, ensuring they deliver
                      accurate, reliable, and consistent flow measurements
                      critical for optimizing petroleum production and
                      processing as per GCC regulations.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Flow+Meters.svg"
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

export default Instrumentation;
