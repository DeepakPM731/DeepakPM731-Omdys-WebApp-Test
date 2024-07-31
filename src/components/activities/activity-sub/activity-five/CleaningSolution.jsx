import React from 'react';

const CleaningSolution = () => {
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
        <h2>Cleaning Solutions</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Cleaning+Solutions.svg"
          // src="assets/images/activity-four/svg/log/Cleaning Solutions.svg"
          alt="Our Project One Image 1"
        />
      </div>

      {/* -------------------------------------- */}
      <hr />
      <div style={{ marginTop: '' }}>
        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Types of Cleaning Solutions
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Toilet+Cleaner.svg"
                        // src="assets/images/activity-four/svg/Cleaning & Sanitizers/Health Care - Toilet Cleaner.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>Toilet Cleaner</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> Specially formulated to tackle tough
                      stains, kill germs, and eliminate odors, ensuring a clean
                      and hygienic restroom environment. Uses: Ideal for
                      cleaning and disinfecting toilet bowls, urinals, and other
                      bathroom fixtures in hospitals and medical facilities.
                      <br />
                      <b>Uses:</b> Ideal for cleaning and disinfecting toilet
                      bowls, urinals, and other bathroom fixtures in hospitals
                      and medical facilities.
                      <br />
                      <b>Features:</b> Powerful cleaning agents that remove
                      limescale and stains, disinfectants that kill bacteria and
                      viruses, and pleasant fragrances that leave the restroom
                      smelling fresh.
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Floor Cleaner</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> Designed to effectively clean and
                      disinfect various types of flooring, including tile,
                      vinyl, and linoleum, commonly found in hospitals and
                      medical settings.
                      <br />
                      <b>Uses:</b> Suitable for daily cleaning and maintenance
                      of floors in patient rooms, hallways, operating rooms, and
                      other areas within healthcare facilities.
                      <br />
                      <b>Features:</b> Non-abrasive formulas that remove dirt
                      and grime without damaging floors, disinfectants that kill
                      pathogens, and quick-drying properties to minimize slip
                      hazards.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Floor+Cleaner.svg"
                        // src="assets/images/activity-four/svg/Cleaning & Sanitizers/Health Care - Floor Cleaner.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Glass+Cleaner.svg"
                        // src="assets/images/activity-four/svg/Cleaning & Sanitizers/Health Care - Glass Cleaner.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Glass Cleaner</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> Provides streak-free cleaning and
                      disinfection for glass surfaces, ensuring clear visibility
                      and a spotless appearance.
                      <br />
                      <b>Uses:</b> Perfect for cleaning windows, mirrors, glass
                      doors, and other glass surfaces in hospitals and medical
                      facilities.
                      <br />
                      <b>Features:</b> Fast-acting formulas that remove smudges,
                      fingerprints, and dirt, anti-static properties to repel
                      dust, and non-ammoniated options safe for use in sensitive
                      areas.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Phenol</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b>Phenol is a powerful disinfectant and
                      cleaning agent that effectively kills bacteria and viruses
                      on various surfaces.
                      <br />
                      <b>Uses:</b> Used for cleaning and disinfecting floors,
                      surfaces, and equipment in hospitals and healthcare
                      facilities.
                      <br />
                      <b>Features:</b> Strong antimicrobial properties,
                      effective against a wide range of pathogens, and can be
                      used in diluted form for routine cleaning.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Phenol.svg"
                        // src="assets/images/activity-four/svg/Cleaning & Sanitizers/Health Care - Phenol.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Bleaching+Powder.svg"
                        // src="assets/images/activity-four/svg/Cleaning & Sanitizers/Health Care - Bleaching Powder.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Bleaching Powder</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> Bleaching powder, also known as
                      calcium hypochlorite, is a versatile disinfectant and
                      cleaning agent used for sterilizing surfaces and water.
                      <br />
                      <b>Uses:</b> Suitable for disinfecting floors, walls,
                      medical equipment, and water purification in hospitals.
                      <br />
                      <b>Features:</b> High efficacy in killing bacteria,
                      viruses, and fungi, cost-effective, and can be used in
                      various concentrations for different applications.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Hydrogen Peroxide</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Description:</b> A strong oxidizing agent used for
                      disinfection and sterilization.
                      <br />
                      <b>Uses:</b> Effective for surface disinfection, wound
                      cleaning, and sterilizing medical equipment.
                      <br />
                      <b>Features:</b> Broad-spectrum antimicrobial activity,
                      safe for use on various surfaces, and leaves no residue.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Health+Care+-+Hydrogen+Peroxide.svg"
                        // src="assets/images/activity-four/svg/Cleaning & Sanitizers/Health Care - Hydrogen Peroxide.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="container" style={{ marginTop: '-5%' }}>
        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
          <b style={{ fontSize: '34px' }}>
            Quality Standards Applicable in India:
          </b>
          <br />
          <br />
          <div style={{ marginLeft: '10%' }}>
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              <b>IS 1061:1997:</b>
              <br />
              Standard for Cleaning Solutions: Specifies the requirements for
              the formulation, effectiveness, and safety of cleaning solutions,
              ensuring they meet the necessary hygiene standards.
              <br />
              <b>BIS Certification:</b>
              <br />
              Bureau of Indian Standards (BIS): Ensures that cleaning solutions
              meet the safety and quality standards set by Indian regulatory
              authorities.
              <br />
              <b>ISO 9001:2015:</b>
              <br />
              Quality Management Systems: Specifies requirements for a quality
              management system to ensure consistent production and adherence to
              regulatory requirements for cleaning solutions.
              <br />
              <b>ISO 14001:2015:</b>
              <br />
              Environmental Management Systems: Specifies requirements for an
              environmental management system to ensure the production and use
              of cleaning solutions are environmentally sustainable.
              <br />
              <b>EN 1276:2019:</b>
              <br />
              European Standard for Chemical Disinfectants: Outlines the
              requirements for the bactericidal activity of chemical
              disinfectants and antiseptics used in food, industrial, domestic,
              and institutional areas.
              <br />
              <b>FDA Approval:</b>
              <br />
              For Products Sold in the United States: Ensures that cleaning
              solutions meet stringent safety and efficacy standards.
              <br />
              <b>CE Marking:</b>
              <br />
              Conformity with European Standards: Indicates that cleaning
              solutions meet health, safety, and environmental protection
              standards for products sold within the European Economic Area
              (EEA).
            </p>

            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              <b>FDA Approval:</b>For Products Sold in the United States:
              Ensures that eye protection equipment meets stringent safety and
              efficacy standards.
              <br />
              <b>CE Marking:</b> Conformity with European Standards: Indicates
              that eye protection equipment meets health, safety, and
              environmental protection standards for products sold within the
              European Economic Area (EEA).
            </p>
          </div>
        </p>

        <p style={{ fontSize: '18px', textAlign: 'justify', marginTop: '' }}>
          <br />
          <b style={{ fontSize: '34px' }}>Importance of Quality Standards:</b>
          <br />
          <br />
          Adhering to these quality standards ensures that our cleaning
          solutions provide the intended level of cleanliness, safety, and
          environmental protection. Compliance with these standards is crucial
          for maintaining the trust and safety of healthcare professionals and
          patients.
          <br />
          At OMDYS International LLP, we are committed to supplying cleaning
          solutions that meet the highest quality standards. Our products are
          rigorously tested and certified to ensure maximum efficacy and safety,
          helping to maintain hygiene and prevent the spread of infections in
          hospitals and medical settings.
        </p>
        <br />
      </div>
    </>
  );
};

export default CleaningSolution;
