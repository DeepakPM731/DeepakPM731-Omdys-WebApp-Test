import React, { useEffect } from 'react';

const SwitchRelay = () => {
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
                <br />
               
              </div>
            </div>
          </div>
         
        </section>
      </div>
      <br />
      <div className="heading" style={{ marginTop: '', marginBottom: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h2>Switches and Relays</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Switches+and+Relays__2.svg"
          // src="assets/images/activity-four/svg/log/Switches and Relays__2.svg"
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
                  At OMDYS International LLP, we provide an extensive range of
                  switches, relays, and contactors to meet your control and
                  automation needs. Our products are sourced from leading
                  manufacturers, ensuring high reliability, durability, and
                  performance for various industrial, commercial, and consumer
                  applications.
                  <br />
                  <br />
                  <b>Tactile Switches:</b> We offer a variety of tactile
                  switches, including surface-mount and through-hole types.
                  These switches, from reputable brands like Omron, Panasonic,
                  and C&K, provide a reliable and responsive user interface for
                  consumer electronics, medical devices, and industrial
                  equipment.
                  <br />
                  <br />
                  <b>Rocker Switches:</b> Our selection includes standard,
                  illuminated, and waterproof rocker switches. These switches,
                  from manufacturers like Eaton, Carling Technologies, and APEM,
                  are ideal for applications in automotive, marine, and
                  household appliances, offering durability and ease of use.
                  <br />
                  <br />
                  <b>Push Button Switches:</b> We supply a wide range of push
                  button switches, including momentary, latching, and
                  illuminated types. These switches, from brands like E-Switch,
                  NKK Switches, and Honeywell, are used in control panels,
                  instrumentation, and consumer electronics for reliable
                  operation.
                  <br />
                  <br />
                  <b>Toggle Switches:</b> Our inventory includes toggle switches
                  in various configurations, such as SPST, SPDT, DPDT, and
                  multi-pole. These switches, from suppliers like TE
                  Connectivity, Altech, and Switchcraft, are suitable for
                  industrial control, automotive, and aerospace applications.
                  <br />
                  <br />
                  <b>Slide Switches:</b> We offer slide switches, including
                  sub-miniature, miniature, and standard sizes. These switches,
                  from manufacturers like C&K, E-Switch, and Grayhill, provide
                  precise control for audio equipment, computer peripherals, and
                  instrumentation.
                  <br />
                  <br />
                  <b>Rotary Switches:</b> Our range of rotary switches includes
                  single-deck and multi-deck configurations. These switches,
                  from brands like Grayhill, Electroswitch, and Lorlin, are
                  essential for selecting functions or channels in communication
                  equipment, test instruments, and industrial controls.
                  <br />
                  <br />
                  <b>Electromechanical Relays:</b> We supply a variety of
                  electromechanical relays, including general-purpose, signal,
                  and power relays. These relays, from manufacturers like Omron,
                  TE Connectivity, and Finder, offer reliable switching for
                  automation systems, HVAC controls, and safety equipment.
                  <br />
                  <br />
                  <b>Solid State Relays (SSRs):</b> Our selection includes AC
                  and DC output solid state relays. These relays, from brands
                  like Crydom, Opto 22, and Carlo Gavazzi, provide silent, fast,
                  and reliable switching for industrial automation, lighting
                  control, and heating systems.
                  <br />
                  <br />
                  <b>Contactors:</b> We offer a range of contactors for
                  switching higher currents in motor control, lighting, and
                  heating applications. These contactors, from manufacturers
                  like Schneider Electric, ABB, and Siemens, ensure safe and
                  reliable operation in demanding environments.
                  <br />
                  <br />
                  <b>Reed Relays:</b> Our inventory includes reed relays, known
                  for their low power consumption and high reliability. These
                  relays, from brands like Standex Electronics, Hamlin, and
                  MEDER, are ideal for applications in telecommunications,
                  medical devices, and test equipment.
                  <br />
                  <br />
                  <b>Time Delay Relays:</b> We provide time delay relays for
                  applications requiring precise timing control. These relays,
                  from suppliers like Allen-Bradley, TE Connectivity, and
                  Panasonic, are used in industrial automation, process control,
                  and motor protection.
                  <br />
                  <br />
                  <b>Automotive Relays:</b> Our selection includes automotive
                  relays designed to meet the stringent requirements of vehicle
                  systems. These relays, from brands like Bosch, Panasonic, and
                  TE Connectivity, are essential for controlling lights, motors,
                  and other electrical components in vehicles.
                  <br />
                  <br />
                  At OMDYS International LLP, we are committed to providing
                  high-quality switches and relays that meet the rigorous
                  demands of our clients. Our extensive network and expertise in
                  sourcing ensure that you receive the best products for your
                  specific applications, enhancing the performance and
                  reliability of your control and automation systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center', marginTop: '-5%' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Switches and Relays__.svg"
          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div>
      <br />
    </>
  );
};

export default SwitchRelay;
