import React from 'react';

const ElectricalTools = () => {
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
              <div className="banner-details">
                <h2 style={{ textAlign: 'center' }}>
                  Construction Tools & Equipments
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
      <div className="heading" style={{ marginTop: '', marginBottom: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h2>Electrical Tools</h2>
      </div>

      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Electrical Tools__.svg"
          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div>
      <section className="gap about-key-benefits" style={{ marginTop: '-4%' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-6"></div> */}

            <div className="col-lg-12">
              <div className="data" style={{ marginTop: '' }}>
                {/* <div className="data"> */}
                {/* <h2>Supplier Identification & Sourcing</h2> */}
                {/* <ul data-aos="fade-down"> */}
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  At OMDYS International LLP, we provide a comprehensive
                  selection of high-quality electrical tools tailored to meet
                  the demands of professionals working with electrical systems.
                  Our tools are crafted to ensure precision, safety, and
                  efficiency for all your electrical tasks.
                  <br />
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      //   textAlign: 'center',
                      color: 'black',
                      //   backgroundColor: 'yellow',
                    }}
                  >
                    Multimeters
                  </h4>
                  <br />
                  <b>Digital Multimeters:</b> Advanced devices for measuring
                  voltage, current, and resistance. Our digital multimeters
                  offer accurate readings and come with a range of features,
                  including auto-ranging and data hold, to facilitate easy and
                  precise measurements.
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      //   textAlign: 'center',
                      color: 'black',
                      //   backgroundColor: 'yellow',
                    }}
                  >
                    Wire Strippers
                  </h4>
                  <br />
                  <b>Automatic Wire Strippers:</b> Designed for quick and
                  efficient removal of insulation from wires. The automatic
                  mechanism adjusts to different wire sizes, allowing you to
                  strip wires with minimal effort and maximum precision.
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      //   textAlign: 'center',
                      color: 'black',
                      //   backgroundColor: 'yellow',
                    }}
                  >
                    Circuit Testers
                  </h4>
                  <br />
                  <b>Voltage Testers:</b> Essential for detecting the presence
                  of electrical current in circuits. Our voltage testers are
                  designed for safety and ease of use, providing clear
                  indicators to help you determine live wires and troubleshoot
                  electrical issues.
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      //   textAlign: 'center',
                      color: 'black',
                      //   backgroundColor: 'yellow',
                    }}
                  >
                    Cable Cutters
                  </h4>
                  <br />
                  <b>Heavy-Duty Cable Cutters:</b> Engineered to cut thick
                  cables and wires with ease. These cutters feature strong,
                  precision-ground blades and ergonomic handles for comfortable
                  use and clean, accurate cuts.
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      //   textAlign: 'center',
                      color: 'black',
                      //   backgroundColor: 'yellow',
                    }}
                  >
                    Conduit Benders
                  </h4>
                  <br />
                  <b>Handheld Conduit Benders:</b> Ideal for bending electrical
                  conduit to the desired angle. Our benders offer precise
                  control and durability, making it easier to create accurate
                  bends for conduit installations.
                  <br />
                  <br />
                  At OMDYS International LLP, we are dedicated to supplying
                  high-quality electrical tools that enhance safety and
                  efficiency in your electrical work. Our products are selected
                  from leading brands renowned for their reliability and
                  performance in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectricalTools;
