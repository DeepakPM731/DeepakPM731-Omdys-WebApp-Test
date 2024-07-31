import React, { useEffect } from 'react';

const ProtectiveApparel = () => {
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
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Protective+Apparel__.svg"
          // src="assets/images/activity-four/svg/log/Protective Apparel__.svg"
          alt="Our Project One Image 1"
        />
      </div>

      {/* -------------------------------------- */}
      <hr />
      <div style={{ marginTop: '' }}>
        {/* ---------Eye protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Types of Medical Protective Apparel
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Disposable+Gowns.svg"
                        // src="assets/images/activity-four/svg/protective/Health Care - Disposable Gowns.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>Disposable Gowns</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Isolation Gowns:</b> Designed to protect healthcare
                      workers from infectious materials and contaminants.
                      Available in various levels of protection, including
                      non-surgical and surgical options.
                      <br />
                      <b>Surgical Gowns:</b> Sterile gowns used during surgical
                      procedures to protect both the patient and medical
                      personnel from the transfer of microorganisms, body
                      fluids, and particulate matter.
                      <br />
                      <b>Cover Gowns:</b> Lightweight gowns for use in routine
                      patient care and non-sterile procedures.
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Coveralls</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Protective Coveralls:</b> Full-body suits that provide
                      comprehensive protection against hazardous substances,
                      including biological and chemical agents. Ideal for
                      high-risk environments.
                      <br />
                      <b>Disposable Coveralls:</b> Single-use coveralls that are
                      easy to don and doff, offering protection against
                      contaminants and infectious agents.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Coveralls.svg"
                        // src="assets/images/activity-four/svg/protective/Health Care - Coveralls.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Aprons.svg"
                        // src="assets/images/activity-four/svg/protective/Health Care - Aprons.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Aprons</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Plastic Aprons:</b> Waterproof aprons that provide an
                      additional layer of protection against spills and
                      splashes. Commonly used in laboratory and healthcare
                      settings.
                      <br />
                      <b>Disposable Aprons:</b> Lightweight and easy to dispose
                      of after use, ensuring hygiene and safety.
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Lab Coats</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Disposable Lab Coats:</b> Designed for single-use to
                      prevent cross-contamination and maintain a sterile
                      environment.
                      <br />
                      <b>Reusable Lab Coats:</b> Made from durable materials
                      that can be laundered and reused, providing protection
                      against spills and contaminants in clinical and laboratory
                      settings.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Lab+Coats.svg"
                        // src="assets/images/activity-four/svg/protective/Health Care - Lab Coats.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------Hearing protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px', marginTop: '-6%' }}>
          Other Protective Apparel
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Other+Protective+Apparel.svg"
                        // src="assets/images/activity-four/svg/protective/Health Care - Other Protective Apparel.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4></h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Bouffant Caps:</b> Used to cover hair, reducing the
                      risk of contamination in sterile environments.
                      <br />
                      <b>Shoe Covers:</b> Protect footwear and reduce the
                      transfer of contaminants from shoes to sterile areas.
                      <br />
                      <b>Sleeve Protectors:</b> Provide additional protection
                      for arms, especially during procedures involving fluids or
                      chemicals.
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
          <b style={{ fontSize: '34px' }}>Quality Standards:</b>
          <br />
          <br />
          <div style={{ marginLeft: '10%' }}>
            <b>IS 17423:2020:</b> Standard for Medical Textiles: Specifies
            requirements for disposable medical textiles, including gowns,
            drapes, and coveralls. Ensures materials are safe, effective, and
            meet performance criteria.
            <br />
            <b>IS 17334:2019:</b> Standard for Surgical Gowns: Outlines
            specifications for surgical gowns, including sterility, barrier
            properties, and tensile strength.
            <br />
            <b>BIS Certification:</b> Bureau of Indian Standards (BIS): Ensures
            that medical protective apparel meets the safety and quality
            standards set by Indian regulatory authorities.
            <br />
            <b>ISO 13485:2016:</b> Quality Management Systems: Specifies
            requirements for a quality management system for medical devices,
            ensuring consistent production and adherence to regulatory
            requirements.
            <br />
            <b>ISO 16603 and ISO 16604:</b> Barrier Performance: Standards for
            determining the resistance of protective clothing materials to
            penetration by blood-borne pathogens and synthetic blood.
            <br />
            <b>FDA Approval:</b> For Products Sold in the United States: Ensures
            that medical protective apparel meets stringent safety and efficacy
            standards.
            <br />
            <b>CE Marking:</b> Conformity with European Standards: Indicates
            that protective apparel meets health, safety, and environmental
            protection standards for products sold within the European Economic
            Area (EEA).
          </div>
        </p>

        <p style={{ fontSize: '18px', textAlign: 'justify', marginTop: '' }}>
          <br />
          <b style={{ fontSize: '34px' }}>Importance of Quality Standards:</b>
          <br />
          <br />
          Adhering to these quality standards ensures that medical protective
          apparel provides the intended level of protection, safety, and
          reliability. Compliance with these standards is crucial for
          maintaining the trust and safety of healthcare professionals and
          patients.
          <br />
          At OMDYS International LLP, we are committed to supplying medical
          protective apparel that meets the highest quality standards. Our
          products are rigorously tested and certified to ensure maximum
          protection and reliability, helping to safeguard health and well-being
          in various healthcare settings.
        </p>
        <br />
      </div>
    </>
  );
};

export default ProtectiveApparel;
