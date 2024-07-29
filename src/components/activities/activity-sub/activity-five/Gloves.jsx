import React, { useEffect } from 'react';

const Gloves = () => {
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
                <h2 style={{ textAlign: 'center' }}>Health Care Products</h2>
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
        <h2>Protective Apparel</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Medical Hand Gloves__.svg"
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
                  high-quality medical gloves designed to provide excellent
                  protection and hygiene in various healthcare and non-medical
                  settings. Our selection includes latex, nitrile, and vinyl
                  gloves, ensuring that you have access to the best protective
                  solutions for every need.
                </p>
                <br />
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '40px' }}>Types of Medical Gloves:</b>
                </p>

                <b style={{ fontSize: '30px' }}>Latex Gloves:</b>
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <div style={{ marginLeft: '10%' }}>
                    <br />
                    <b>Description:</b> Made from natural rubber latex, these
                    gloves offer excellent elasticity, comfort, and fit. They
                    provide high tactile sensitivity and are ideal for tasks
                    requiring precision.
                    <br />
                    <b>Uses:</b> Commonly used in medical and dental procedures,
                    laboratories, and general-purpose applications.
                    <br />
                    <b>Features:</b> Available in powdered and powder-free
                    options, providing a secure grip and minimizing hand
                    fatigue.
                  </div>
                </p>

                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '30px' }}>Nitrile Gloves:</b>
                  <br />
                  <div style={{ marginLeft: '10%' }}>
                    <b>Description:</b> Made from synthetic nitrile rubber,
                    these gloves are an excellent alternative for individuals
                    with latex allergies. They offer superior puncture
                    resistance and chemical protection.
                    <br />
                    <b>Uses:</b> Ideal for medical examinations, handling
                    hazardous materials, food processing, and industrial
                    applications.
                    <br />
                    <b>Features:</b> Available in various thicknesses and
                    colors, providing a comfortable fit and excellent tactile
                    sensitivity.
                  </div>
                </p>

                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '30px' }}>Vinyl Gloves:</b>
                  <br />
                  <div style={{ marginLeft: '10%' }}>
                    <b>Description:</b> Made from polyvinyl chloride (PVC),
                    these gloves are a cost-effective option for low-risk tasks.
                    They offer good barrier protection and are latex-free.
                    <br />
                    <b>Uses:</b> Suitable for food handling, light cleaning
                    tasks, and non-sterile medical procedures.
                    <br />
                    <b>Features:</b> Soft and comfortable, with a looser fit
                    compared to latex and nitrile gloves.
                  </div>
                </p>
                <br />
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '40px' }}>
                    Quality Standards Applicable in India:
                  </b>
                </p>
                <div style={{ marginLeft: '10%' }}>
                  <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <b>IS 4148:1989:</b> Standard for Surgical Rubber Gloves:
                    Specifies requirements for surgical gloves, including
                    physical properties, sterility, and packaging.
                    <br />
                    <b>IS 15354:2003:</b> Standard for Examination Gloves:
                    Outlines specifications for non-sterile and sterile
                    examination gloves, ensuring adequate barrier protection and
                    durability.
                    <br />
                    <b>BIS Certification:</b> Bureau of Indian Standards (BIS):
                    Ensures that medical gloves meet the safety and quality
                    standards set by Indian regulatory authorities.
                    <br />
                    <b>ISO 11193-1:2008:</b> Single-Use Medical Examination
                    Gloves: Specifies requirements for single-use medical
                    examination gloves, including physical properties and
                    freedom from holes.
                    <br />
                    <b>ISO 10282:2014:</b> Single-Use Sterile Surgical Gloves:
                    Outlines specifications for single-use sterile surgical
                    gloves, ensuring high barrier protection and sterility.
                    <br />
                    <b>ASTM Standards:</b>
                    <br />
                    ASTM D3578: Standard specification for rubber examination
                    gloves.
                    <br />
                    ASTM D6319: Standard specification for nitrile examination
                    gloves for medical application.
                    <br />
                    ASTM D5250: Standard specification for polyvinyl chloride
                    gloves for medical application.
                  </p>

                  <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <b>FDA Approval:</b> For Products Sold in the United States:
                    Ensures that medical gloves meet stringent safety and
                    efficacy standards.
                    <br />
                    <b>CE Marking:</b> Conformity with European Standards:
                    Indicates that medical gloves meet health, safety, and
                    environmental protection standards for products sold within
                    the European Economic Area (EEA).
                  </p>
                </div>
                <br />
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '40px' }}>
                    Importance of Quality Standards:
                  </b>
                  <br />
                  Adhering to these quality standards ensures that medical
                  gloves provide the intended level of protection, safety, and
                  reliability. Compliance with these standards is crucial for
                  maintaining the trust and safety of healthcare professionals
                  and patients.
                  <br />
                  At OMDYS International LLP, we are committed to supplying
                  medical gloves that meet the highest quality standards. Our
                  products are rigorously tested and certified to ensure maximum
                  protection and reliability, helping to safeguard health and
                  well-being in various healthcare and non-medical settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gloves;
