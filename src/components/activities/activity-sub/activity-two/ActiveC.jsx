import React, { useEffect } from 'react';

const ActiveC = () => {
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
        <h2>Active Components</h2>
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
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Active+Components__.svg"
          // src="assets/images/activity-four/svg/log/Active Components__.svg"
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
                  At OMDYS International LLP, we stock a comprehensive range of
                  active components to meet your requirements for signal
                  processing, amplification, and power management. Our inventory
                  includes high-quality transistors, diodes, thyristors, voltage
                  regulators, and other active components from leading
                  manufacturers, ensuring reliable performance for your
                  electronic applications.
                  <br />
                  <br />
                  <b>Transistors:</b> We offer a wide variety of transistors,
                  including Bipolar Junction Transistors (BJTs), Field-Effect
                  Transistors (FETs), and Insulated-Gate Bipolar Transistors
                  (IGBTs). These transistors, sourced from trusted brands like
                  ON Semiconductor, NXP, and Toshiba, are essential for
                  amplification, switching, and signal modulation in electronic
                  circuits.
                  <br />
                  <br />
                  <b>Diodes:</b> Our selection of diodes includes rectifier
                  diodes, Zener diodes, Schottky diodes, and Light Emitting
                  Diodes (LEDs). These components, from manufacturers such as
                  Vishay, STMicroelectronics, and Rohm, are crucial for
                  rectification, voltage regulation, signal demodulation, and
                  light emission applications.
                  <br />
                  <br />
                  <b>Thyristors:</b> We stock various thyristors, including
                  Silicon Controlled Rectifiers (SCRs), Triacs, and Diacs. These
                  components, sourced from reputable suppliers like Littelfuse
                  and Infineon, are used for controlling high power in AC and DC
                  systems, making them ideal for applications in power
                  regulation and motor control.
                  <br />
                  <br />
                  <b>Voltage Regulators:</b> Our range of voltage regulators
                  includes Linear Voltage Regulators, Low Dropout (LDO)
                  Regulators, and Switching Regulators. These components, from
                  industry leaders like Texas Instruments, Analog Devices, and
                  ON Semiconductor, ensure stable and reliable voltage supply
                  for your electronic circuits, protecting them from
                  fluctuations and noise.
                  <br />
                  <br />
                  <b>Operational Amplifiers (Op-Amps):</b> We provide a variety
                  of operational amplifiers used for signal amplification,
                  filtering, and analog computations. Our inventory includes
                  general-purpose, precision, and high-speed op-amps from top
                  manufacturers like Texas Instruments, Analog Devices, and
                  Maxim Integrated.
                  <br />
                  <br />
                  <b>Integrated Circuits (ICs):</b> Besides general ICs, we also
                  stock specific active ICs such as audio amplifiers, power
                  amplifiers, and radio frequency (RF) amplifiers. These ICs,
                  sourced from renowned brands, are crucial for enhancing the
                  performance and efficiency of electronic devices.
                  <br />
                  <br />
                  <b>Power Transistors:</b> Our collection includes power
                  transistors such as MOSFETs and IGBTs, which are vital for
                  high-power applications. We source these components from
                  leading manufacturers like Infineon, STMicroelectronics, and
                  Fairchild Semiconductor to ensure high performance and
                  reliability.
                  <br />
                  <br />
                  <b>Sensors:</b> We offer active sensors such as Hall Effect
                  sensors, photodiodes, and active infrared sensors. These
                  components, from trusted suppliers like Honeywell, AMS, and
                  Vishay, are essential for detecting and responding to various
                  physical parameters like magnetic fields, light, and infrared
                  radiation.
                  <br />
                  <br />
                  <b>Microcontrollers and Microprocessors:</b> Our range
                  includes various microcontrollers and microprocessors from
                  leading brands like Microchip, STMicroelectronics, and Texas
                  Instruments. These components are crucial for processing and
                  control tasks in embedded systems and other electronic
                  applications.
                  <br />
                  <br />
                  At OMDYS International LLP, we are committed to delivering
                  high-quality active components that meet the stringent
                  standards of our clients. Our extensive network and expertise
                  in sourcing ensure that you receive the best products for your
                  specific needs, enhancing the performance and reliability of
                  your electronic systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActiveC;
