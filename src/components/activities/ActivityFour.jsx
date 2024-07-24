import { useEffect } from 'react';

const ActivityFour = () => {
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
                  Industrial Chemical Products
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
              <figure
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  // src="assets/svg4/petroleum and petrochemical products (2).svg"
                  src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                  alt="Our Project One Image 1"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* starts */}
      {/* <section className="gap no-top project-completed our-projects-one"> */}

      {/* ============================================ */}

      {/* ============================================ */}
<br />
<br />
<br />
      <section className="gap innovation" style={{ marginTop: '-12%' }}>
        <div className="heading">
          <br />
          <div className="row align-items-center">
            <div className="col-lg-12"></div>
          </div>
        </div>

        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Petroleum Products</h2>
          <div className="container">
            <p
              className="twop m-4"
              style={{
                fontSize: '18px',
                textAlign: 'center',
                // margin: 0,
                // padding: 0,
                // whiteSpace: 'normal',
                // wordBreak: 'break-all',
                // lineHeight: '1.5',
                // wordSpacing: '0.5px',
                // hyphens: 'auto',
              }}
            >
              We offer a wide range of petroleum products, including crude oil,
              gasoline, diesel, jet fuel, and heating oil. Our products are
              sourced from reliable suppliers,
              <nobr>ensuring quality and consistency.</nobr>
            </p>
            <br />
            <p style={{ fontSize: '20px', textAlign: 'center' }}>
              <b>
                Here is a list of major materials that we can provide / supply
                to you:
              </b>
            </p>
            <br />
          </div>
          <div className="row">
            <ul>
              <li style={{ overflow: '' }} data-aos="fade-down">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '1%',
                      }}
                    >
                      Drilling Equipment
                    </p>
                    <br />
                    <b>{/* <b> Integrated Circuits (ICs):</b> */}</b>
                  </span>{' '}
                  This includes drill pipes, drill collars, and drilling bits.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-up">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '7%',
                      }}
                    >
                      Safety Equipment
                    </p>
                    <br />
                    <b> {/* <b> Passive Components:</b> */}</b>
                  </span>{' '}
                  Personal Protective Equipment (PPE) such as helmets, safety
                  shoes, gloves, and safety harnesses are essential for the
                  safety of the workers.
                </p>
              </li>
              <li data-aos="fade-down">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '-8%',
                      }}
                    >
                      Valves and Pumps
                    </p>
                    <br />
                    <b> {/* <b>Active Components:</b> */}</b>
                  </span>{' '}
                  These are used for controlling the flow of oil and gas in the
                  refinery or rig.
                </p>
              </li>
              <li data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '10px' }}
                />
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
                      Pipes and Tubing
                    </p>
                    <br />
                    <b>{/* <b>Connectors and Cables: </b> */}</b>
                  </span>
                  These are used for transporting oil and gas from the well to
                  the processing facilities.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-up">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '12px' }}
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
                      Seals and Gaskets
                    </p>
                    <br /> <b>{/* <b>Sensors and Modules: </b> */}</b>
                  </span>
                  These are used to prevent leaks in the various equipment and
                  piping systems.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '12px' }}
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
                      Catalysts
                    </p>{' '}
                    <br />
                    <b>{/* <b> LEDs and Displays: </b> */}</b>
                  </span>
                  These are used in various refining processes to speed up
                  chemical reactions.
                </p>
              </li>
              <li data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '10px' }}
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
                      Chemicals
                    </p>{' '}
                    <br />
                    <b>{/* <b> Power Supplies and Batteries: </b> */}</b>
                  </span>
                  Various chemicals are used in the drilling process, for
                  treating oil and gas, and for maintaining equipment
                </p>
              </li>
              <li data-aos="fade-up">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '-4%',
                      }}
                    >
                      Electrical Equipment
                    </p>{' '}
                    <br />
                    <b>{/* <b> Switches and Relays: </b> */}</b>
                  </span>
                  This includes generators, motors, cables, and lighting
                  equipment.
                </p>
              </li>
              <li data-aos="fade-down">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
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
                      Instrumentation Equipment
                    </p>{' '}
                    <br />
                    <b>{/* <b> Semiconductors: </b> */}</b>
                  </span>
                  Instruments for measuring pressure, temperature, flow rate,
                  and other parameters are crucial for the safe and efficient
                  operation of the refinery or rig.
                </p>
              </li>
              {/* <div className="container"> */}
              <p
                className="twop m-4"
                style={{ fontSize: '16px', textAlign: 'center' }}
              >
                Please note that the specific materials required can vary
                depending on the type of refinery or rig, the nature of the
                operations, and the specific requirements of the project.
              </p>
              {/* </div> */}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* below contents */}
      {/* ============================================================= */}

      <section className=" no-top project-completed our-projects-one">
        <div className="prj-post mb-2" style={{ marginTop: '-7.6rem' }}>
          <div className="container">
            <div className="row align-items-center" data-aos="fade-left">
              <div className="col-lg-6">
                <div className="proj-data" style={{ marginTop: '1rem' }}>
                  <h3 className="mt-4">
                    <a href="Javascript:void(0)">Quality Assurance</a>
                  </h3>
                </div>
              </div>
              <div className="container">
                <p
                  className="m-4"
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
                  We are committed to providing high-quality products. All the
                  Industrial Chemical products that are supplied by us undergo
                  rigorous quality checks to ensure they meet the highest
                  standards.
                </p>
              </div>
            </div>
            <div className="row align-items-center" data-aos="fade-right">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="Javascript:void(0)">Competitive Pricing</a>
                  </h3>
                </div>
              </div>
              <div className="container">
                <p
                  className="m-4"
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
                  We understand the importance of cost-effectiveness in your
                  business. That’s why we offer our products at competitive
                  prices, ensuring you get the best value for your money.
                </p>
              </div>
            </div>
            <div className="row align-items-center" data-aos="fade-left">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="Javascript:void(0)">Timely Delivery</a>
                  </h3>
                </div>
              </div>
              <div className="container">
                <p
                  className="m-4"
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
                  We have efficient logistics in place to ensure timely delivery
                  of your orders. We understand that in your business, time is
                  of the essence.
                </p>
              </div>
            </div>
            <div className="row align-items-center" data-aos="fade-right">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="Javascript:void(0)">Customer Support</a>
                  </h3>
                </div>
              </div>
              <div className="container">
                <p
                  className="m-4"
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
                  Our dedicated customer support team is always ready to assist
                  you with any queries or issues. We strive to provide excellent
                  customer service and ensure your satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
        </div> */}
      </section>
    </>
  );
};

export default ActivityFour;
