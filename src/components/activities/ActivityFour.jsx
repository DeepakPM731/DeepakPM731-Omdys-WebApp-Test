import { useEffect } from 'react';

const ActivityFour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="who-we-are">
              <div>
                {/* <h3 className="mb-5 text-center" style={{ fontSize: '48px' }}>
                  Wide Range of Products
                </h3> */}
                {/* <p style={{ textAlign: 'justify' }}> */}
                <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                  Omdys International LLP is committed to offering comprehensive
                  service support in the oil and gas sector. Our primary focus
                  is on the procurement and distribution of petroleum and
                  petrochemical products to our clientele. We adhere strictly to
                  International Standard working practices in all our business
                  operations. At Omdys International LLP, we believe in building
                  long-term relationships with our clients and look forward to
                  serving you and meeting your Industrial Chemical needs.
                </p>
              </div>
              <figure>
                {/* <img
                    className="w-100"
                    src="https://winsfolio.net/html/builty/assets/images/about-d-1.jpg"
                    alt="About Image One"
                  /> */}
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* starts */}
      {/* <section className="gap no-top project-completed our-projects-one"> */}
      <section className=" no-top project-completed our-projects-one">
        <div className="prj-post mb-2">
          <div className="container">
            <h3 className="mb-5 mt-5 text-center" style={{ fontSize: '48px' }}>
              PETROLEUM PRODUCTS
            </h3>
            <p style={{ fontSize: '20px' }}>
              We offer a wide range of petroleum products, including crude oil,
              gasoline, diesel, jet fuel, and heating oil. Our products are
              sourced from reliable suppliers, ensuring quality and consistency.
            </p>
            <br />
            <p>
              <b>
                Here is a list of major materials that we can provide / supply
                to you:
              </b>
            </p>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  {/* <h3 className="mt-4">
                    <a href="project-detail.html">
                      Here is a list of major materials that we can provide /
                      supply to you:
                    </a>
                  </h3> */}
                  {/* <p>
                    We provide high-quality eco-solvent inks that are perfect
                    for a wide range of printing tasks. Our inks ensure vibrant
                    colors and excellent adhesion on various media types.
                  </p> */}

                  {/* ----------------------- */}

                  {/* ----------------------- */}

                  <div
                    className="loc-date"
                    style={{
                      height: '',
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <ol style={{ listStyle: 'none', float: 'left' }} type="1">
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            1. Drilling Equipment:{' '}
                          </b>{' '}
                          This This includes drill pipes, drill collars, and
                          drilling bits
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>2. Safety Equipment: </b>{' '}
                          Personal Protective Equipment (PPE) such as helmets,
                          safety shoes, gloves, and safety harnesses are
                          essential for the safety of the workers.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>3. Valves and Pumps: </b>{' '}
                          These are used for controlling the flow of oil and gas
                          in the refinery or rig.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>4. Pipes and Tubing:</b>{' '}
                          These are used for transporting oil and gas from the
                          well to the processing facilities.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}> 5. Seals and Gaskets</b>{' '}
                          These are used to prevent leaks in the various
                          equipment and piping systems.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>6. Catalysts: </b> These
                          are used in various refining processes to speed up
                          chemical reactions.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>7. Chemicals: </b> Various
                          chemicals are used in the drilling process, for
                          treating oil and gas, and for maintaining equipment
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            8. Electrical Equipment:{' '}
                          </b>{' '}
                          This includes generators, motors, cables, and lighting
                          equipment.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            9. Instrumentation Equipment:{' '}
                          </b>{' '}
                          Instruments for measuring pressure, temperature, flow
                          rate, and other parameters are crucial for the safe
                          and efficient operation of the refinery or rig.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img
                      src="assets/svg4/petroleum and petrochemical products (2).svg"
                      alt="Our Project One Image 1"
                    />
                  </figure>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                Please note that the specific materials required can vary
                depending on the type of refinery or rig, the nature of the
                operations, and the specific requirements of the project.
              </p>
            </div>
          </div>
        </div>
        <div className="prj-post mb-2">
          <div className="container">
            <h3 className="mb-5 mt-5 text-center" style={{ fontSize: '48px' }}>
              PETROCHEMICAL PRODUCTS
            </h3>
            <p style={{ fontSize: '20px' }}>
              Our portfolio of petrochemical products includes ethylene,
              propylene, butadiene, and aromatics. These are essential raw
              materials for a variety of industries, including plastics, rubber,
              and synthetic fibers.
            </p>
            <br />
            <p>
              <b>
                Here is a list of common materials required for Petrochemical
                companies:
              </b>
            </p>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  {/* <h3 className="mt-4">
                    <a href="project-detail.html">
                      Here is a list of major materials that we can provide /
                      supply to you:
                    </a>
                  </h3> */}
                  {/* <p>
                    We provide high-quality eco-solvent inks that are perfect
                    for a wide range of printing tasks. Our inks ensure vibrant
                    colors and excellent adhesion on various media types.
                  </p> */}

                  {/* ----------------------- */}

                  {/* ----------------------- */}

                  <div
                    className="loc-date"
                    style={{
                      height: '',
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <ol style={{ listStyle: 'none', float: 'left' }} type="1">
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>1. Catalysts: </b>{' '}
                          Catalysts are substances that speed up chemical
                          reactions without being consumed in the process. They
                          are crucial in many petrochemical processes.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>2. Chemicals: </b> A
                          variety of chemicals are used in the petrochemical
                          industry for various processes. These include acids,
                          bases, solvents, and salts.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>3. Pipes and Valves: </b>{' '}
                          These are used for transporting raw materials,
                          intermediates, and finished products within the plant.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>4. Tanks and Vessels: </b>{' '}
                          These are used for storing raw materials,
                          intermediates, and finished products.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}> 5. Safety Equipment: </b>{' '}
                          Personal Protective Equipment (PPE) such as helmets,
                          safety shoes, gloves, and safety harnesses are
                          essential for the safety of the workers.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            6. Instrumentation Equipment:{' '}
                          </b>{' '}
                          Instruments for measuring pressure, temperature, flow
                          rate, and other parameters are crucial for the safe
                          and efficient operation of the plant.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            7. Maintenance Supplies:{' '}
                          </b>{' '}
                          These include tools, lubricants, gaskets, seals, and
                          cleaning supplies.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img
                      src="assets/svg4/petroleum and petrochemical products.svg"
                      alt="Our Project One Image 1"
                    />
                  </figure>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                Please note that the specific materials required can vary
                depending on the type of petrochemical processes being carried
                out, the nature of the operations, and the specific requirements
                of the project.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="prj-post">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3>
                    <a href="project-detail.html">Media Supplies</a>
                  </h3>
                  <p>
                    Our range of media supplies includes everything from vinyl,
                    and canvas, to banner materials. These are specially
                    designed to work with eco-solvent inks, ensuring
                    high-quality prints every time.
                  </p>
                 
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img
                      src="assets/svg/3.svg"
                      alt="Our Project One Image 2"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="prj-post mb-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">Quality Assurance</a>
                  </h3>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                We are committed to providing high-quality products. All the
                Industrial Chemical products that are supplied by us undergo
                rigorous quality checks to ensure they meet the highest
                standards.
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">Competitive Pricing</a>
                  </h3>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                We understand the importance of cost-effectiveness in your
                business. That’s why we offer our products at competitive
                prices, ensuring you get the best value for your money.
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">Timely Delivery</a>
                  </h3>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                We have efficient logistics in place to ensure timely delivery
                of your orders. We understand that in your business, time is of
                the essence.
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">Customer Support</a>
                  </h3>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                Our dedicated customer support team is always ready to assist
                you with any queries or issues. We strive to provide excellent
                customer service and ensure your satisfaction.
              </p>
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
