import React from 'react';

const Led = () => {
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
                <h2>LEDs and Displays</h2>
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
      <br />
      <div className="heading" style={{ marginTop: '', marginBottom: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h2>LEDs and Displays</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/LED and Displays__.svg"
          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div>
      <section className="gap about-key-benefits" style={{ marginTop: '-4%' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-6"></div> */}

            <div className="col-lg-12">
              <div className="data" style={{ marginTop: '' }}>
                {/* <div className="data"> */}
                {/* <h2>Supplier Identification & Sourcing</h2> */}
                {/* <ul data-aos="fade-down"> */}
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  At OMDYS International LLP, we offer an extensive selection of
                  LEDs and displays to illuminate and enhance your projects. Our
                  products include LEDs, LCD displays, OLED displays, and
                  segment displays in various sizes, colors, and configurations,
                  sourced from leading manufacturers to ensure top-quality
                  performance and reliability.
                  <br />
                  <br />
                  <b>Light Emitting Diodes (LEDs):</b> Our range of LEDs
                  includes standard LEDs, high-brightness LEDs, SMD LEDs, and
                  specialized LEDs like UV and IR LEDs. These components, from
                  trusted brands like Cree, Lumileds, and Osram, provide
                  efficient and vibrant illumination for applications in
                  signage, lighting, and electronics.
                  <br />
                  <br />
                  <b>LED Strips and Modules:</b> We supply LED strips and
                  modules designed for flexible and customizable lighting
                  solutions. These products, from manufacturers like Philips,
                  Samsung, and Nichia, are ideal for architectural lighting,
                  decorative lighting, and backlighting applications.
                  <br />
                  <br />
                  <b>LCD Displays:</b> Our inventory includes various types of
                  LCD displays, such as character LCDs, graphic LCDs, and TFT
                  LCDs. These displays, from suppliers like Sharp, LG Display,
                  and Newhaven Display, offer high-quality visuals for consumer
                  electronics, industrial control panels, and digital signage.
                  <br />
                  <br />
                  <b>OLED Displays:</b> We provide OLED displays known for their
                  vibrant colors, high contrast ratios, and energy efficiency.
                  These displays, from leading brands like Samsung, LG, and
                  WiseChip, are perfect for high-end consumer electronics,
                  wearable devices, and innovative display solutions.
                  <br />
                  <br />
                  <b>Segment Displays:</b> Our selection of segment displays
                  includes 7-segment, 14-segment, and 16-segment displays used
                  for numerical and alphanumeric readouts. These displays, from
                  manufacturers like Kingbright, Lite-On, and Vishay, are
                  essential for digital clocks, meters, and instrumentation
                  panels.
                  <br />
                  <br />
                  <b>Dot Matrix Displays:</b> We offer dot matrix displays
                  available in various resolutions and colors. These displays,
                  from brands like Avago Technologies and Lite-On, are suitable
                  for text and graphics displays in public information systems,
                  electronic signs, and gaming machines.
                  <br />
                  <br />
                  <b>ePaper Displays:</b> Our range includes ePaper displays
                  that provide high readability and low power consumption, ideal
                  for e-readers, electronic shelf labels, and outdoor displays.
                  These displays, from companies like E Ink and Pervasive
                  Displays, offer superior performance in various lighting
                  conditions.
                  <br />
                  <br />
                  <b>Touchscreen Displays:</b> We supply touchscreen displays
                  that combine visual display with touch input capabilities,
                  available in resistive, capacitive, and infrared touch
                  technologies. These displays, from manufacturers like Elo
                  Touch Solutions, Fujitsu, and Zytronic, are used in
                  interactive kiosks, point-of-sale systems, and industrial
                  control panels.
                  <br />
                  <br />
                  <b>Custom Display Solutions:</b> For specialized applications,
                  we offer custom display solutions tailored to meet specific
                  design and functional requirements. These solutions, from
                  experienced suppliers, ensure that your unique display needs
                  are met with precision and reliability.
                  <br />
                  <br />
                  At OMDYS International LLP, we are committed to providing
                  high-quality LEDs and displays that meet the diverse needs of
                  our clients. Our extensive network and expertise in sourcing
                  ensure that you receive the best products for your specific
                  applications, enhancing the visual impact and functionality of
                  your projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Led;
