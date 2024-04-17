import { useEffect } from 'react';

const ActivityFive = () => {
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
                <h2 style={{ textAlign: 'center' }}>Trading Of Medical PPE</h2>
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
                <div style={{ textAlign: 'justify' }}>
                  <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                    At OMDYS, we understand the critical importance of personal
                    protective equipment (PPE) in safeguarding frontline workers
                    and healthcare professionals. As a trusted sourcing and
                    trading company, we are committed to providing high-quality
                    medical PPE products to meet the evolving needs of
                    healthcare facilities, government agencies, businesses, and
                    individuals worldwide.
                  </p>
                  {/* <br />
                  <p>
                    At OMDYS International LLP, we understand the critical role
                    that electronic components play in today's technology-driven
                    world. Whether you are a small-scale electronics hobbyist or
                    a large-scale manufacturer, we have the products and
                    services to support your projects and businesses.
                  </p> */}
                </div>
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

      <section className=" no-top project-completed our-projects-one">
        <div
          className="container mb-4"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <figure style={{ position: 'relative', zIndex: 9 }}>
            <img
              className=""
              src="assets/svg4/Medical PPE 2.svg"
              // src="https://winsfolio.net/html/builty/assets/images/about-h-i-w.jpg"
              alt="About How It Works"
            />
          </figure>
        </div>

        <div className="prj-post mb-2">
          <div className="container">
            <div className="row align-items-center" data-aos="fade-up-left">
              <div className="col-lg-12">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="project-detail.html">
                      Our Commitment to Quality and Compliance
                    </a>
                  </h3>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                At OMDYS, quality and compliance are at the forefront of
                everything we do. We understand the critical importance of
                reliable and effective PPE in protecting against infectious
                diseases and workplace hazards. That's why we adhere to
                stringent quality control measures and partner with reputable
                manufacturers who maintain the highest standards of production
                and safety.
              </p>

              <p className="m-4" style={{ fontSize: '20px' }}>
                All our PPE products undergo rigorous testing and certification
                to ensure compliance with global regulatory requirements,
                including FDA, CE, ISO, and ASTM standards. Whether it's
                surgical masks, respirators, gloves, or protective apparel, you
                can trust OMDYS to deliver PPE solutions that meet or exceed
                industry benchmarks for safety and performance.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------- */}
        <section className=" no-top project-completed our-projects-one">
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center" data-aos="fade-up-right">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Mission and Values</a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  {/* From microcontrollers to application-specific ICs, we carry a
                  wide variety of integrated circuits from leading
                  manufacturers. */}
                  <ul>
                    <li>
                      • Providing high-quality, certified PPE that meets
                      industry standards.
                    </li>
                    <li>
                      • Offering competitive prices and transparent business
                      practices.
                    </li>
                    <li>
                      • Ensuring timely delivery and exceptional customer
                      service.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center" data-aos="fade-up-left">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Team Expertise</a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  {/* Our selection of passive components includes resistors,
                  capacitors, inductors, and filters to support various circuit
                  designs and applications. */}
                  <li>
                    • Individual areas of expertise (e.g., sourcing, logistics,
                    regulatory compliance).
                  </li>
                  <li>• Relevant certifications or qualifications.</li>
                  <li>
                    • Combined experience in the medical field and supply chain
                    management.
                  </li>
                </p>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center" data-aos="fade-up-right">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Why Choose Us?</a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}> Quality Assurance:</b> We
                  prioritize quality and compliance with international standards
                  in all our products. Our stringent quality control measures
                  guarantee the reliability and effectiveness of the PPE items
                  we source and trade.
                </p>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}>Diverse Product Range:</b> From
                  face masks and gloves to protective suits and goggles, we
                  offer a comprehensive range of medical PPE products to address
                  various safety requirements across different industries and
                  sectors.
                </p>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}> Global Sourcing Network: </b>
                  Leveraging our extensive network of trusted manufacturers and
                  suppliers worldwide, we are able to source PPE products
                  efficiently and cost-effectively, ensuring timely delivery to
                  our clients.
                </p>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}> Customized Solutions:</b> We
                  understand that every client's needs are unique. That's why we
                  offer personalized solutions tailored to your specific
                  requirements, whether you need bulk orders, customized
                  packaging, or specialized PPE items.
                </p>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}>Reliability and Trust:</b> With
                  years of experience in the industry, we have earned a
                  reputation for reliability, transparency, and integrity in all
                  our business dealings. Our clients trust us to deliver
                  high-quality products consistently.
                </p>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center" data-aos="fade-up-left">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">
                        Our Extensive Product Portfolio
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4 " style={{ fontSize: '20px' }}>
                  At OMDYS, we offer a diverse range of medical PPE products
                  designed to address the specific needs of various industries
                  and sectors. Our comprehensive product portfolio includes:
                </p>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}>Protective Apparel: </b>Disposable
                  gowns, coveralls, aprons, and lab coats.
                </p>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}>Gloves:</b> Latex, nitrile, and
                  vinyl gloves for medical and non-medical use.
                </p>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}>Eye Protection:</b> Safety goggles
                  and face shields to protect against splashes and airborne
                  particles.
                </p>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  <b style={{ color: 'red' }}>Sanitizers and Disinfectants: </b>{' '}
                  Hand sanitizers, disinfectant wipes, and surface disinfectants
                  for maintaining hygiene protocols.
                </p>
              </div>
              <br />
              <p className="mx-1 my-2" style={{ fontSize: '20px' }}>
                <strong>
                  Trust OMDYS International LLP for all your medical PPE
                  sourcing requirements. Together, let's prioritize safety and
                  protect what matters most.
                </strong>
              </p>
              <br />
            </div>
          </div>
        </section>
        {/* </div>
        </div> */}
      </section>
    </>
  );
};

export default ActivityFive;
