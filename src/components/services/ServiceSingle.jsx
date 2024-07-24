import { useEffect } from 'react';

const ServiceSingle = () => {
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
      {/* ---------------- */}

      {/* ---------------- */}
      {/* ------------1------------- */}
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
                  <h2>Services</h2>
                  {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  tenetur culpa rerum, ipsam odio voluptatem excepturi quasi!
                </p> */}
                </div>
              </div>
            </div>
            <div className="breadcrums">
              {/* <div className="container">
              <div className="row">
                <ul>
                  <li>
                    <a href="index.html">
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
        <hr />
        {/* service starts */}
        <section className="gap about-key-benefits">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="data">
                  <figure className="serviceonefig">
                    <img
                      className="w-100 serviceone"
                      // src="	https://winsfolio.net/html/builty/assets/images/about-k-b.jpg"
                      // src="assets/svg4/supplieridentification.svg"
                      // src="https://s3.ap-south-1.amazonaws.com/omdys.com/supplieridentification.svg"
                      // src="https://s3.ap-south-1.amazonaws.com/omdys.com/supplieridentification2.svg"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/supplieridentificationimg2.png"
                      alt="About key Benefits"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data" style={{ marginTop: '-150px' }}>
                  {/* <div className="data"> */}
                  <h2>Supplier Identification & Sourcing</h2>
                  <ul data-aos="fade-down">
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          {' '}
                          Identifying qualified and reliable suppliers based on
                          specific needs and market conditions
                        </b>
                      </p>
                    </li>
                    {/* <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      <b> </b>
                    </p>
                  </li> */}
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          Conducting detailed supplier audits to assess
                          capabilities, certifications, and ethical practices.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          Negotiating competitive prices and favorable terms
                          with suppliers on your behalf.
                        </b>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <hr />
      {/* ------------2------------- */}
      <>
        {/* service starts */}
        <section
          className="gap about-key-benefits"
          style={{ marginTop: '-8%' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="data" style={{ marginTop: '-150px' }}>
                  {' '}
                  {/* <div className="data"> */}
                  <h2>Product Management</h2>
                  <ul data-aos="fade-down">
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          {' '}
                          Managing product specifications, ensuring they meet
                          client requirements and industry standards.
                        </b>
                      </p>
                    </li>
                    {/* <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      <b> </b>
                    </p>
                  </li> */}
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          Handling product sourcing, sampling, and
                          pre-production approvals.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          Monitoring production and ensuring quality control
                          throughout the manufacturing process.
                        </b>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure className="servicetwofig" data-aos="fade-right">
                    <img
                      className="w-100"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/product_management.png"
                      // src="	https://winsfolio.net/html/builty/assets/images/about-k-b.jpg"
                      alt="About key Benefits"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </>
      {/* ------------3------------- */}
      <>
        {/* service starts */}
        <section
          className="gap about-key-benefits"
          style={{ marginTop: '-8%' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="data">
                  <figure className="servicethreefig" data-aos="fade-left">
                    <img
                      className="w-100"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/logistics.png"
                      // src="	https://winsfolio.net/html/builty/assets/images/about-k-b.jpg"
                      alt="About key Benefits"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data" style={{ marginTop: '-150px' }}>
                  {' '}
                  {/* <div className="data"> */}
                  <h2>Logistics & Shipping</h2>
                  <ul data-aos="fade-down">
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          {' '}
                          Coordinating transportation and logistics for imported
                          or exported goods, including customs clearance and
                          documentation.
                        </b>
                      </p>
                    </li>
                    {/* <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      <b> </b>
                    </p>
                  </li> */}
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          Negotiating optimal shipping rates and securing
                          reliable transportation partners.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          Providing real-time shipment tracking and status
                          updates.
                        </b>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <hr />
      {/* ------------4------------- */}
      <>
        {/* service starts */}
        <section
          className="gap about-key-benefits"
          style={{ marginTop: '-8%' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="data" style={{ marginTop: '-150px' }}>
                  {' '}
                  {/* <div className="data"> */}
                  <h2>Risk Management</h2>
                  <ul data-aos="fade-down">
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          {' '}
                          Identifying and mitigating potential risks throughout
                          the supply chain, including quality control issues,
                          production delays, and currency fluctuations.
                        </b>
                      </p>
                    </li>
                    {/* <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      <b> </b>
                    </p>
                  </li> */}
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          Implementing risk management strategies, such as
                          insurance or alternative suppliers, to minimize
                          potential losses.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p>
                        <b>
                          Maintaining compliance with import and export
                          regulations
                        </b>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure className="servicefourfig" data-aos="fade-right">
                    <img
                      className="w-100"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/risk_management.png"
                      // src="	https://winsfolio.net/html/builty/assets/images/about-k-b.jpg"
                      alt="About key Benefits"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default ServiceSingle;
