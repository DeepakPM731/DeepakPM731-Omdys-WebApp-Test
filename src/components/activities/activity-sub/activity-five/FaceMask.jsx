import React, { useEffect } from 'react';

const FaceMask = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
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
        <h2>Face Masks</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Face Mask__.svg"
          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div>

      {/* -------------------------------------- */}
      <hr />
      <div style={{ marginTop: '' }}>
        {/* ---------Eye protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Types of Medical Face Masks
        </h3>
        <br />
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
                        src="assets/images/activity-four/svg/Gate Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>Surgical Masks</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> Surgical masks are loose-fitting,
                      disposable masks that cover the nose, mouth, and chin.
                      They create a physical barrier between the wearer's mouth
                      and nose and potential contaminants in the environment.
                      <br />
                      <b>Uses:</b> Commonly used in healthcare settings to
                      protect both the patient and healthcare personnel from
                      infections. Also used by the general public to reduce the
                      spread of respiratory illnesses.
                      <br />
                      <b>Features:</b> Made of multiple layers of non-woven
                      fabric, typically with a fluid-resistant outer layer and a
                      moisture-absorbing inner layer.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>N95 Respirators</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> N95 respirators are tight-fitting
                      masks that filter out at least 95% of airborne particles,
                      including large respiratory droplets and smaller aerosols.
                      <br />
                      <b>Uses:</b> Widely used in healthcare settings,
                      especially in situations where there is a high risk of
                      exposure to airborne particles, such as during
                      aerosol-generating procedures.
                      <br />
                      <b>Features:</b> Designed to achieve a close facial fit
                      with a seal around the nose and mouth, equipped with
                      elastic headbands and an adjustable nose clip for a secure
                      fit.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Gate Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li style={{ marginTop: '-5%' }}>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Gate Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>KN95 Masks</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> KN95 masks are similar to N95
                      respirators but conform to Chinese standards for
                      respiratory protection. They filter out at least 95% of
                      airborne particles.
                      <br />
                      <b>Uses:</b> Used in healthcare and public settings for
                      protection against airborne particles and pathogens.
                      <br />
                      <b>Features:</b> Typically feature ear loops for easy
                      wearing and an adjustable nose clip to ensure a snug fit.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------Hearing protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px', marginTop: '-6%' }}>
          Other Respirators and Masks
        </h3>
        <br />
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h4></h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>FFP2 Masks:</b> Equivalent to N95 and KN95 masks, these
                      European standard masks filter at least 94% of airborne
                      particles.
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Gate Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
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
                        src="assets/images/activity-four/svg/Gate Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4></h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>FFP3 Masks:</b> Provide a higher level of protection,
                      filtering at least 99% of airborne particles. Used in
                      high-risk settings.
                      <br />
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4></h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Reusable Cloth Masks:</b> Made from various fabrics,
                      often with multiple layers. Suitable for general public
                      use and can be washed and reused.
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Gate Valves.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container" style={{ marginTop: '-5%' }}>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            <b style={{ fontSize: '34px' }}>Quality Standards:</b>
            <br />
            <br />
            <div style={{ marginLeft: '10%' }}>
              <b>IS 16289:2014:</b> Standard for Surgical Masks: Specifies
              requirements for surgical masks, including bacterial filtration
              efficiency (BFE), breathability, and splash resistance.
              <br />
              <b>IS 9473:2002:</b> Standard for N95 Respirators: Outlines
              specifications for respiratory protective devices, ensuring they
              meet necessary filtration efficiency and fit standards.
              <br />
              <b>BIS Certification:</b> Bureau of Indian Standards (BIS):
              Ensures that face masks and respirators meet the safety and
              quality standards set by Indian regulatory authorities.
              <br />
              <b>ISO 13485:2016:</b> Quality Management Systems: Specifies
              requirements for a quality management system for medical devices,
              ensuring consistent production and adherence to regulatory
              requirements.
              <br />
              <b>FDA and CE Marking:</b> FDA Approval: For masks that are
              intended to be sold in the United States, ensuring they meet
              stringent safety and efficacy standards.
              <br />
              <b>CE Marking:</b> Indicates conformity with health, safety, and
              environmental protection standards for products sold within the
              European Economic Area (EEA).
            </div>
          </p>

          <p style={{ fontSize: '18px', textAlign: 'justify', marginTop: '' }}>
            <br />
            <b style={{ fontSize: '34px' }}>Importance of Quality Standards:</b>
            <br />
            <br />
            Adherence to quality standards ensures that medical face masks
            provide the intended level of protection, are safe to use, and are
            effective in preventing the spread of infections. It is crucial for
            manufacturers to comply with these standards to maintain the trust
            and safety of healthcare professionals and the public.
            <br />
            At OMDYS International LLP, we are committed to supplying medical
            face masks that meet the highest quality standards. Our products are
            rigorously tested and certified to ensure maximum protection and
            reliability, helping to safeguard health and well-being in various
            settings.
          </p>
          <br />
        </div>
        <div className="container">
          <p style={{ fontSize: '', textAlign: 'justify' }}>
            Proper use of PPE is crucial in minimizing the risk of injuries and
            ensuring a safe working environment. Employers must provide
            appropriate PPE and ensure that workers are trained in its correct
            use and maintenance to comply with safety regulations and protect
            their health. At OMDYS International LLP, we are dedicated to
            supplying high-quality PPE to safeguard construction workers and
            ensure compliance with industry standards. Our extensive range of
            PPE offers comprehensive protection, ensuring that you have the
            right equipment to keep your workforce safe from head to toe.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default FaceMask;
