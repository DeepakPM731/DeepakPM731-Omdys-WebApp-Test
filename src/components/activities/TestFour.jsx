import { useEffect } from 'react';

const TestFour = () => {
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
      {/* ---------Head starts--------- */}

      <div>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details" style={{ textAlign: 'center' }}>
                <h2>Industrial Chemical Products</h2>
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
      <div className="container" style={{}}>
        <img
          className="industry"
          style={{ width: '100%' }}
          // src="assets/svg4/petroleum and petrochemical products (2).svg"
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div>
      {/* </figure> */}
      <div className="container mt-5 mb-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="who-we-are">
              <div>
                {/* <h3 className="mb-5 text-center" style={{ fontSize: '48px' }}>
                  Wide Range of Products
                </h3> */}
                {/* <p style={{ textAlign: 'justify' }}> */}
                <p
                  style={{
                    fontSize: '18px',
                    textAlign: 'justify',
                    margin: 0,
                    padding: 0,
                    whiteSpace: 'normal',
                    wordBreak: 'break-all',
                    lineHeight: '1.5',
                    wordSpacing: '0.5px',
                    hyphens: 'auto',
                  }}
                >
                  Omdys International LLP is committed to offering comprehensive
                  service support in the oil and gas sector. Our primary focus
                  is on the procurement and distribution of petroleum and
                  petrochemical products to our clientele. We adhere strictly to
                  International Standard working practices in all our business
                  operations. At Omdys International LLP, we believe in building
                  long-term relationships with our clients and look forward to
                  serving you and meeting your Industrial Chemical needs.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <h2 style={{ textAlign: 'center' }}>Chemical Products</h2>
        <br />
      </div>
      {/* ---------Head ends-------- */}
      {/* ------------Chemical Products Starts ------------------ */}
      <br />
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h3>Integrated Circuits (ICs)</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      From microcontrollers to application-specific ICs, we
                      carry a wide variety of integrated circuits from leading
                      manufacturers.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/ic.png"
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
                        src="assets/images/activity-four/passivec.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Passive Components</h3>
                    <p style={{ fontSize: '18px' }}>
                      Our selection of passive components includes resistors,
                      capacitors, inductors, and filters to support various
                      circuit designs and applications.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Active Components</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We stock a comprehensive range of active components such
                      as transistors, diodes, thyristors, and voltage regulators
                      to meet your requirements for signal processing and
                      amplification.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/activec.png"
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
                        src="assets/images/activity-four/cables.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Connectors and Cables</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Whether you need standard connectors or custom cable
                      assemblies, we offer a diverse range of connectors,
                      cables, and harnesses for seamless integration into your
                      projects.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Sensors and Modules</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Explore our selection of sensors and sensor modules for
                      measuring and monitoring various environmental parameters,
                      including temperature, humidity, pressure, and motion.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/sensorsc.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/training_ann.png"
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
                        src="assets/images/activity-four/leds.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/sustainability.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> LEDs and Displays</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Illuminate your projects with our selection of LEDs, LCD
                      displays, OLED displays, and segment displays available in
                      different sizes, colors, and configurations.
                    </p>
                  </div>
                </li>
                <li style={{ marginBottom: '-2%' }}>
                  <div className="data">
                    <h3>Power Supplies and Batteries</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Ensure reliable power delivery with our range of power
                      supplies, batteries, chargers, and DC-DC converters
                      designed for diverse applications.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/power.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/promise.png"
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
                        src="assets/images/activity-four/relayc.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/sustainability.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Switches and Relays</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Find the right switches, relays, and contactors for your
                      control and automation needs, including tactile switches,
                      rocker switches, and electromechanical relays.
                    </p>
                  </div>
                </li>
                <li style={{ marginBottom: '-2%' }}>
                  <div className="data">
                    <h3>Semiconductors</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Browse through our collection of discrete semiconductors,
                      including power MOSFETs, IGBTs, Schottky diodes, and
                      voltage regulators, for efficient power management and
                      control.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/semiconductor.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/promise.png"
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
      {/* ------------Chemical Products Ends ------------------ */}
      {/* ------------Petroleum Products Starts ------------------ */}

      <br />
      <h2 style={{ textAlign: 'center' }}>Petroleum Products</h2>

      <div className="container">
        <p
          className="twop m-4"
          style={{
            fontSize: '18px',
            textAlign: 'center',
          }}
        >
          We offer a wide range of petroleum products, including crude oil,
          gasoline, diesel, jet fuel, and heating oil. Our products are sourced
          from reliable suppliers,
          <nobr>ensuring quality and consistency.</nobr>
        </p>
        <br />
        <p style={{ fontSize: '20px', textAlign: 'center' }}>
          <b>
            Here is a list of major materials that we can provide / supply to
            you:
          </b>
        </p>
        <br />
      </div>
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h3>Drilling Equipment</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      This includes drill pipes, drill collars, and drilling
                      bits.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/drillpipes.png"
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
                        src="assets/images/activity-four/safety.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Safety Equipment</h3>
                    <p style={{ fontSize: '18px' }}>
                      Personal Protective Equipment (PPE) such as helmets,
                      safety shoes, gloves, and safety harnesses are essential
                      for the safety of the workers.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Valves and Pumps</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These are used for controlling the flow of oil and gas in
                      the refinery or rig.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/valves.png"
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
                        src="assets/images/activity-four/tubes.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Pipes and Tubing</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These are used for transporting oil and gas from the well
                      to the processing facilities.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Seals and Gaskets</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These are used to prevent leaks in the various equipment
                      and piping systems.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/seals.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/training_ann.png"
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
                        src="assets/images/activity-four/catalyst.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/sustainability.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Catalysts</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These are used in various refining processes to speed up
                      chemical reactions.
                    </p>
                  </div>
                </li>
                <li style={{ marginBottom: '-2%' }}>
                  <div className="data">
                    <h3>Chemicals</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Various chemicals are used in the drilling process, for
                      treating oil and gas, and for maintaining equipment
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/chemical.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/promise.png"
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
                        src="assets/images/activity-four/motor.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/sustainability.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Electrical Equipment</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      This includes generators, motors, cables, and lighting
                      equipment.
                    </p>
                  </div>
                </li>
                <li style={{ marginBottom: '-2%' }}>
                  <div className="data">
                    <h3>Instrumentation Equipment</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Instruments for measuring pressure, temperature, flow
                      rate, and other parameters are crucial for the safe and
                      efficient operation of the refinery or rig.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/instrumentation.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/promise.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
            <p
              className="twop m-4"
              style={{
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              Please note that the specific materials required can vary
              depending on the type of refinery or rig, the nature of the
              operations, and the specific requirements of the project.
            </p>
          </div>
        </section>
      </div>
      {/* ------------Petroleum Products Ends ------------------ */}
      {/* ------------Bottom Content Starts ------------------ */}
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/petroleum and petrochemical products (2).svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Quality Assurance</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We are committed to providing high-quality products. All
                      the Industrial Chemical products that are supplied by us
                      undergo rigorous quality checks to ensure they meet the
                      highest standards.
                    </p>
                  </div>
                </li>
                <br />
                {/* <li></li> */}
                <li>
                  <div className="data">
                    <h3>Competitive Pricing</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We understand the importance of cost-effectiveness in your
                      business. That’s why we offer our products at competitive
                      prices, ensuring you get the best value for your money.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/petroleum and petrochemical products (2).svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/pricing.png"
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
                        // src="assets/svg4/Medical PPE 1.svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/timely_delivery.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Timely Delivery</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We have efficient logistics in place to ensure timely
                      delivery of your orders. We understand that in your
                      business, time is of the essence.
                    </p>
                  </div>
                </li>
                <br />
                {/* <li></li> */}
                <li>
                  <div className="data">
                    <h3> Customer Support</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Our dedicated customer support team is always ready to
                      assist you with any queries or issues. We strive to
                      provide excellent customer service and ensure your
                      satisfaction.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <br />
                {/* <li></li> */}
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* ------------Bottom Content Ends ------------------ */}
    </>
  );
};

export default TestFour;
