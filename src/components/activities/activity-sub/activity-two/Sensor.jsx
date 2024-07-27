import React from 'react';

const Sensor = () => {
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
                <h2>Electronics Components</h2>
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
        <h2>Sensors and Modules</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Sensors and Modules__.svg"
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
                  At OMDYS International LLP, we offer a comprehensive selection
                  of sensors and sensor modules designed to measure and monitor
                  a wide range of environmental parameters. Our products are
                  sourced from leading manufacturers, ensuring high accuracy,
                  reliability, and performance for your applications in various
                  industries. Explore our extensive range of sensors and modules
                  tailored to meet your specific requirements.
                  <br />
                  <br />
                  <b>Temperature Sensors:</b> We provide a variety of
                  temperature sensors, including thermocouples, RTDs (Resistance
                  Temperature Detectors), thermistors, and digital temperature
                  sensors. These sensors, from manufacturers like Honeywell,
                  Texas Instruments, and Omega Engineering, offer precise
                  temperature measurements for applications in HVAC, industrial
                  processes, and consumer electronics.
                  <br />
                  <br />
                  <b>Humidity Sensors:</b> Our selection includes capacitive,
                  resistive, and digital humidity sensors designed to measure
                  relative humidity levels accurately. These sensors, from
                  brands like Sensirion, Amphenol, and Bosch, are essential for
                  climate control systems, weather stations, and agricultural
                  monitoring.
                  <br />
                  <br />
                  <b>Pressure Sensors:</b> We supply a range of pressure
                  sensors, including piezoelectric, capacitive, and strain gauge
                  pressure sensors. These components, from leading manufacturers
                  like Honeywell, Bosch, and TE Connectivity, are used in
                  automotive, industrial, and medical applications for
                  monitoring pressure levels in gases and liquids.
                  <br />
                  <br />
                  <b>Motion Sensors:</b> Our inventory includes various motion
                  sensors such as accelerometers, gyroscopes, PIR (Passive
                  Infrared) sensors, and ultrasonic sensors. These sensors, from
                  top brands like STMicroelectronics, Bosch, and Murata, are
                  crucial for applications in robotics, security systems, and
                  wearable devices.
                  <br />
                  <br />
                  <b>Proximity Sensors:</b> We offer proximity sensors,
                  including inductive, capacitive, and optical sensors. These
                  sensors, from manufacturers like Omron, Sick, and
                  Pepperl+Fuchs, are used for detecting the presence or absence
                  of objects without physical contact in industrial automation,
                  automotive, and consumer electronics.
                  <br />
                  <br />
                  <b>Light Sensors:</b> Our range of light sensors includes
                  photodiodes, phototransistors, and ambient light sensors.
                  These sensors, from trusted brands like Vishay, Osram, and
                  Broadcom, are used in applications such as lighting control,
                  display brightness adjustment, and optical communication.
                  <br />
                  <br />
                  <b>Gas Sensors:</b> We provide gas sensors for detecting
                  various gases, including CO2, CO, methane, and VOCs (Volatile
                  Organic Compounds). These sensors, from manufacturers like
                  Figaro, Honeywell, and Sensirion, are essential for air
                  quality monitoring, industrial safety, and environmental
                  control.
                  <br />
                  <br />
                  <b>Magnetic Sensors:</b> Our selection includes Hall Effect
                  sensors, magnetoresistive sensors, and reed switches. These
                  sensors, from brands like Allegro MicroSystems, Honeywell, and
                  Infineon, are used in automotive applications, position
                  sensing, and speed detection.
                  <br />
                  <br />
                  <b>Ultrasonic Sensors:</b> We supply ultrasonic sensors for
                  distance measurement and object detection. These sensors, from
                  manufacturers like MaxBotix, Murata, and Pepperl+Fuchs, are
                  ideal for applications in robotics, automation, and level
                  sensing.
                  <br />
                  <br />
                  <b>Sensor Modules:</b> Our inventory includes sensor modules
                  that integrate multiple sensor types and additional processing
                  capabilities. Examples include environmental sensor modules,
                  inertial measurement units (IMUs), and multi-gas sensing
                  modules. These modules, from leading providers like Bosch
                  Sensortec, Adafruit, and SparkFun, simplify the integration
                  and enhance the functionality of your projects.
                  <br />
                  <br />
                  At OMDYS International LLP, we are dedicated to providing
                  high-quality sensors and sensor modules that meet the
                  stringent demands of our clients. Our extensive network and
                  expertise in sourcing ensure that you receive the best
                  products for your specific needs, enhancing the measurement
                  and monitoring capabilities of your systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sensor;
