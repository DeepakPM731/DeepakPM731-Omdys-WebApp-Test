import { useEffect } from 'react';

const ServiceTwo = () => {
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
      {/* service starts */}
      <>
        <br />
        <div className="heading" style={{ marginTop: '', marginBottom: '5%' }}>
          <figure>
            <img src="assets/images/heading-icon.png" alt="heading-icon" />
          </figure>
          {/* <span>Let us help with our products</span> */}
          <h2>Product Management</h2>
        </div>
        <div
          className="container center justify-content-center"
          style={{ textAlign: 'center' }}
        >
          <img
            className="industry "
            data-aos="fade-up-left"
            style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
            src="assets/images/activity-four/svg/log/Product Management_.svg"
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
                  {' '}
                  {/* <div className="data"> */}
                  {/* <h2>Product Management</h2> */}
                  <ul>
                    {/* <ul data-aos="fade-down"> */}
                    <li>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        {' '}
                        <b>Managing Product Specifications:</b> At OMDYS
                        International LLP, we meticulously manage product
                        specifications to ensure they meet client requirements
                        and adhere to industry standards. Our team works closely
                        with clients to understand their precise needs and
                        translates them into detailed product specifications.
                      </p>
                    </li>

                    <li>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        <b>Product Sourcing:</b> We leverage our extensive
                        network to source high-quality products from reliable
                        suppliers worldwide. Our strategic sourcing practices
                        ensure that we can provide clients with the best
                        products at competitive prices.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        <b> Sampling and Pre-Production Approvals:</b> Before
                        mass production, we handle the sampling process and
                        secure pre-production approvals from our clients. This
                        step ensures that the final product aligns perfectly
                        with client expectations and specifications.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        <b>Production Monitoring:</b> During the manufacturing
                        process, we continuously monitor production to ensure
                        everything is on track. Our proactive approach helps in
                        identifying and resolving any issues promptly,
                        maintaining the production schedule
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        <b>Quality Control:</b> Ensuring quality is a top
                        priority at OMDYS International LLP. We implement
                        rigorous quality control measures throughout the
                        manufacturing process to ensure that every product meets
                        the highest standards of quality.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        <b> Compliance Assurance:</b> We ensure that all
                        products comply with relevant regulatory and industry
                        standards. Our compliance assurance process includes
                        thorough checks and validations to meet international
                        quality and safety requirements.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        <b>Post-Production Support: </b>Our commitment to client
                        satisfaction extends beyond production. We offer
                        post-production support, including logistics management,
                        timely delivery, and addressing any after-sales
                        queries or issues.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        <b>Vendor Coordination:</b> We coordinate closely with
                        vendors and manufacturers to ensure seamless
                        communication and efficient production processes. Our
                        relationships with trusted suppliers enable us to manage
                        production timelines effectively.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default ServiceTwo;
