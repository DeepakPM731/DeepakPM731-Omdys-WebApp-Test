import { useEffect } from 'react';

const ActivityTwo = () => {
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
      <br />
      <div className="container" style={{}}>
        <img
          className="industry"
          style={{ width: '100%' }}
          // src="assets/svg4/petroleum and petrochemical products (2).svg"
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
          alt="Our Project One Image 1"
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
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
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
                          src="assets/images/activity-four/svg/active.svg"
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
                          src="assets/images/activity-four/svg/sensor_.svg"
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

      <section className="gap blog-style-two" style={{ marginTop: '-8%' }}>
        <div className="heading">
          <figure>
            {/* <img src="assets/images/heading-icon.png" alt="heading-icon-22" /> */}
          </figure>
          {/* <span>Blog &amp; News</span>
            <h2>Recent Articles</h2> */}
        </div>
        <div className="container">
          <div className="blog-slider row owl-carousel">
            {/* ------blog item----- */}
            <div className="blog-item col-lg-12">
              <img src="" alt="" />

              <span className="blog-post-num"></span>
              <img
                // style={{ marginRight: 'auto', marginLeft: 'auto' }}
                src="assets/images/activity-four/quality_assurance.png"
                alt=""
              />
              {/* <span className="blog-date">January 9, 2022</span> */}
              <h2 style={{ textAlign: 'center' }}>
                <a href="javascript:void(0)">Product Quality</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                At OMDYS International LLP, we understand the importance of
                quality and reliability in electronic components. That's why we
                source our products from reputable manufacturers and authorized
                distributors known for their commitment to excellence and
                adherence to industry standards.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>
            <div className="blog-item col-lg-12">
              <img src="" alt="" />
              <span className="blog-post-num"></span>
              <img src="assets/images/activity-four/customer_supp.png" alt="" />
              {/* <span className="blog-date">January 9, 2022</span> */}
              <h2 style={{ textAlign: 'center' }}>
                <a href="javascript:void(0)">Technical Support</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                Our dedicated team of experts is always ready to assist you with
                any technical issues. We aim to ensure your printing operations
                run smoothly.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>

            <div className="blog-item col-lg-12">
              <img src="" alt="" />
              <span className="blog-post-num"></span>
              <img
                src="assets/images/activity-four/sustainability_.png"
                alt=""
              />
              {/* <span className="blog-date">January 9, 2022</span> */}
              <h2 style={{ textAlign: 'center' }}>
                <a href="javascript:void(0)">Sustainability</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                We believe in doing business responsibly. Our inks are
                environmentally friendly, aligning with our commitment to
                sustainability. With our diverse product range and dedicated
                support, you’ll be well-equipped to make a significant impact.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>
            <div className="blog-item col-lg-12">
              <img src="" alt="" />
              <span className="blog-post-num"></span>
              <img src="assets/images/activity-four/promise_.png" alt="" />
              {/* <span className="blog-date">January 9, 2022</span> */}
              <h2 style={{ textAlign: 'center' }}>
                <a href="javascript:void(0)">Our Promise</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                By using our products, you are guaranteed 100% technical
                support, both online and offline, led by a team of over 17+
                experienced engineers.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityTwo;
