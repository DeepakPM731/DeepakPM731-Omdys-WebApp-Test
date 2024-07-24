import { useEffect } from 'react';

const ActivityTwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* =========================================================== */}

      {/* =========================================================== */}

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
                  Trading Of Electronics Components
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*============================================================== */}

      <div
        className=""
        style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
      />

      <div
        // className="container"
        data-aos="zoom-in"
        style={{
          display: 'flex',
          justifyContent: 'center',
          objectFit: 'cover',
          marginTop: '30px',
        }}
      >
        <img
          // src="assets/svg4/Electronic Components 1.svg"
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
          alt=""
          // width={'100%'}
          // height={'500px'}
        />
      </div>
      <div className="heading">
        <div className="container" style={{ textAlign: '' }}>
          <p
            style={{
              fontSize: '18px',
              textAlign: 'justify',
              // color: 'red',
              margin: 0,
              padding: 0,
              whiteSpace: 'normal',
              wordBreak: 'break-all',
              lineHeight: '1.5',
              wordSpacing: '0.5px',
              hyphens: 'auto',
            }}
          >
            Welcome to our Electronics Components Sourcing wing, your one-stop
            destination for all your electronic component needs. We specialize
            in sourcing and trading a wide range of electronic components to
            meet the diverse requirements of our clients.
          </p>
          <br />
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
            At OMDYS International LLP, we understand the critical role that
            electronic components play in today's technology-driven world.
            Whether you are a small-scale electronics hobbyist or a large-scale
            manufacturer, we have the products and services to support your
            projects and businesses.
          </p>
        </div>
        <br />
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="proj-data">
              <h1 className="mt-4">
                <a href="" style={{ color: 'black' }}>
                  Our Product Range
                </a>
              </h1>
            </div>
            <div className="container">
              <p
                className="twop m-4"
                style={{
                  fontSize: '18px',
                  textAlign: 'center',
                }}
              >
                At OMDYS International LLP, we offer an extensive range of
                electronic components to cater to diverse needs and
                applications.Our product catalogue:
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------test-------------------------- */}
      <div className="container mt-5 mb-2">
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
                        as transistors, diodes, thyristors, and voltage
                        regulators to meet your requirements for signal
                        processing and amplification.
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
                        measuring and monitoring various environmental
                        parameters, including temperature, humidity, pressure,
                        and motion.
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
                        displays, OLED displays, and segment displays available
                        in different sizes, colors, and configurations.
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
                        control and automation needs, including tactile
                        switches, rocker switches, and electromechanical relays.
                      </p>
                    </div>
                  </li>
                  <li style={{ marginBottom: '-2%' }}>
                    <div className="data">
                      <h3>Semiconductors</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        Browse through our collection of discrete
                        semiconductors, including power MOSFETs, IGBTs, Schottky
                        diodes, and voltage regulators, for efficient power
                        management and control.
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
      </div>

      {/* ----------------------test-------------------------- */}

      {/*============================================================== */}
      <div style={{ marginTop: '-3%' }}>
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
                    <h3>Our Commitment to Quality</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      At OMDYS International LLP, we understand the importance
                      of quality and reliability in electronic components.
                      That's why we source our products from reputable
                      manufacturers and authorized distributors known for their
                      commitment to excellence and adherence to industry
                      standards.
                      <br />
                      <br />
                      Before adding any product to our catalog, our team of
                      experts conducts rigorous quality assurance checks to
                      ensure that each component meets our stringent criteria
                      for performance, reliability, and durability.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Contact Us</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Ready to experience the difference with OMDYS
                      International, Get in touch with us today to discuss your
                      requirements, request a quote, or learn more about our
                      products and services. Our dedicated team is here to
                      assist you every step of the way and help you find the
                      perfect electronic components for your projects and
                      productions.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/petroleum and petrochemical products (2).svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/contact_ann.png"
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
      {/*============================================================== */}
    </>
  );
};

export default ActivityTwo;
