import { useEffect } from 'react';

const MainServices = () => {
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
                        commodities, including pulses and grains. Our extensive
                        network ensures that businesses receive high-quality raw
                        materials and essential products at competitive prices,
                        tailored to their specific needs. Our strategic location
                        allows us to offer reliable supply chains and efficient
                        distribution.
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
                        receive top-quality items that enhance their operations.
                        From manufacturing to retail, we provide solutions that
                        are critical to the success of our clients.
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
                        products reach their destinations in perfect condition.
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
                        transportation. Our expertise in sourcing and logistics
                        allows us to meet the diverse needs of these industries,
                        providing essential materials that support their
                        operations.
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
                        providers have access to essential protective gear. Our
                        products include masks, gloves, gowns, and other PPE
                        items that meet stringent safety standards. Our location
                        enables us to efficiently manage the import and
                        distribution of these critical supplies to hospitals and
                        healthcare facilities across India.
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
                        industry. Our components are essential for ensuring the
                        functionality and advancement of electronic devices and
                        systems. Located in a region known for its industrial
                        activity, we are well-positioned to supply these
                        components to a broad range of clients, supporting
                        innovation and production in the electronics sector.
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
                        equipment essential for the industrial and construction
                        sectors. Known for their reliability and durability, our
                        products adhere to international quality standards.
                        Leveraging our strategic position, we efficiently
                        distribute these tools and equipment to construction
                        projects and industrial sites throughout the region.
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
    </>
  );
};

export default MainServices;
