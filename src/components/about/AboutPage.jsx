// import About from './About';

import { useEffect } from 'react';
import Counter from '../Counter';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        {/* <div style={{ marginBottom: '100px' }}> */}
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2>About Us</h2>
                <p>CONNECTING MARKETS, DELIVERING EXCELLENCE</p>
              </div>
            </div>
          </div>
          <div className="breadcrums">
            <div className="container">
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
            </div>
          </div>
        </section>
      </div>

      {/* <About /> */}
      {/* --------------test-------------------- */}

      {/* --------------test-------------------- */}
      <>
        {/* About-First Start */}
        <section className="gap about-first">
          <div className="container">
            <div className="row">
              <h2 className="abouthead">
                “ THINK BEYOND BORDERS, AND TRADE WITH TRUST. YOUR
                MULTI-FUNCTIONAL GATEWAY – OMDYS INTERNATIONAL. ”
              </h2>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------ */}
          <div className="container" style={{}}>
            <img
              className="industry"
              style={{ width: '100%' }}
              // src="assets/svg4/petroleum and petrochemical products (2).svg"
              src="https://s3.ap-south-1.amazonaws.com/omdys.com/whoweare1.svg"
              alt="Our Project One Image 1"
            />
          </div>
          {/* ------------------------------------------------------------------------------------------------ */}
          <div className="container">
            <br />
            <h2
              style={{
                fontSize: '34px',
                color: '#444',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Who We Are?
            </h2>
            <p style={{ textAlign: 'justify' }}>
              Born in the heart of industrial-Hosur, Tamil Nadu, OMDYS
              International LLP is a young and dynamic sourcing and trading
              company. With a wealth of experience under our belt, we have a
              proven track record of connecting businesses with the right
              suppliers and products. Our expertise lies in understanding your
              specific needs and tailoring solutions that maximize your value
              and minimize procurement challenges. We connect businesses with
              the best suppliers and products, streamlining their procurement
              processes and ensuring cost-efficiency.
              <br />
              <br />
              Our team is dedicated to providing comprehensive sourcing
              solutions, from identifying reliable suppliers to managing the
              logistics and delivery of goods. We leverage our extensive network
              and market knowledge to offer competitive pricing and high-quality
              products, ensuring that our clients receive the best possible
              value. At OMDYS International LLP, we believe in building
              long-term partnerships with our clients by delivering exceptional
              service and support. Our commitment to excellence and customer
              satisfaction drives us to continuously innovate and improve our
              processes, making us a trusted partner in the sourcing and trading
              industry.
              <br />
              <br />
              {/* <b style={{ fontSize: '24px' }}>Our Main Services Include:</b>
              <br />
              <br />
              <b>Sourcing and Procurement Services: </b>We specialize in
              understanding your specific needs and tailoring solutions that
              maximize your value and minimize procurement challenges. We
              connect businesses with the best suppliers and products,
              streamlining their procurement processes and ensuring
              cost-efficiency.
              <br />
              <br />
              <b>Trading of Complete Printing Solutions:</b> We offer a wide
              range of printing solutions, from commercial printers to
              specialized printing equipment, catering to various industries and
              ensuring high-quality outputs.
              <br />
              <br />
              <img

                src="https://s3.ap-south-1.amazonaws.com/omdys.com/whoweare2.svg"
                className="whowearetwo"
                alt="About Image One"
                style={{
                  float: 'right',
                  marginLeft: '2%',
                }}
              />
              <b>Trading of Industrial Construction Tools and Equipment:</b> We
              provide a comprehensive selection of construction tools and
              equipment, supporting the needs of the industrial and construction
              sectors with reliable and durable products.
              <br />
              <br />
              <b>Trading of Petroleum Products:</b> Our portfolio includes
              various petroleum products, ensuring quality and competitive
              pricing to meet the demands of different industries.
              <br />
              <br />
              <b>Trading of Healthcare Products:</b> We supply a range of
              healthcare products, from Healthcare PPE Products to consumables,
              ensuring that healthcare providers have access to essential and
              high-quality items.
              <br />
              <br />
              <b>Trading of Electronics Components:</b> We offer a variety of
              electronic components, catering to the needs of manufacturers and
              businesses in the electronics industry with reliable and
              top-quality products.
              <br />
              <br />
              <b>
                At OMDYS International LLP, our goal is to simplify your
                sourcing and trading needs by offering a one-stop solution that
                ensures quality, efficiency, and cost-effectiveness.
              </b> */}
            </p>
          </div>
          {/* ------------------------------------------------------------------------------------------------ */}
        </section>
        {/* About-First End */}

        {/* Counter  Start*/}
        <Counter />
        {/* Counter  End*/}
        <>
          {/*About How It Works Start */}
          <section className="gap about-how-it-works light-bg-color">
            <div className="heading">
              <figure>
                <img src="assets/images/heading-icon.png" alt="Heading Icon" />
              </figure>
              <span>Organize + Monitor</span>
              <h2>How it Works</h2>
            </div>
            <div className="container">
              <figure style={{ position: 'relative', zIndex: 9 }}>
                <img
                  className="w-100"
                  // src="https://winsfolio.net/html/builty/assets/images/about-h-i-w.jpg"
                  // src="assets/svg4/howitworks.svg"
                  src="https://s3.ap-south-1.amazonaws.com/omdys.com/howitworks.svg"
                  alt="About How It Works"
                />
              </figure>
            </div>
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="plans">
                    <div className="y-box d-flex-all">1.</div>
                    <h3>Understand Your Needs</h3>
                    <p style={{ textAlign: 'justify' }}>
                      We begin by having an in-depth conversation to understand
                      your specific sourcing requirements. This includes the
                      type of products you need, desired quality standards,
                      budget constraints, and delivery timelines.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="plans">
                    <div className="y-box d-flex-all">2.</div>
                    <h3>Supplier Sourcing & Negotiation</h3>
                    <p style={{ textAlign: 'justify' }}>
                      Our experienced team leverages its extensive network to
                      identify qualified suppliers that meet your criteria. We
                      then negotiate competitive prices and terms on your
                      behalf, ensuring you receive the best value for your
                      budget.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="plans" style={{ paddingBottom: '60px' }}>
                    <div className="y-box d-flex-all">3.</div>
                    <h3>Quality Control & Assurance</h3>
                    <p style={{ textAlign: 'justify' }}>
                      We understand the importance of quality. We work closely
                      with our suppliers to ensure products meet your
                      specifications and industry standards. We also conduct
                      thorough quality control inspections before shipment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="plans" style={{ paddingBottom: '60px' }}>
                    <div className="y-box d-flex-all">4.</div>
                    <h3>Ongoing Support & Partnership</h3>
                    <p style={{ textAlign: 'justify' }}>
                      We believe in building long-term partnerships with our
                      clients. We offer ongoing support to ensure your sourcing
                      needs are consistently met and provide valuable insights
                      to optimize your procurement process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*About How It Works End */}
          <>
            {/*About Key Benefits Start */}
            <section className="gap about-key-benefits">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="data">
                      <figure className="keybenefitsfig">
                        <img
                          className="w-100 keybenefits"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/key_benefitsann.png"
                          // src="https://winsfolio.net/html/builty/assets/images/about-k-b.jpg"

                          alt="About key Benefits"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="data">
                      <h2>Key Benefits</h2>
                      <ul>
                        <li>
                          <i className="fa-solid fa-check" />
                          <p style={{ textAlign: 'justify' }}>
                            <b>Cost Savings through Strategic Sourcing:</b>{' '}
                            Discover how our deep market knowledge and supplier
                            network unlock competitive pricing, helping you
                            reduce procurement costs and maximize profitability
                          </p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          <p style={{ textAlign: 'justify' }}>
                            <b> Quality & Reliability:</b> Peace of Mind
                            Guaranteed: We prioritize quality in every step,
                            ensuring you receive consistent, high-quality
                            products from vetted suppliers, minimizing
                            disruption and maximizing operational efficiency.
                          </p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          <p style={{ textAlign: 'justify' }}>
                            <b> Time-Saving Solutions, Effortless Sourcing:</b>{' '}
                            Delegate your sourcing needs to our experienced team
                            and free up your valuable time and resources. We
                            handle everything from supplier selection to
                            logistics, streamlining your procurement process
                          </p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          <p style={{ textAlign: 'justify' }}>
                            <b>
                              Customized Solutions, Tailored for Your Success:
                            </b>{' '}
                            We go beyond generic solutions, offering tailored
                            sourcing strategies that align with your specific
                            industry and business goals. Get the perfect fit for
                            your unique needs and achieve your desired outcomes.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*About Key Benefits End */}
          </>
        </>
      </>
    </>
  );
};

export default AboutPage;
