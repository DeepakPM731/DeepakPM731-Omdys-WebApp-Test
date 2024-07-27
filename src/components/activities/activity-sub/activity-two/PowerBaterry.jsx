import React from 'react'

const PowerBaterry = () => {
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
          <div className="breadcrums"></div>
        </section>
      </div>
      <br />
      <div className="heading" style={{ marginTop: '', marginBottom: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>Let us help with our products</span> */}
        <h2>Power Supplies and Batteries</h2>
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
                  At OMDYS International LLP, we offer a comprehensive range of
                  power supplies, batteries, chargers, and DC-DC converters to
                  ensure reliable power delivery for diverse applications. Our
                  products are sourced from leading manufacturers, ensuring
                  high-quality performance and dependability to meet the power
                  needs of your projects across various industries.
                  <br />
                  <br />
                  <b>AC-DC Power Supplies:</b> We provide a wide variety of
                  AC-DC power supplies, including desktop, open-frame, enclosed,
                  and modular power supplies. These products, from reputable
                  brands like Mean Well, TDK-Lambda, and Delta Electronics,
                  offer efficient and reliable power conversion for industrial,
                  medical, and consumer electronics applications.
                  <br />
                  <br />
                  <b>DC-DC Converters:</b> Our selection of DC-DC converters
                  includes isolated and non-isolated converters, available in
                  various input and output voltage ranges. These converters,
                  from manufacturers like Murata, RECOM, and Vicor, are
                  essential for applications requiring voltage regulation and
                  conversion in telecommunications, automotive, and portable
                  devices.
                  <br />
                  <br />
                  <b>Uninterruptible Power Supplies (UPS):</b> We supply UPS
                  systems designed to provide backup power and protect against
                  power interruptions. These systems, from brands like APC,
                  Eaton, and CyberPower, are critical for maintaining continuous
                  operation in data centers, industrial automation, and home
                  office setups.
                  <br />
                  <br />
                  <b>Battery Packs:</b> Our inventory includes various battery
                  packs, such as lithium-ion, nickel-metal hydride (NiMH), and
                  lead-acid batteries. These battery packs, from suppliers like
                  Panasonic, LG Chem, and EnerSys, offer reliable and
                  long-lasting power solutions for portable electronics,
                  electric vehicles, and renewable energy storage.
                  <br />
                  <br />
                  <b>Battery Chargers:</b> We offer battery chargers for
                  different battery chemistries and capacities, including smart
                  chargers, industrial chargers, and USB chargers. These
                  chargers, from manufacturers like Ansmann, Xantrex, and
                  Tenergy, ensure safe and efficient charging for a wide range
                  of battery types and applications.
                  <br />
                  <br />
                  <b>Rechargeable Batteries:</b> Our selection of rechargeable
                  batteries includes lithium-ion, NiMH, and sealed lead-acid
                  (SLA) batteries. These batteries, from trusted brands like
                  Duracell, Energizer, and Saft, provide sustainable and
                  cost-effective power solutions for consumer electronics,
                  emergency lighting, and backup power systems.
                  <br />
                  <br />
                  <b>Primary Batteries:</b> We supply a range of primary
                  (non-rechargeable) batteries, including alkaline, lithium, and
                  zinc-carbon batteries. These batteries, from manufacturers
                  like Duracell, Energizer, and Panasonic, offer reliable power
                  for low-drain and single-use applications in household
                  devices, medical equipment, and industrial sensors.
                  <br />
                  <br />
                  <b>Power Adapters:</b> Our inventory includes power adapters
                  for a variety of devices, featuring multiple output voltages
                  and connector types. These adapters, from brands like Belkin,
                  CUI Inc., and Phihong, are ideal for powering laptops,
                  networking equipment, and portable electronics.
                  <br />
                  <br />
                  <b>Custom Power Solutions:</b> For specialized applications,
                  we offer custom power solutions tailored to meet specific
                  voltage, current, and form factor requirements. These
                  solutions, developed in collaboration with leading suppliers,
                  ensure that your unique power needs are met with precision and
                  reliability.
                  <br />
                  <br />
                  At OMDYS International LLP, we are dedicated to providing
                  high-quality power supplies and batteries that meet the
                  rigorous demands of our clients. Our extensive network and
                  expertise in sourcing ensure that you receive the best
                  products for your specific applications, enhancing the
                  performance and reliability of your power systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PowerBaterry