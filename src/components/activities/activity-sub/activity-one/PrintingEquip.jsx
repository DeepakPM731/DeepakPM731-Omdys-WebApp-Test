import React, { useEffect } from 'react';

const PrintingEquip = () => {
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
                <h2 style={{ textAlign: 'center' }}>Printing Solutions</h2>
                <br />
                
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
        <h2>Large Format Printers: Flex and UV Hybrid Printing Machines</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center', marginTop: '-3%' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Printing+Machines__.svg"
          // src="assets/images/activity-four/svg/log/Printing Machines__.svg"
          alt="Our Project One Image 1"
        />
      </div>
      <section className="gap about-key-benefits" style={{ marginTop: '-4%' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-6"></div> */}

            <div className="col-lg-12">
              <div className="data" style={{ marginTop: '' }}>
               
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  At OMDYS International LLP, we offer state-of-the-art large
                  format printers, including flex and UV hybrid printing
                  machines, designed to meet the demanding needs of today's
                  printing industry. These advanced printers are equipped with
                  the latest technologies to ensure high-quality prints,
                  efficiency, and versatility for a wide range of applications.
                  <br />
                  <br />
                  <h4>Flex Printing Machines</h4>
                  <br />
                  Flex printing machines are renowned for their ability to
                  produce vibrant, durable prints on flexible materials such as
                  banners, vinyl, and fabric. The latest flex printers
                  incorporate several cutting-edge technologies:
                  <br />
                  <br />
                  <b>High-Resolution Printing:</b> Modern flex printers offer
                  high-resolution printing capabilities, ensuring sharp and
                  detailed images suitable for both indoor and outdoor
                  advertising.
                  <br />
                  <b>Eco-Solvent Inks:</b> These printers utilize eco-solvent
                  inks, which are environmentally friendly and provide excellent
                  color vibrancy and durability.
                  <br />
                  <b>Automatic Cleaning Systems:</b> To maintain optimal print
                  quality and minimize downtime, flex printers are equipped with
                  automatic cleaning systems that ensure the print heads remain
                  unclogged and functional.
                  <br />
                  <b>Media Handling Flexibility:</b> Advanced media handling
                  systems allow for seamless printing on a variety of
                  substrates, including vinyl, mesh, and canvas.
                  <br />
                  <br />
                  <br />
                  <h4>UV Hybrid Printing Machines</h4>
                  <br />
                  UV hybrid printers combine the best of both UV and traditional
                  printing technologies, offering unparalleled versatility and
                  quality. These printers are capable of printing on both rigid
                  and flexible substrates, making them ideal for a wide range of
                  applications, from signage to packaging.
                  <br />
                  <br />
                  <b>UV LED Curing:</b> The latest UV hybrid printers feature UV
                  LED curing technology, which provides instant drying of inks,
                  reducing production times and allowing for immediate handling
                  of printed materials.
                  <br />
                  <b>Multi-Layer Printing:</b> Advanced multi-layer printing
                  capabilities enable the creation of unique textures and
                  effects, including braille and raised images, enhancing the
                  visual and tactile appeal of printed products.
                  <br />
                  <b>Wide Color Gamut:</b> UV hybrid printers support a wide
                  color gamut, including white and clear inks, allowing for
                  vibrant and high-impact prints on a variety of substrates,
                  including glass, metal, wood, and plastic.
                  <br />
                  <b>Precision and Speed:</b> These printers offer high
                  precision and fast printing speeds, ensuring efficient
                  production without compromising on quality.
                  <br />
                  <br />
                  <br />
                  <h4>Leading Exporters of Large Format Printers</h4>
                  <br />
                  The global market for large format printers is highly
                  competitive, with several countries leading in the export of
                  these advanced machines. Notably:
                  <br />
                  <br />
                  <b>Japan:</b> Renowned for their technological innovation and
                  precision engineering, Japanese companies like Epson, Roland,
                  and Mimaki are at the forefront of the large format printer
                  industry.
                  <br />
                  <b>Germany:</b> German manufacturers, such as Durst and
                  Heidelberg, are known for their high-quality and reliable
                  printing solutions, making them key players in the global
                  market.
                  <br />
                  <b>China:</b> With a rapidly growing printing industry, China
                  has become a significant exporter of large format printers,
                  offering a wide range of affordable and advanced printing
                  machines.
                  <br />
                  <b>USA:</b> American companies like HP and EFI are also major
                  contributors to the large format printer market, known for
                  their cutting-edge technologies and comprehensive printing
                  solutions.
                  <br />
                  <br />
                </p>

                <div
                  className="container center justify-content-center"
                  style={{ textAlign: 'center' }}
                >
                  <img
                    className="industry "
                    data-aos="fade-up-left"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      objectFit: 'stretch',
                    }}
                    src="assets/images/activity-four/svg/log/Printing Machines__2.svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                    alt="Our Project One Image 1"
                  />
                </div>
                <p>
                  <br />
                  At OMDYS International LLP, we are dedicated to providing our
                  clients with the best large format printing solutions
                  available in the market. Our extensive network and expertise
                  in sourcing ensure that you receive high-quality, reliable,
                  and innovative printing machines that meet your specific needs
                  and enhance your printing capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrintingEquip;
