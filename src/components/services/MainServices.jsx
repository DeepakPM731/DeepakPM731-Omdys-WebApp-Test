import React, { useEffect } from 'react';

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

const MainServices = () => {
  useEffect(() => {
    if (isIOS()) {
      let elements = document.querySelectorAll('[data-aos]');
      elements.forEach((element) => element.removeAttribute('data-aos'));
    }
    window.scrollTo(0, 0);
  }, []);

  const renderImage = (src, alt, aos) => {
    return (
      <figure>
        <img
          className="w-100"
          src={src}
          alt={alt}
          {...(isIOS() ? {} : { 'data-aos': aos })}
        />
      </figure>
    );
  };

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
                <br />
              </div>
            </div>
          </div>
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
        <h2>Our Main Services</h2>
      </div>

      <div className="container mt-5 mb-2">
        <div style={{ marginTop: '20px' }}>
          <section className="gap no-top core-values">
            <div className="container" style={{ marginBottom: '-5%' }}>
              <div className="row">
                <ul>
                  <br />
                  <li>
                    <div className="image">
                      {renderImage(
                        'https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Printing+Solutions_.svg',
                        'Core Values Image 1',
                        'fade-left'
                        // 'assets/images/activity-four/svg/log/Printing Solutions_.svg',
                      )}
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
                        <br />
                        <a href="/printing-solutions">( Know More )</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="data">
                      <h3>Oil & Gas Equipment Supply</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        We specialize in exporting a range of petroleum and
                        petrochemical products to GCC and other Asian countries,
                        ensuring high quality and competitive pricing. These
                        products are crucial for industries like energy,
                        manufacturing, and transportation. Our expertise in
                        sourcing and logistics enables us to meet the diverse
                        needs of these industries, supplying essential materials
                        that support their operations.
                        <br />
                        <a href="/oil-gas">( Know More )</a>
                      </p>
                    </div>
                    <div className="image">
                      {renderImage(
                        'https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Oil+and+Gas_.svg',
                        'Core Values Image 1',
                        'fade-left'
                        // 'assets/images/activity-four/svg/log/Oil and Gas_.svg',
                      )}
                    </div>
                  </li>
                  <br />
                  <br />

                  <li>
                    <div className="image">
                      {renderImage(
                        'https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+PPE_.svg',
                        'Core Values Image 1',
                        'fade-right'
                        // 'assets/images/activity-four/svg/log/Health Care PPE_.svg',
                      )}
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
                        <br />
                        <a href="/health-care">( Know More )</a>
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
                        innovation and production in the electronics sector.
                        <br />
                        <a href="/electronics">( Know More )</a>
                      </p>
                    </div>
                    <div className="image">
                      {renderImage(
                        'https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Electronics+Components_.svg',
                        'Core Values Image 1',
                        'fade-right'
                        // 'assets/images/activity-four/svg/log/Electronics Components_.svg',
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      {renderImage(
                        'https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Industrial+Construction+Tools+%26+Equipment_.svg',
                        'Core Values Image 1',
                        'fade-right'
                        // 'assets/images/activity-four/svg/log/Industrial Construction Tools & Equipment_.svg',
                      )}
                    </div>
                    <div className="data">
                      <h3>Construction Tools & Safety Equipments</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        We export a wide selection of construction tools and
                        equipment essential for the industrial and construction
                        sectors to GCC and other Asian countries. Known for
                        their reliability and durability, our products meet
                        international quality standards. Leveraging our
                        strategic position, we efficiently distribute these
                        tools and equipment to construction projects and
                        industrial sites across the region.
                        <br />
                        <a href="/tools-equip">( Know More )</a>
                      </p>
                    </div>
                  </li>
                  <li style={{ marginTop: '' }}>
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
                    <div className="image">
                      {renderImage(
                        'https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Trading+Commodities_.svg',
                        'Core Values Image 1',
                        'fade-right'
                        // 'assets/images/activity-four/svg/log/Trading Commodities_.svg',
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      {renderImage(
                        'https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Selling+Products_.svg',
                        'Core Values Image 1',
                        'fade-left'
                        // 'assets/images/activity-four/svg/log/Selling Products_.svg',
                      )}
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
                    <div className="image">
                      {renderImage(
                        'https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Logistics+and+Timely+Delivery_.svg  ',
                        'Core Values Image 1',
                        'fade-right'
                        // 'assets/images/activity-four/svg/log/Logistics and Timely Delivery_.svg',
                      )}
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
