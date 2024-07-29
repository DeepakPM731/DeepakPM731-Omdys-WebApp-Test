import React, { useEffect } from 'react';

const Sanitizers = () => {
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
        <h2>Sanitizers</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Sanitizers and Disinfectants__2.svg"
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
                  At OMDYS International LLP, we are dedicated to providing a
                  wide range of high-quality sanitizers and disinfectants to
                  help maintain stringent hygiene protocols in various settings.
                  Our product line includes hand sanitizers, disinfectant wipes,
                  and surface disinfectants, ensuring comprehensive protection
                  against harmful pathogens.
                </p>
                <br />
                <p style={{ fontSize: '40px', textAlign: 'justify' }}>
                  <b>Types of Sanitizers and Disinfectants:</b>
                </p>
                <br />
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '30px' }}>Hand Sanitizers:</b>
                  <br />
                  <div style={{ marginLeft: '10%' }}>
                    <b>Description:</b> Our hand sanitizers are formulated with
                    effective alcohol-based ingredients to kill 99.99% of germs
                    and bacteria. They are available in gel, liquid, and foam
                    forms to cater to different preferences and applications.
                    <br />
                    <b>Uses:</b> Ideal for use in healthcare facilities,
                    workplaces, schools, and public spaces to promote hand
                    hygiene and prevent the spread of infections.
                    <br />
                    <b>Features:</b> Quick-drying, non-sticky formulations with
                    moisturizing agents to keep hands soft and protected.
                  </div>
                </p>
                <br />

                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '30px' }}>Disinfectant Wipes:</b>
                  <br />
                  <div style={{ marginLeft: '10%' }}>
                    <b>Description:</b> Disinfectant wipes are pre-moistened
                    with powerful disinfectant solutions that effectively clean
                    and disinfect surfaces. They are convenient and easy to use
                    for quick and effective disinfection.
                    <br />
                    <b>Uses:</b> Suitable for cleaning and disinfecting
                    high-touch surfaces such as door handles, keyboards, mobile
                    devices, and countertops in healthcare, commercial, and
                    household settings.
                    <br />
                    <b>Features:</b> Available in various sizes and packaging
                    options, including individual sachets and canisters for
                    portability and convenience.
                  </div>
                </p>
                <br />
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '30px' }}>Surface Disinfectants:</b>
                  <br />
                  <div style={{ marginLeft: '10%' }}>
                    <b>Description:</b> Our surface disinfectants are formulated
                    to eliminate bacteria, viruses, and fungi on various
                    surfaces, ensuring a hygienic environment. They are
                    available in sprays, liquids, and concentrates.
                    <br />
                    <b>Uses:</b> Ideal for disinfecting floors, walls,
                    countertops, medical equipment, and other surfaces in
                    healthcare facilities, offices, schools, and homes.
                    <br />
                    <b>Features:</b> Effective against a broad spectrum of
                    pathogens, fast-acting, and safe for use on different
                    surfaces.
                  </div>
                </p>
                <br />
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '40px' }}>
                    Quality Standards Applicable in India:
                  </b>
                </p>
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <div style={{ marginLeft: '10%' }}>
                    <b>IS 1061:1997:</b> Standard for Hand Sanitizers: Specifies
                    requirements for the formulation, effectiveness, and safety
                    of hand sanitizers, ensuring they meet the necessary hygiene
                    standards.
                    <br />
                    <b>IS 13424:1992:</b> Standard for Disinfectants: Outlines
                    the specifications for chemical disinfectants used for
                    surface disinfection, including their efficacy against
                    microorganisms and safety for use.
                    <br />
                    <b>BIS Certification:</b> Bureau of Indian Standards (BIS):
                    Ensures that sanitizers and disinfectants meet the safety
                    and quality standards set by Indian regulatory authorities.
                    <br />
                    <b>ISO 9001:2015:</b> Quality Management Systems: Specifies
                    requirements for a quality management system to ensure
                    consistent production and adherence to regulatory
                    requirements for sanitizers and disinfectants.
                    <br />
                    <b>ISO 13485:2016:</b> Quality Management Systems for
                    Medical Devices: Specifies requirements for a quality
                    management system for the manufacture of medical-grade
                    disinfectants.
                    <br />
                    <b>EN 1500:2013:</b> European Standard for Hand Rubs:
                    Specifies the requirements and testing methods for hygienic
                    hand rubs, ensuring their efficacy in killing germs.
                    <br />
                    <b>EN 1276:2019:</b> European Standard for Chemical
                    Disinfectants: Outlines the requirements for the
                    bactericidal activity of chemical disinfectants and
                    antiseptics used in food, industrial, domestic, and
                    institutional areas.
                  </div>
                </p>

                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <div style={{ marginLeft: '10%' }}>
                    <b>FDA Approval:</b> For Products Sold in the United States:
                    Ensures that sanitizers and disinfectants meet stringent
                    safety and efficacy standards.
                    <br />
                    <b>CE Marking:</b> Conformity with European Standards:
                    Indicates that sanitizers and disinfectants meet health,
                    safety, and environmental protection standards for products
                    sold within the European Economic Area (EEA).
                  </div>
                </p>
                <br />
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <b style={{ fontSize: '40px' }}>
                    Importance of Quality Standards:
                  </b>
                  <br />
                  Adhering to these quality standards ensures that our
                  sanitizers and disinfectants provide the intended level of
                  protection and safety. Compliance with these standards is
                  crucial for maintaining trust and reliability in our products.
                  <br />
                  At OMDYS International LLP, we are committed to supplying
                  sanitizers and disinfectants that meet the highest quality
                  standards. Our products are rigorously tested and certified to
                  ensure maximum efficacy and safety, helping to maintain
                  hygiene and prevent the spread of infections in various
                  settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sanitizers;
