import { useEffect } from 'react';

const ServiceFour = () => {
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
                <h2>Services</h2>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  tenetur culpa rerum, ipsam odio voluptatem excepturi quasi!
                </p> */}
              </div>
            </div>
          </div>
          {/* <div className="breadcrums"></div> */}
        </section>
      </div>
      {/* service starts */}
      <>
        <br />
        <div className="heading" style={{ marginTop: '', marginBottom: '5%' }}>
          <figure>
            <img src="assets/images/heading-icon.png" alt="heading-icon" />
          </figure>
          {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
          <h2>Risk Management</h2>
        </div>
        <div
          className="container center justify-content-center"
          style={{ textAlign: 'center' }}
        >
          <img
            className="industry "
            data-aos="fade-up-left"
            style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
            src="assets/images/activity-four/svg/log/Untitled design_.svg"
            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
            alt="Our Project One Image 1"
          />
        </div>
        {/* service starts */}
        <section
          className="gap about-key-benefits"
          style={{ marginTop: '-8%' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="data" style={{ marginTop: '' }}>
                  <br />
                  <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                    At OMDYS International LLP, we prioritize identifying and
                    mitigating potential risks throughout the supply chain,
                    including quality control issues, production delays, and
                    currency fluctuations. Our team implements comprehensive
                    risk management strategies, such as insurance or alternative
                    suppliers, to minimize potential losses and ensure business
                    continuity. We maintain strict compliance with import and
                    export regulations, safeguarding our operations against
                    legal and financial repercussions. By conducting thorough
                    quality control checks, we ensure that all products meet the
                    highest standards before reaching our clients. OMDYS
                    International LLP proactively addresses production delays by
                    maintaining robust communication with suppliers and
                    monitoring project timelines closely. We employ advanced
                    forecasting tools to manage currency fluctuations,
                    protecting our clients from unexpected cost variations. Our
                    risk management framework includes contingency planning,
                    allowing us to swiftly adapt to unforeseen challenges in the
                    supply chain. Regular audits and assessments help us
                    identify potential vulnerabilities in our processes,
                    enabling us to take corrective actions promptly. At OMDYS
                    International LLP, we believe that effective risk management
                    is crucial to delivering reliable and efficient service to
                    our clients, fostering long-term partnerships built on trust
                    and dependability.
                  </p>
                  <br /> {/* <div className="data"> */}
                  {/* <h2>Risk Management</h2> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default ServiceFour;
