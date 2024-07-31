import React, { useEffect } from 'react';

const ElectricalTools = () => {
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
                  Construction Tools & Safety Equipments
                </h2>
                <br />
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
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Electrical+Tools__.svg"
          // src="assets/images/activity-four/svg/log/Electrical Tools__.svg"
          alt="Our Project One Image 1"
        />
      </div>

      <div style={{ marginTop: '5%' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h3>Multimeters</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Digital Multimeters:</b> Advanced devices for measuring
                      voltage, current, and resistance. Our digital multimeters
                      offer accurate readings and come with a range of features,
                      including auto-ranging and data hold, to facilitate easy
                      and precise measurements.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Electrical+Tools+-+Multimeters_.svg"
                        // src="assets/images/activity-four/svg/construction/Electrical Tools - Multimeters.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Electrical+Tools+-+Wire+Strippers_.svg"
                        // src="assets/images/activity-four/svg/construction/Electrical Tools - Wire Strippers.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Wire Strippers</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Automatic Wire Strippers:</b> Designed for quick and
                      efficient removal of insulation from wires. The automatic
                      mechanism adjusts to different wire sizes, allowing you to
                      strip wires with minimal effort and maximum precision.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Circuit Testers</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Voltage Testers:</b> Essential for detecting the
                      presence of electrical current in circuits. Our voltage
                      testers are designed for safety and ease of use, providing
                      clear indicators to help you determine live wires and
                      troubleshoot electrical issues.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Electrical+Tools+-+Voltage+Tester_.svg"
                        // src="assets/images/activity-four/svg/construction/Electrical Tools - Voltage Tester.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Electrical+Tools+-+Cable+Cutters_.svg"
                        // src="assets/images/activity-four/svg/construction/Electrical Tools - Cable Cutters.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Cable Cutters</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Heavy-Duty Cable Cutters:</b> Engineered to cut thick
                      cables and wires with ease. These cutters feature strong,
                      precision-ground blades and ergonomic handles for
                      comfortable use and clean, accurate cuts.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Conduit Benders</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Handheld Conduit Benders:</b> Ideal for bending
                      electrical conduit to the desired angle. Our benders offer
                      precise control and durability, making it easier to create
                      accurate bends for conduit installations.
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Electrical+Tools+-+Handheld+Conduit+Benders_.svg"
                        // src="assets/images/activity-four/svg/construction/Electrical Tools - Handheld Conduit Benders.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container">
          <p style={{ fontSize: '', textAlign: 'justify' }}>
            At OMDYS International LLP, we are dedicated to supplying
            high-quality electrical tools that enhance safety and efficiency in
            your electrical work. Our products are selected from leading brands
            renowned for their reliability and performance in the industry.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default ElectricalTools;
