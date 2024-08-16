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
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Medical+Hand+Gloves__.svg"
          // src="assets/images/activity-four/svg/log/Medical Hand Gloves__.svg"
          alt="Our Project One Image 1"
        />
      </div>

      {/* -------------------------------------- */}
      <hr />
      <div style={{ marginTop: '' }}>
        <h3 className="acthdm3" style={{ textAlign: 'center' }}>
          Types of Gloves
        </h3>
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Latex+Gloves_.svg"
                        // src="assets/images/activity-four/svg/gloves/Health Care - Latex Gloves.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>Latex Gloves</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> Made from natural rubber latex, these
                      gloves offer excellent elasticity, comfort, and fit. They
                      provide high tactile sensitivity and are ideal for tasks
                      requiring precision.
                      <br />
                      <b>Uses:</b> Commonly used in medical and dental
                      procedures, laboratories, and general-purpose
                      applications.
                      <br />
                      <b>Features:</b> Available in powdered and powder-free
                      options, providing a secure grip and minimizing hand
                      fatigue.
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Nitrile Gloves</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
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
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Nitrile+Gloves_.svg"
                        // src="assets/images/activity-four/svg/gloves/Health Care - Nitrile Gloves.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Vinyl+Gloves_.svg"
                        // src="assets/images/activity-four/svg/gloves/Health Care - Vinyl Gloves.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Vinyl Gloves</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> Made from polyvinyl chloride (PVC),
                      these gloves are a cost-effective option for low-risk
                      tasks. They offer good barrier protection and are
                      latex-free.
                      <br />
                      <b>Uses:</b> Suitable for food handling, light cleaning
                      tasks, and non-sterile medical procedures.
                      <br />
                      <b>Features:</b> Soft and comfortable, with a looser fit
                      compared to latex and nitrile gloves.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="container" style={{ marginTop: '-5%' }}>
        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
          <b className="actsubhd">Quality Standards:</b>
          <br />
          <br />
          <div style={{ marginLeft: '10%' }}>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              <b>IS 4148:1989:</b> Standard for Surgical Rubber Gloves:
              Specifies requirements for surgical gloves, including physical
              properties, sterility, and packaging.
              <br />
              <b>IS 15354:2003:</b> Standard for Examination Gloves: Outlines
              specifications for non-sterile and sterile examination gloves,
              ensuring adequate barrier protection and durability.
              <br />
              <b>BIS Certification:</b> Bureau of Indian Standards (BIS):
              Ensures that medical gloves meet the safety and quality standards
              set by Indian regulatory authorities.
              <br />
              <b>ISO 11193-1:2008:</b> Single-Use Medical Examination Gloves:
              Specifies requirements for single-use medical examination gloves,
              including physical properties and freedom from holes.
              <br />
              <b>ISO 10282:2014:</b> Single-Use Sterile Surgical Gloves:
              Outlines specifications for single-use sterile surgical gloves,
              ensuring high barrier protection and sterility.
              <br />
              <b>ASTM Standards:</b>
              <br />
              ASTM D3578: Standard specification for rubber examination gloves.
              <br />
              ASTM D6319: Standard specification for nitrile examination gloves
              for medical application.
              <br />
              ASTM D5250: Standard specification for polyvinyl chloride gloves
              for medical application.
            </p>

            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              <b>FDA Approval:</b> For Products Sold in the United States:
              Ensures that medical gloves meet stringent safety and efficacy
              standards.
              <br />
              <b>CE Marking:</b> Conformity with European Standards: Indicates
              that medical gloves meet health, safety, and environmental
              protection standards for products sold within the European
              Economic Area (EEA).
            </p>
          </div>
        </p>

        <p style={{ fontSize: '18px', textAlign: 'justify', marginTop: '' }}>
          <br />
          <b className="actsubhd">Importance of Quality Standards:</b>
          <br />
          <br />
          Adhering to these quality standards ensures that medical gloves
          provide the intended level of protection, safety, and reliability.
          Compliance with these standards is crucial for maintaining the trust
          and safety of healthcare professionals and patients.
          <br />
          At OMDYS International LLP, we are committed to supplying medical
          gloves that meet the highest quality standards. Our products are
          rigorously tested and certified to ensure maximum protection and
          reliability, helping to safeguard health and well-being in various
          healthcare and non-medical settings.
        </p>
        <br />
      </div>
    </>
  );
};

export default Gloves;
