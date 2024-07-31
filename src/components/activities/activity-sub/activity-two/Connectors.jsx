import React, { useEffect } from 'react';

const Connectors = () => {
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
                <h2 style={{ textAlign: 'center' }}>Electronics Components</h2>
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
        <h2>Connectors and Cables</h2>
        <br />
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Connectors+and+Cables__.svg"
          // src="assets/images/activity-four/svg/log/Connectors and Cables__.svg"
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
                  At OMDYS International LLP, we provide a diverse range of
                  connectors, cables, and harnesses to ensure seamless
                  integration into your projects. Whether you need standard
                  connectors or custom cable assemblies, our products are
                  designed to meet the highest standards of reliability and
                  performance, sourced from leading manufacturers to support
                  your connectivity requirements across various industries.
                  <br />
                  <br />
                  <b>Electrical Connectors:</b> We offer a wide variety of
                  electrical connectors, including terminal blocks, plug and
                  socket connectors, and crimp connectors. These connectors,
                  sourced from reputable brands like TE Connectivity, Amphenol,
                  and Molex, ensure secure and efficient electrical connections
                  for your devices and systems.
                  <br />
                  <br />
                  <b>RF Connectors:</b> Our selection of RF connectors includes
                  coaxial connectors such as SMA, BNC, N-type, and TNC
                  connectors. These high-frequency connectors, from
                  manufacturers like Huber+Suhner, Rosenberger, and Radiall, are
                  essential for applications in telecommunications,
                  broadcasting, and wireless communications.
                  <br />
                  <br />
                  <b>Circular Connectors:</b> We provide a range of circular
                  connectors, including military-grade and industrial connectors
                  like MIL-DTL-5015, MIL-DTL-38999, and M12 connectors. These
                  robust connectors, from leading suppliers like ITT Cannon,
                  LEMO, and Hirose, are designed for harsh environments and
                  demanding applications.
                  <br />
                  <br />
                  <b>Data Connectors:</b> Our inventory includes data connectors
                  such as USB, HDMI, Ethernet (RJ45), and fiber optic
                  connectors. These connectors, from brands like 3M, Belden, and
                  Corning, facilitate high-speed data transmission and are
                  critical for networking, computing, and multimedia
                  applications.
                  <br />
                  <br />
                  <b>Power Connectors:</b> We stock power connectors including
                  Anderson Powerpole, IEC connectors, and DIN connectors. These
                  components, sourced from trusted manufacturers like Anderson
                  Power Products, Schurter, and Neutrik, are designed to handle
                  high currents and ensure reliable power connections.
                  <br />
                  <br />
                  <b>Cable Assemblies:</b> Our range of cable assemblies
                  includes custom cable assemblies, pre-terminated cables, and
                  multi-conductor cables. These assemblies, from suppliers like
                  Alpha Wire, 3M, and Panduit, are tailored to meet specific
                  project requirements, ensuring ease of installation and
                  optimal performance.
                  <br />
                  <br />
                  <b>Wire Harnesses:</b> We offer wire harnesses that bundle
                  multiple wires into a single, organized assembly, ideal for
                  automotive, aerospace, and industrial applications. Our
                  harnesses, sourced from leading providers, ensure durability,
                  reliability, and simplified installation processes.
                  <br />
                  <br />
                  <b>Fiber Optic Cables:</b> Our selection includes single-mode
                  and multi-mode fiber optic cables for high-speed data
                  transmission over long distances. These cables, from
                  manufacturers like Corning, OFS, and Prysmian, are essential
                  for telecommunications, data centers, and networking
                  applications.
                  <br />
                  <br />
                  <b>Audio/Video Cables:</b> We provide a variety of audio and
                  video cables, including RCA, XLR, TRS, and HDMI cables. These
                  high-quality cables, from brands like Belden, Mogami, and
                  Canare, are designed to deliver superior sound and video
                  quality for professional and consumer electronics.
                  <br />
                  <br />
                  <b>Control Cables:</b> Our control cables include flexible
                  cables, shielded cables, and instrumentation cables used in
                  automation and industrial control systems. These cables, from
                  manufacturers like Lapp Group, Nexans, and Southwire, ensure
                  reliable signal transmission and control in complex industrial
                  environments.
                  <br />
                  <br />
                  At OMDYS International LLP, we are dedicated to delivering
                  top-quality connectors and cables that meet the rigorous
                  demands of our clients. Our extensive network and expertise in
                  sourcing ensure that you receive the best products for your
                  specific needs, enhancing the connectivity and reliability of
                  your systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connectors;
