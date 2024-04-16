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
                  {/* Trading Of Electronics Components – Importing */}
                </h2>
                {/* <p>our values and vaulted us to the top of our industry.</p> */}
              </div>
            </div>
          </div>
          {/* <div className="breadcrums"> */}
          {/* <div className="container">
              <div className="row">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa-solid fa-house" />
                      <p>Home</p>
                    </a>
                  </li>
                  <li className="current">
                    <p>About Us</p>
                  </li>
                </ul>
              </div>
            </div> */}
          {/* </div> */}
        </section>
      </div>

      {/*============================================================== */}

      <div
        className=""
        style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
      />

      <div
        // className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          objectFit: 'cover',
          marginTop: '30px',
        }}
      >
        <img
          src="assets/svg4/Electronic Components 1.svg"
          alt=""
          // width={'100%'}
          // height={'500px'}
        />
      </div>
      <section
        className="gap innovation"
        style={{ marginTop: '-5%', marginBottom: '-7%' }}
      >
        <div className="heading">
          <div className="container" style={{ textAlign: 'justify' }}>
            <p style={{ fontSize: '20px', textAlign: 'justify' }}>
              Welcome to our Electronics Components Sourcing wing, your one-stop
              destination for all your electronic component needs. We specialize
              in sourcing and trading a wide range of electronic components to
              meet the diverse requirements of our clients.
            </p>
            <br />
            <p style={{ fontSize: '20px', textAlign: 'justify' }}>
              At OMDYS International LLP, we understand the critical role that
              electronic components play in today's technology-driven world.
              Whether you are a small-scale electronics hobbyist or a
              large-scale manufacturer, we have the products and services to
              support your projects and businesses.
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
                <p className="m-4" style={{ fontSize: '20px' }}>
                  At OMDYS International LLP, we offer an extensive range of
                  electronic components to cater to diverse needs and
                  applications. Our product catalogue includes:
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <ul>
              <li style={{ overflow: '' }}>
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Integrated Circuits (ICs)
                    </p>
                    <br />
                    <b>{/* <b> Integrated Circuits (ICs):</b> */}</b>
                  </span>{' '}
                  From microcontrollers to application-specific ICs, we carry a
                  wide variety of integrated circuits from leading
                  manufacturers.
                  <br />
                  <br />
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Passive Components
                    </p>
                    <br />
                    <b> {/* <b> Passive Components:</b> */}</b>
                  </span>{' '}
                  Our selection of passive components includes resistors,
                  capacitors, inductors, and filters to support various circuit
                  designs and applications.
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '13%',
                      }}
                    >
                      Active Components
                    </p>
                    <br />
                    <b> {/* <b>Active Components:</b> */}</b>
                  </span>{' '}
                  We stock a comprehensive range of active components such as
                  transistors, diodes, thyristors, and voltage regulators to
                  meet your requirements for signal processing and
                  amplification.
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '10%',
                      }}
                    >
                      Connectors and Cables
                    </p>
                    <br />
                    <b>{/* <b>Connectors and Cables: </b> */}</b>
                  </span>
                  Whether you need standard connectors or custom cable
                  assemblies, we offer a diverse range of connectors, cables,
                  and harnesses for seamless integration into your projects.
                  <br />
                  <br />
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '12%',
                      }}
                    >
                      Sensors and Modules
                    </p>
                    <br /> <b>{/* <b>Sensors and Modules: </b> */}</b>
                  </span>
                  Explore our selection of sensors and sensor modules for
                  measuring and monitoring various environmental parameters,
                  including temperature, humidity, pressure, and motion.
                  <br />
                  <br />
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      LEDs and Displays
                    </p>{' '}
                    <br />
                    <b>{/* <b> LEDs and Displays: </b> */}</b>
                  </span>
                  Illuminate your projects with our selection of LEDs, LCD
                  displays, OLED displays, and segment displays available in
                  different sizes, colors, and configurations.
                </p>
              </li>
              <li>
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '40px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Power Supplies and Batteries
                    </p>{' '}
                    <br />
                    <b>{/* <b> Power Supplies and Batteries: </b> */}</b>
                  </span>
                  Ensure reliable power delivery with our range of power
                  supplies, batteries, chargers, and DC-DC converters designed
                  for diverse applications.
                </p>
              </li>
              <li>
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '40px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Switches and Relays
                    </p>{' '}
                    <br />
                    <b>{/* <b> Switches and Relays: </b> */}</b>
                  </span>
                  Find the right switches, relays, and contactors for your
                  control and automation needs, including tactile switches,
                  rocker switches, and electromechanical relays
                </p>
              </li>
              <li>
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '40px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Semiconductors
                    </p>{' '}
                    <br />
                    <b>{/* <b> Semiconductors: </b> */}</b>
                  </span>
                  Browse through our collection of discrete semiconductors,
                  including power MOSFETs, IGBTs, Schottky diodes, and voltage
                  regulators, for efficient power management and control.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*============================================================== */}

      {/* <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="who-we-are">
              <div> */}
      {/* <h3 className="mb-5 text-center" style={{ fontSize: '48px' }}>
                  Wide Range of Products
                </h3> */}
      {/* <p style={{ textAlign: 'justify' }}> */}
      {/* <div style={{ textAlign: 'justify' }}>
                  <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                    Welcome to our Electronics Components Sourcing wing, your
                    one-stop destination for all your electronic component
                    needs. We specialize in sourcing and trading a wide range of
                    electronic components to meet the diverse requirements of
                    our clients.
                  </p>
                  <br />
                  <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                    At OMDYS International LLP, we understand the critical role
                    that electronic components play in today's technology-driven
                    world. Whether you are a small-scale electronics hobbyist or
                    a large-scale manufacturer, we have the products and
                    services to support your projects and businesses.
                  </p>
                </div>
              </div> */}
      {/* <figure> */}
      {/* <img
                    className="w-100"
                    src="https://winsfolio.net/html/builty/assets/images/about-d-1.jpg"
                    alt="About Image One"
                  /> */}
      {/* </figure> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* <section className=" no-top project-completed our-projects-one"> */}
      {/* <div className="container mb-4">
          <figure style={{ position: 'relative', zIndex: 9 }}> */}
      {/* <img
              className="w-100"
              src="assets/svg4/Electronic Components 2.svg"
              height={'500px'}
              width={'538px '}
              // src="https://winsfolio.net/html/builty/assets/images/about-h-i-w.jpg"
              alt="About How It Works"
            /> */}
      {/* </figure>
        </div> */}

      {/* <div className="prj-post mb-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">Our Product Range</a>
                  </h3>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                At OMDYS International LLP, we offer an extensive range of
                electronic components to cater to diverse needs and
                applications. Our product catalogue includes:
              </p>
            </div> */}

      {/* sub starts */}
      {/* <div className="mx-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Integrated Circuits (ICs):
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  From microcontrollers to application-specific ICs, we carry a
                  wide variety of integrated circuits from leading
                  manufacturers.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Passive Components:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  Our selection of passive components includes resistors,
                  capacitors, inductors, and filters to support various circuit
                  designs and applications.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Active Components:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  We stock a comprehensive range of active components such as
                  transistors, diodes, thyristors, and voltage regulators to
                  meet your requirements for signal processing and
                  amplification.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Connectors and Cables:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4 " style={{ fontSize: '20px' }}>
                  Whether you need standard connectors or custom cable
                  assemblies, we offer a diverse range of connectors, cables,
                  and harnesses for seamless integration into your projects.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Sensors and Modules:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4 " style={{ fontSize: '20px' }}>
                  Explore our selection of sensors and sensor modules for
                  measuring and monitoring various environmental parameters,
                  including temperature, humidity, pressure, and motion.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        LEDs and Displays:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4 " style={{ fontSize: '20px' }}>
                  Illuminate your projects with our selection of LEDs, LCD
                  displays, OLED displays, and segment displays available in
                  different sizes, colors, and configurations.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Power Supplies and Batteries:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4 " style={{ fontSize: '20px' }}>
                  Ensure reliable power delivery with our range of power
                  supplies, batteries, chargers, and DC-DC converters designed
                  for diverse applications.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Switches and Relays:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4 " style={{ fontSize: '20px' }}>
                  Find the right switches, relays, and contactors for your
                  control and automation needs, including tactile switches,
                  rocker switches, and electromechanical relays
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Semiconductors:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4 " style={{ fontSize: '20px' }}>
                  Browse through our collection of discrete semiconductors,
                  including power MOSFETs, IGBTs, Schottky diodes, and voltage
                  regulators, for efficient power management and control.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="proj-data">
                    <h3 className="mt-4" style={{ fontSize: '24px' }}>
                      <a href="project-detail.html" style={{ color: 'red' }}>
                        Enclosures and Hardware:
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4 " style={{ fontSize: '20px' }}>
                  Complete your electronic assemblies with our selection of
                  enclosures, heatsinks, PCB hardware, and mounting accessories
                  for added protection and durability.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      <section className=" no-top project-completed our-projects-one">
        <div className="prj-post mb-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">Our Commitment to Quality:</a>
                  </h3>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                At OMDYS International LLP, we understand the importance of
                quality and reliability in electronic components. That's why we
                source our products from reputable manufacturers and authorized
                distributors known for their commitment to excellence and
                adherence to industry standards.
              </p>
              <p className="m-4" style={{ fontSize: '20px' }}>
                Before adding any product to our catalog, our team of experts
                conducts rigorous quality assurance checks to ensure that each
                component meets our stringent criteria for performance,
                reliability, and durability.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="prj-post mb-2"> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="proj-data">
                <h3 className="mt-4">
                  <a href="project-detail.html">Contact Us:</a>
                </h3>
              </div>
            </div>
            <p className="m-4" style={{ fontSize: '20px' }}>
              Ready to experience the difference with OMDYS International, Get
              in touch with us today to discuss your requirements, request a
              quote, or learn more about our products and services. Our
              dedicated team is here to assist you every step of the way and
              help you find the perfect electronic components for your projects
              and productions.
            </p>
            <p className="m-4" style={{ fontSize: '20px' }}>
              Thank you for choosing OMDYS International LLP as your trusted
              partner in electronic component procurement and sourcing. We look
              forward to serving you!
            </p>
          </div>
        </div>
        {/* </div> */}
        {/* </section> */}
        {/* </div>
        </div> */}
      </section>
    </>
  );
};

export default ActivityTwo;
