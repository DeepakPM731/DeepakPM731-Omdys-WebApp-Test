import { useEffect } from 'react';

const ActivityThree = () => {
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
                  Tools and Equipment Supply
                </h2>
                {/* <p>our values and vaulted us to the top of our industry.</p> */}
              </div>
            </div>
          </div>
          <div className="breadcrums">
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
          </div>
        </section>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="who-we-are">
              <div>
                <h3 className="mb-5 text-center" style={{ fontSize: '48px' }}>
                  Wide Range of Products
                </h3>
                {/* <p style={{ textAlign: 'justify' }}> */}
                <p style={{ fontSize: '20px', textAlign: 'center' }}>
                  We offer a broad selection of tools and equipment, ensuring
                  that our customers have the best resources tailored to their
                  unique needs. Our unwavering commitment to quality and
                  customer satisfaction distinguishes us in the industry. We are
                  dedicated to delivering top-tier products and services that
                  enhance our customers’ operations. Our product portfolio
                  includes everything from hand tools, and power tools, to
                  specialized equipment.
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
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">
                      List of tools that we provide:
                    </a>
                  </h3>
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
                          <b style={{ color: 'red' }}>1. Hand Tools:</b> This
                          includes hammers, screwdrivers, pliers, wrenches, and
                          tape measures.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>2. Power Tools:</b>{' '}
                          Drills, circular saws, jigsaws, and angle grinders are
                          some examples.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>3. Gardening Tools:</b>{' '}
                          Shovels, rakes, pruning shears, and garden hoses are
                          typically available.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            4. Electrical Tools and Supplies:
                          </b>{' '}
                          This includes wire strippers, voltage testers,
                          extension cords, and light bulbs.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            {' '}
                            5. Plumbing Tools and Supplies:
                          </b>{' '}
                          Pipe wrenches, pipe cutters, washers, and sealants can
                          be found.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>6. Safety Equipment:</b>{' '}
                          Safety glasses, work gloves, earplugs, and hard hats
                          are often sold.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>7. Fasteners:</b> Nails,
                          screws, nuts, and bolts of various sizes are typically
                          available.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>8. Building Materials:</b>{' '}
                          This can include items like cement, sand, bricks, and
                          tiles.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            9. Hardware Accessories:{' '}
                          </b>{' '}
                          Items such as hinges, handles, hooks, and shelf
                          brackets are usually available.
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
                      src="assets/svg4/industrial construction tools and equipment (2).svg"
                      alt="Our Project One Image 1"
                    />
                  </figure>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                Remember, the type of PPE needed can vary depending on the
                specific job and work environment. Always ensure that the PPE is
                appropriate for the task at hand, fits properly, and meets
                industry safety standards. Trust Omdys International Group for
                all your personal protection and safety equipment needs.
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
                Remember, the type of PPE needed can vary depending on the
                specific job and work environment. Always ensure that the PPE is
                appropriate for the task at hand, fits properly, and meets
                industry safety standards. Trust Omdys International Group for
                all your personal protection and safety equipment needs.
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
                customer service and ensure your satisfaction
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">Training and Consultation</a>
                  </h3>
                </div>
              </div>
              <p className="m-4 " style={{ fontSize: '20px' }}>
                We provide training on the use of our tools and equipment. We
                also offer consultation services to help you choose the right
                tools and equipment for your specific needs. With our diverse
                product range, quality assurance, and dedicated support, you’ll
                be well-equipped to make a significant impact.
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

export default ActivityThree;
