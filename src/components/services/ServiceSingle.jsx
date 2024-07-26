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
  useEffect(() => {
    setTimeout(() => {
      window.$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
      });
    }, 100); // Delay initialization
  }, []);
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
                            src="assets/images/activity-four/svg/log/Trading Commodities_.svg"
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
                            src="assets/images/activity-four/svg/log/Selling Products_.svg"
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
                            src="assets/images/activity-four/svg/log/Logistics and Timely Delivery_.svg"
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
                            src="assets/images/activity-four/svg/log/Printing Solutions_.svg"
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
                          <a href="/activity-one">( Know More )</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="data">
                        <h3>Oil & Gas Equipment Supply</h3>
                        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                          Our portfolio includes various petroleum and
                          petrochemical products, imported to ensure quality and
                          competitive pricing. These products are vital for
                          industries such as energy, manufacturing, and
                          transportation. Our expertise in sourcing and
                          logistics allows us to meet the diverse needs of these
                          industries, providing essential materials that support
                          their operations.
                          <a href="/activity-four">( Know More )</a>
                        </p>
                      </div>
                      <div className="image" data-aos="fade-left">
                        <figure>
                          <img
                            className="w-100"
                            src="assets/images/activity-four/svg/log/Oil and Gas_.svg"
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
                            src="assets/images/activity-four/svg/log/Health Care PPE_.svg"
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
                          <a href="/activity-five">( Know More )</a>
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
                          <a href="/activity-two">( Know More )</a>
                        </p>
                      </div>
                      <div className="image" data-aos="fade-right">
                        <figure>
                          <img
                            className="w-100"
                            src="assets/images/activity-four/svg/log/Electronics Components_.svg"
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
                            src="assets/images/activity-four/svg/log/Industrial Construction Tools & Equipment_.svg"
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
                          <a href="/activity-three">( Know More )</a>
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
        <div className="heading" style={{ marginTop: '', marginBottom: '' }}>
          <figure>
            <img src="assets/images/heading-icon.png" alt="heading-icon" />
          </figure>
          {/* <span>Let us help with our products</span> */}
          <h2>Supplier Identification & Sourcing</h2>
        </div>
        <div
          className="container center justify-content-center"
          style={{ textAlign: 'center' }}
        >
          <img
            className="industry "
            data-aos="fade-up-left"
            style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
            src="assets/images/activity-four/svg/log/Supplier Identification & Sourcing_.svg"
            // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
            alt="Our Project One Image 1"
          />
        </div>
        <section
          className="gap about-key-benefits"
          style={{ marginTop: '-4%' }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* <div className="col-lg-6"></div> */}

              <div className="col-lg-12">
                <div className="data" style={{ marginTop: '' }}>
                  {/* <div className="data"> */}
                  {/* <h2>Supplier Identification & Sourcing</h2> */}
                  {/* <ul data-aos="fade-down"> */}
                  <ul>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          {' '}
                          At OMDYS International LLP, we specialize in
                          identifying qualified and reliable suppliers based on
                          your specific needs and current market conditions.
                          Leveraging our extensive network and market knowledge,
                          we ensure that each supplier meets the highest
                          standards of quality and reliability. We conduct
                          detailed supplier audits to assess capabilities,
                          certifications, and ethical practices, ensuring that
                          your business partners with only the best.
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
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Our rigorous vetting process includes evaluating
                          suppliers' production capacities, quality control
                          systems, and compliance with industry standards. We
                          place a strong emphasis on ethical practices, ensuring
                          that our suppliers adhere to fair labor practices and
                          environmental regulations. By understanding your
                          unique requirements, we tailor our sourcing strategy
                          to find the most suitable suppliers that align with
                          your business goals.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Negotiating competitive prices and favorable terms
                          with suppliers on your behalf is a core part of our
                          service. Our experienced team uses their negotiation
                          skills to secure the best possible deals, helping you
                          save costs and improve profitability. We maintain
                          transparent communication throughout the sourcing
                          process, keeping you informed every step of the way.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          At OMDYS International LLP, we are committed to
                          building long-term relationships with both our clients
                          and suppliers. Our goal is to create a seamless and
                          efficient supply chain that supports your business
                          growth. Trust us to be your reliable partner in
                          supplier identification and sourcing, ensuring
                          quality, efficiency, and ethical practices in
                          every transaction.
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
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          {' '}
                          Managing Product Specifications: At OMDYS
                          International LLP, we meticulously manage product
                          specifications to ensure they meet client requirements
                          and adhere to industry standards. Our team works
                          closely with clients to understand their precise needs
                          and translates them into detailed product
                          specifications.
                        </b>
                      </p>
                    </li>

                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Product Sourcing: We leverage our extensive network to
                          source high-quality products from reliable suppliers
                          worldwide. Our strategic sourcing practices ensure
                          that we can provide clients with the best products at
                          competitive prices.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Sampling and Pre-Production Approvals: Before mass
                          production, we handle the sampling process and secure
                          pre-production approvals from our clients. This step
                          ensures that the final product aligns perfectly with
                          client expectations and specifications.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Production Monitoring: During the manufacturing
                          process, we continuously monitor production to ensure
                          everything is on track. Our proactive approach helps
                          in identifying and resolving any issues promptly,
                          maintaining the production schedule
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Quality Control: Ensuring quality is a top priority at
                          OMDYS International LLP. We implement rigorous quality
                          control measures throughout the manufacturing process
                          to ensure that every product meets the highest
                          standards of quality.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Compliance Assurance: We ensure that all products
                          comply with relevant regulatory and industry
                          standards. Our compliance assurance process includes
                          thorough checks and validations to meet international
                          quality and safety requirements.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Post-Production Support: Our commitment to client
                          satisfaction extends beyond production. We offer
                          post-production support, including logistics
                          management, timely delivery, and addressing any
                          after-sales queries or issues.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Vendor Coordination: We coordinate closely with
                          vendors and manufacturers to ensure seamless
                          communication and efficient production processes. Our
                          relationships with trusted suppliers enable us to
                          manage production timelines effectively.
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
      <>{/* service starts */}</>
      <hr />
      {/* ------------3------------- */}
      <>
        <div className="heading" style={{ marginTop: '', marginBottom: '5%' }}>
          <figure>
            <img src="assets/images/heading-icon.png" alt="heading-icon" />
          </figure>
          {/* <span>Let us help with our products</span> */}
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
                  {' '}
                  {/* <div className="data"> */}
                  {/* <h2>Risk Management</h2> */}
                  <ul>
                    {/* <ul data-aos="fade-down"> */}
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          {' '}
                          At OMDYS International LLP, we prioritize identifying
                          and mitigating potential risks throughout the supply
                          chain, including quality control issues, production
                          delays, and currency fluctuations.
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
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Our team implements comprehensive risk management
                          strategies, such as insurance or alternative
                          suppliers, to minimize potential losses and ensure
                          business continuity. We maintain strict compliance
                          with import and export regulations, safeguarding our
                          operations against legal and financial repercussions.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          By conducting thorough quality control checks, we
                          ensure that all products meet the highest standards
                          before reaching our clients. OMDYS International LLP
                          proactively addresses production delays by maintaining
                          robust communication with suppliers and monitoring
                          project timelines closely.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          We employ advanced forecasting tools to manage
                          currency fluctuations, protecting our clients from
                          unexpected cost variations. Our risk management
                          framework includes contingency planning, allowing us
                          to swiftly adapt to unforeseen challenges in the
                          supply chain.
                        </b>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" />
                      <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                        <b>
                          Regular audits and assessments help us identify
                          potential vulnerabilities in our processes, enabling
                          us to take corrective actions promptly. At OMDYS
                          International LLP, we believe that effective risk
                          management is crucial to delivering reliable and
                          efficient service to our clients, fostering long-term
                          partnerships built on trust and dependability.
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
    </>
  );
};

export default ServiceSingle;
