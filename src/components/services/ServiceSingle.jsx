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
            <div className="breadcrums"></div>
          </section>
        </div>
        <hr />
        <div
          className="heading"
          style={{ marginTop: '30px', marginBottom: '5%' }}
        >
          <figure>
            <img src="assets/images/heading-icon.png" alt="heading-icon" />
          </figure>
          {/* <span>Let us help with our products</span> */}
          <h2>Our Main Services</h2>
        </div>

        {/* ---------------------------------------------------- */}
        <div className="container mt-5 mb-2">
          <div style={{ marginTop: '20px' }}>
            <section className="gap no-top core-values">
              <div className="container" style={{ marginBottom: '-5%' }}>
                <div className="row">
                  <ul>
                    <li style={{ marginTop: '-5%' }}>
                      <div className="data">
                        <h3>Trading Commodities</h3>
                        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                          Based in the industrial hub of Hosur, Tamil Nadu, we
                          specialize in sourcing and trading a wide range of
                          commodities, including pulses and grains. Our
                          extensive network ensures that businesses receive
                          high-quality raw materials and essential products at
                          competitive prices, tailored to their specific needs.
                          Our strategic location allows us to offer reliable
                          supply chains and efficient distribution.
                        </p>
                      </div>
                      <div className="image" data-aos="fade-right">
                        <figure>
                          <img
                            className="w-100"
                            src="assets/images/activity-four/svg/log/Face Mask.svg"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                            alt="Core Values Image 1"
                          />
                        </figure>
                      </div>
                    </li>
                    <li>
                      <div className="image" data-aos="fade-left">
                        <figure>
                          <img
                            className="w-100"
                            src="assets/images/activity-four/svg/log/Protective Apparel.svg"
                            // src="assets/images/activity-four/gowns.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                            alt="Core Values Image 1"
                          />
                        </figure>
                      </div>
                      <div className="data">
                        <h3>Selling Products</h3>
                        <p style={{ fontSize: '18px' }}>
                          We offer an extensive variety of products across
                          multiple industries, focusing on reliability and
                          cost-effectiveness. Our product range is tailored to
                          meet the diverse needs of our clients, ensuring they
                          receive top-quality items that enhance their
                          operations. From manufacturing to retail, we provide
                          solutions that are critical to the success of our
                          clients.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="data">
                        <h3> Logistics and Timely Delivery</h3>
                        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                          Ensuring timely delivery is a cornerstone of our
                          operations. We meticulously manage logistics to ensure
                          that our clients receive their goods as scheduled. Our
                          robust supply chain solutions are designed to minimize
                          delays, optimize delivery efficiency, and ensure that
                          products reach their destinations in perfect
                          condition.
                        </p>
                      </div>
                      <div className="image" data-aos="fade-right">
                        <figure>
                          <img
                            className="w-100"
                            src="assets/images/activity-four/svg/log/Hand Gloves.svg"
                            // src="assets/images/activity-four/gloves.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                            alt="Core Values Image 1"
                          />
                        </figure>
                      </div>
                    </li>
                    <li>
                      <div className="image" data-aos="fade-left">
                        <figure>
                          <img
                            className="w-100"
                            src="https://s3.ap-south-1.amazonaws.com/omdys.com/Printing+Solutions.svg"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                            alt="Core Values Image 1"
                          />
                        </figure>
                      </div>
                      <div className="data">
                        <h3>Printing Solutions</h3>
                        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                          We import and supply comprehensive printing solutions,
                          including commercial printers and specialized printing
                          equipment. Catering to industries such as publishing,
                          packaging, and advertising, our products ensure
                          high-quality outputs and improved operational
                          efficiency. Our strategic location facilitates smooth
                          import and distribution across India.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="data">
                        <h3>Oil & Gas Products</h3>
                        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                          Our portfolio includes various petroleum and
                          petrochemical products, imported to ensure quality and
                          competitive pricing. These products are vital for
                          industries such as energy, manufacturing, and
                          transportation. Our expertise in sourcing and
                          logistics allows us to meet the diverse needs of these
                          industries, providing essential materials that support
                          their operations.
                        </p>
                      </div>
                      <div className="image" data-aos="fade-left">
                        <figure>
                          <img
                            className="w-100"
                            src="https://s3.ap-south-1.amazonaws.com/omdys.com/Printing+Solutions.svg"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                            alt="Core Values Image 1"
                          />
                        </figure>
                      </div>
                    </li>

                    <li>
                      <div className="image" data-aos="fade-right">
                        <figure>
                          <img
                            className="w-100"
                            src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                            // src="assets/images/activity-four/sanitizer.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/training_ann.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                            alt="Core Values Image 1"
                          />
                        </figure>
                      </div>
                      <div className="data">
                        <h3>Health Care PPE Products</h3>
                        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                          We import and supply high-quality Health Care personal
                          protective equipment (PPE), ensuring healthcare
                          providers have access to essential protective gear.
                          Our products include masks, gloves, gowns, and other
                          PPE items that meet stringent safety standards. Our
                          location enables us to efficiently manage the import
                          and distribution of these critical supplies to
                          hospitals and healthcare facilities across India.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="data">
                        <h3>Electronics Components</h3>
                        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                          We offer a wide range of electronic components,
                          importing reliable and top-quality products for
                          manufacturers and businesses in the electronics
                          industry. Our components are essential for ensuring
                          the functionality and advancement of electronic
                          devices and systems. Located in a region known for its
                          industrial activity, we are well-positioned to supply
                          these components to a broad range of clients,
                          supporting innovation and production in the
                          electronics sector.
                        </p>
                      </div>
                      <div className="image" data-aos="fade-right">
                        <figure>
                          <img
                            className="w-100"
                            src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
                            // src="assets/images/activity-four/sanitizer.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/training_ann.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                            alt="Core Values Image 1"
                          />
                        </figure>
                      </div>
                    </li>
                    <li>
                      <div className="image" data-aos="fade-right">
                        <figure>
                          <img
                            className="w-100"
                            src="https://s3.ap-south-1.amazonaws.com/omdys.com/industrial+construction+tools+and+equipment+(3).svg"
                            // src="assets/images/activity-four/sanitizer.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/training_ann.png"
                            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                            alt="Core Values Image 1"
                          />
                        </figure>
                      </div>
                      <div className="data">
                        <h3>Construction Tools & Equipments</h3>
                        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                          We import a wide selection of construction tools and
                          equipment essential for the industrial and
                          construction sectors. Known for their reliability and
                          durability, our products adhere to international
                          quality standards. Leveraging our strategic position,
                          we efficiently distribute these tools and equipment to
                          construction projects and industrial sites throughout
                          the region.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* ---------------------------------------------------- */}

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
                <div className="data" style={{ marginTop: '' }}>
                  {/* <div className="data"> */}
                  <h2>Supplier Identification & Sourcing</h2>
                  {/* <ul data-aos="fade-down"> */}
                  <ul>
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
                <div className="data" style={{ marginTop: '' }}>
                  {' '}
                  {/* <div className="data"> */}
                  <h2>Product Management</h2>
                  <ul>
                    {/* <ul data-aos="fade-down"> */}
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
                  <figure className="servicetwofig">
                    {/* <figure className="servicetwofig" data-aos="fade-right"> */}
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
                  <figure className="servicethreefig">
                    {/* <figure className="servicethreefig" data-aos="fade-left"> */}
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
                <div className="data" style={{ marginTop: '' }}>
                  {' '}
                  {/* <div className="data"> */}
                  <h2>Logistics & Shipping</h2>
                  <ul>
                    {/* <ul data-aos="fade-down"> */}
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
                <div className="data" style={{ marginTop: '' }}>
                  {' '}
                  {/* <div className="data"> */}
                  <h2>Risk Management</h2>
                  <ul>
                    {/* <ul data-aos="fade-down"> */}
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
                  <figure className="servicefourfig">
                    {/* <figure className="servicefourfig" data-aos="fade-right"> */}
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
