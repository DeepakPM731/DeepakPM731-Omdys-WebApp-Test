import React from 'react';

const Connector = () => {
  return (
    <>
      <div>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2 style={{ textAlign: 'center' }}>
                  Oil& Gas Equipment Supply
                </h2>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  tenetur culpa rerum, ipsam odio voluptatem excepturi quasi!
                </p> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      {/* <figure
        style={{
          // display: 'flex',
          // justifyContent: 'center',
          width: '100vw',
        }}
      > */}
      {/* <div className="container" style={{}}>
        <img
          className="industry"
          style={{ width: '100%' }}
          // src="assets/svg4/petroleum and petrochemical products (2).svg"
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div> */}
      {/* </figure> */}

      {/* ---------Head ends-------- */}
      {/* ------------Chemical Products Starts ------------------ */}
      {/* ------------Chemical Products Ends ------------------ */}
      {/* ------------Petroleum Products Starts ------------------ */}
      <div className="heading" style={{ marginTop: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>LET'S HELP YOU WITH OUR PRODUCTS</span>
        <h3 className="petroheadline">Fittings and Connectors</h3>
        <br />
      </div>
      <br />
      <br />
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li className="pipelist">
                  <div className="data">
                    <h3>Flanges</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Connecting pipes, valves, pumps, and other equipment,
                      flanges are essential for creating secure joins in
                      pipeline systems. They are available in various types,
                      such as weld neck, slip-on, and blind flanges, each suited
                      for different applications. Flanges comply with ISO 7005-1
                      and ANSI B16.5 standards, ensuring reliable, leak-proof
                      connections critical for the safe and efficient operation
                      of petroleum facilities as per GCC requirements.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Flanges.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Couplings.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Couplings</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Used to join pipes of varying sizes or materials,
                      couplings ensure a seamless flow of fluids. They are
                      available in rigid and flexible forms, catering to
                      different needs within the pipeline system. Couplings
                      manufactured to ISO 10893-8 and ASTM A182 standards
                      guarantee their performance, reliability, and
                      compatibility with diverse pipeline requirements in the
                      petroleum sector, meeting GCC norms
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Elbows</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These fittings change the direction of piping, commonly
                      available in angles like 45° and 90°. Elbows are crucial
                      for navigating the layout of pipeline systems without
                      compromising flow efficiency. Elbows meet ISO 3419 and
                      ANSI B16.9 standards, ensuring they provide dependable
                      performance and fit seamlessly into complex pipeline
                      infrastructures as per GCC specifications.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Elbows.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Tees and Crosses.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Tees and Crosses</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Allowing for the distribution of fluid in different
                      directions, tees and crosses connect multiple pipes. They
                      are essential for branching pipelines and ensuring proper
                      flow distribution. These fittings adhere to ISO 3419 and
                      ANSI B16.9 standards, guaranteeing their reliability,
                      durability, and suitability for various configurations in
                      petroleum pipeline systems, meeting GCC requirements.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Reducers</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Used to connect pipes of different diameters, reducers
                      help maintain flow efficiency and pressure within the
                      pipeline. They come in concentric and eccentric forms,
                      each suited for specific applications. Reducers comply
                      with ISO 3419 and ANSI B16.9 standards, ensuring robust
                      and reliable connections critical for maintaining pipeline
                      integrity and performance as per GCC norms.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Reducers.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/Unions.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Unions</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These fittings allow easy disassembly and reassembly of
                      pipes, facilitating maintenance and repairs. Unions are
                      essential for sections of the pipeline that require
                      frequent access or modifications. Unions meet ISO 7-1 and
                      ASTM A105 standards, ensuring their reliability, ease of
                      use, and compatibility with the rigorous demands of the
                      petroleum industry as per GCC standards.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Connector;
