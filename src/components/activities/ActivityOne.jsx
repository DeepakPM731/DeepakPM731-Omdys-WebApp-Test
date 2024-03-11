import { useEffect } from 'react';

const ActivityOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(/src/assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2>COMPREHENSIVE PRINTING SOLUTIONS</h2>
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
      {/* Banner ends */}
      <section className="gap about-first">
        <div className="container">
          {/* <div className="row">
            <h2 style={{ textAlign: 'center' }}>
              COMPREHENSIVE PRINTING SOLUTIONS
            </h2>
          </div> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="who-we-are">
                <div>
                  {/* <h3>Who We Are?</h3> */}
                  {/* <p style={{ textAlign: 'justify' }}> */}
                  <p style={{ fontSize: '20px', textAlign: 'center' }}>
                    We provide a wide range of printing solutions, customized to
                    meet various printing needs. Our offerings include a supply
                    of high-quality inks, state-of-the-art printing equipment,
                    and exceptional customer service. In addition to our core
                    services, we also offer consultation services to help our
                    clients choose the right printing solutions for their needs.
                    Our team of experts is always ready to provide advice and
                    recommendations based on the specific requirements of each
                    project.
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
            {/* <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>What's in it for me?</h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Cost Savings &
                      Efficiency
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Quality &
                      Reliability
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" />
                      Time Savings & Expertise
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" />
                      One-Stop Solution
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Access to
                      Exclusive Products & Suppliers
                    </li>
                  </ul>
                </div>
                <figure>
                  <img
                    className="w-100"
                    src="https://winsfolio.net/html/builty/assets/images/about-d-2.jpg"
                    alt="About Image Two "
                  />
                </figure>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <>
        {/* Our Project One Start */}
        <section className="gap no-top project-completed our-projects-one">
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Ink Supply</a>
                    </h3>
                    <p>
                      We provide high-quality eco-solvent inks that are perfect
                      for a wide range of printing tasks. Our inks ensure
                      vibrant colors and excellent adhesion on various media
                      types.
                    </p>
                    <div className="loc-date">
                      <div>
                        <span>
                          <b>Eco-Solvent Inks</b>
                        </span>
                        {/* <span>United State</span> */}
                        <p>
                          We offer a range of eco-solvent inks that are perfect
                          for a wide variety of printing tasks. These inks are
                          environmentally friendly and ensure vibrant colors and
                          excellent adhesion on various media types.
                        </p>
                      </div>
                      <div>
                        <span>
                          <b>UV Inks</b>
                        </span>
                        {/* <span>United State</span> */}
                        <p>
                          Our UV inks are designed for applications that require
                          high print quality and durability. These inks are
                          cured by UV light, making them resistant to fading and
                          weathering
                        </p>
                      </div>
                      <div>
                        <span>
                          <b>Solvent-Based Inks</b>
                        </span>
                        {/* <span>United State</span> */}
                        <p className="mb-4">
                          We supply high-quality solvent-based inks that are
                          ideal for outdoor applications. These inks are durable
                          and resistant to various environmental conditions.
                        </p>
                      </div>
                      {/* <div>
                        <span>DATE:</span>
                        <span>1990-2000</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="data">
                    <figure>
                      <img
                        src="/src/assets/svg/2.svg"
                        alt="Our Project One Image 1"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-post">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3>
                      <a href="project-detail.html">Media Supplies</a>
                    </h3>
                    <p>
                      Our range of media supplies includes everything from
                      vinyl, and canvas, to banner materials. These are
                      specially designed to work with eco-solvent inks, ensuring
                      high-quality prints every time.
                    </p>
                    {/* <div className="loc-date">
                      <div>
                        <span>LOCATION:</span>
                        <span>United State</span>
                      </div>
                      <div>
                        <span>DATE:</span>
                        <span>1990-2000</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="data">
                    <figure>
                      <img
                        src="/src/assets/svg/3.svg"
                        alt="Our Project One Image 2"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3>
                      <a href="project-detail.html">Printing Equipment</a>
                    </h3>
                    <p>
                      We offer a selection of top-notch eco-solvent, UV, and
                      solvent-based printers. These machines are designed for
                      efficiency and reliability, enabling you to deliver
                      high-quality prints to your customers.
                    </p>
                    {/* <div className="loc-date">
                      <div>
                        <span>LOCATION:</span>
                        <span>United State</span>
                      </div>
                      <div>
                        <span>DATE:</span>
                        <span>1990-2000</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="data">
                    <figure>
                      <img
                        src="/src/assets/svg/4.svg"
                        alt="Our Project One Image 3"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3>
                      <a href="project-detail.html">Product Quality</a>
                    </h3>
                    <p>
                      We are committed to providing high-quality products. Our
                      inks are sourced from reputable manufacturers and undergo
                      rigorous quality checks to ensure they meet the highest
                      standards
                    </p>
                    {/* <div className="loc-date">
                      <div>
                        <span>LOCATION:</span>
                        <span>United State</span>
                      </div>
                      <div>
                        <span>DATE:</span>
                        <span>1990-2000</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="data">
                    <figure>
                      <img
                        src="/src/assets/svg/2.svg"
                        alt="Our Project One Image 4"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3>
                      <a href="project-detail.html">Technical Support</a>
                    </h3>
                    <p>
                      Our dedicated team of experts is always ready to assist
                      you with any technical issues. We aim to ensure your
                      printing operations run smoothly.
                    </p>
                    {/* <div className="loc-date">
                      <div>
                        <span>LOCATION:</span>
                        <span>United State</span>
                      </div>
                      <div>
                        <span>DATE:</span>
                        <span>1990-2000</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="data">
                    <figure>
                      <img
                        src="/src/assets/svg/4.svg"
                        alt="Our Project One Image 5"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3>
                      <a href="project-detail.html">Training</a>
                    </h3>
                    <p>
                      We provide comprehensive training on the use of our
                      eco-solvent, UV, and solvent-based printers and supplies.
                      This will equip you with the necessary skills to deliver
                      outstanding printing services.
                    </p>
                    {/* <div className="loc-date">
                      <div>
                        <span>LOCATION:</span>
                        <span>United State</span>
                      </div>
                      <div>
                        <span>DATE:</span>
                        <span>1990-2000</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="data">
                    <figure>
                      <img
                        src="/src/assets/svg/3.svg"
                        alt="Our Project One Image 6"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3>
                      <a href="project-detail.html">Sustainability</a>
                    </h3>
                    <p>
                      We believe in doing business responsibly. Our inks are
                      environmentally friendly, aligning with our commitment to
                      sustainability. With our diverse product range and
                      dedicated support, you’ll be well-equipped to make a
                      significant impact.
                    </p>
                    {/* <div className="loc-date">
                      <div>
                        <span>LOCATION:</span>
                        <span>United State</span>
                      </div>
                      <div>
                        <span>DATE:</span>
                        <span>1990-2000</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="data">
                    <figure>
                      <img
                        src="/src/assets/svg/3.svg"
                        alt="Our Project One Image 6"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="proj-data">
                    <h3>
                      <a href="project-detail.html">Our Promise</a>
                    </h3>
                    <p>
                      By using our products, you are guaranteed 100% technical
                      support, both online and offline, led by a team of over
                      17+ experienced engineers.
                    </p>
                    {/* <div className="loc-date">
                      <div>
                        <span>LOCATION:</span>
                        <span>United State</span>
                      </div>
                      <div>
                        <span>DATE:</span>
                        <span>1990-2000</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="data">
                    <figure>
                      <img
                        src="https://via.placeholder.com/970x570"
                        alt="Our Project One Image 6"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container">
            <div className="row">
              <div className="builty-pagination">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="JavaScript:void(0)">
                        <i className="fa-solid fa-arrow-left-long" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="JavaScript:void(0)">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="JavaScript:void(0)">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="JavaScript:void(0)">
                        03
                      </a>
                    </li>
                    <li className="page-item space">
                      <a className="page-link" href="JavaScript:void(0)">
                        ..........
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="JavaScript:void(0)">
                        08
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="JavaScript:void(0)">
                        <i className="fa-solid fa-arrow-right-long" />{' '}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div> */}
        </section>
        {/* Our Project One End */}
      </>
    </>
  );
};

export default ActivityOne;
