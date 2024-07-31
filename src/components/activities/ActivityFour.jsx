import { useEffect } from 'react';

const ActivityFour = () => {
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
      {/* ---------Head starts--------- */}
      <div>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details" style={{ textAlign: 'center' }}>
                <h2>Oil & Gas Equipments Supply</h2>
                <br />
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
      <div className="container" style={{}}>
        <img
          className="industry"
          style={{ width: '100%' }}
          // src="assets/svg4/petroleum and petrochemical products (2).svg"
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div>
      {/* </figure> */}
      <div className="container mt-5 mb-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="who-we-are">
              <div>
                {/* <h3 className="mb-5 text-center" >
                  Wide Range of Products
                </h3> */}
                {/* <p style={{ textAlign: 'justify' }}> */}
                <p
                  style={{
                    fontSize: '18px',
                    textAlign: 'justify',
                    margin: 0,
                    padding: 0,
                    whiteSpace: 'normal',
                    wordBreak: 'break-all',
                    lineHeight: '1.5',
                    wordSpacing: '0.5px',
                    hyphens: 'auto',
                  }}
                >
                  Omdys International LLP is committed to offering comprehensive
                  service support in the oil and gas sector. Our primary focus
                  is on the procurement and distribution of petroleum and
                  petrochemical products to our clientele. We adhere strictly to
                  International Standard working practices in all our business
                  operations. At Omdys International LLP, we believe in building
                  long-term relationships with our clients and look forward to
                  serving you and meeting your Industrial Chemical needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
      </div>
      {/* ---------Head ends-------- */}
      {/* ------------Chemical Products Starts ------------------ */}
      {/* ------------Chemical Products Ends ------------------ */}
      {/* ------------Petroleum Products Starts ------------------ */}
      <br />
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>LET'S HELP YOU WITH OUR PRODUCTS</span>
        <h3 className="petroheadline">Valves</h3>
      </div>

      <div className="container">
        <br />
      </div>
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h3>Gate Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Designed for on/off control, gate valves provide a
                      reliable, tight seal in pipelines, preventing leaks. They
                      are ideal for high-pressure applications where a
                      straight-line flow and minimal flow restriction are
                      needed. These valves comply with ISO 10434 and API 600
                      standards, ensuring durability and safety, which are
                      endorsed by GCC regulations. Gate valves meet the
                      stringent requirements of the petroleum industry in the
                      region, providing reliable operation under demanding
                      conditions.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Gate+Valves.svg"
                        // src="assets/images/activity-four/svg/Gate Valves.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Butterfly+Valves.svg"
                        // src="assets/images/activity-four/svg/Butterfly Valves.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Butterfly Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Lightweight and compact, butterfly valves are used for
                      flow regulation. They offer quick operation and are
                      suitable for large-volume applications. These valves are
                      versatile and can handle various types of fluids,
                      including corrosive ones. Adhering to ISO 5752 and API 609
                      standards, butterfly valves are designed to withstand the
                      demanding conditions of the petroleum sector, providing
                      reliable performance and ease of maintenance.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Globe Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Ideal for throttling applications, globe valves provide
                      precise control over fluid flow. They are designed to
                      handle high-pressure and high-temperature environments,
                      ensuring consistent performance and longevity. Globe
                      valves meet ISO 17292 and API 602 standards, ensuring
                      safety and efficiency. These standards are endorsed by GCC
                      regulations, making them a reliable choice for critical
                      applications within the petroleum industry.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Globe+Valves.svg"
                        // src="assets/images/activity-four/svg/Globe Valves.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Check+Valves.svg"
                        // src="assets/images/activity-four/svg/Check Valves.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Check Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Essential for preventing backflow, check valves ensure the
                      unidirectional flow of fluids. They are crucial in
                      maintaining system integrity and protecting equipment from
                      potential damage due to reverse flow. Check valves comply
                      with ISO 14313 and API 594 standards, ensuring high
                      reliability and safety in petroleum applications.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Ball Valves</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Known for their durability and excellent shutoff
                      capabilities, ball valves are widely used in the petroleum
                      industry. They offer low-pressure drop and high flow
                      capacity, making them suitable for both liquid and gaseous
                      applications. Ball valves comply with ISO 17292 and API
                      608 standards, ensuring robustness, performance, and
                      compatibility with various petroleum products. These
                      valves meet GCC norms, ensuring safe and efficient
                      operations.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Ball+Valves.svg"
                        // src="assets/images/activity-four/svg/Ball Valves.svg"

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
      {/* ----------------------------Pipes----------------------------- */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h3 className="petroheadline">Pipes</h3>
        <br />
      </div>
      <br />
      <br />
      <div className="pipehead" style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li className="pipelist">
                  <div className="data">
                    <h3>Steel Pipes</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Renowned for their strength and durability, steel pipes
                      are essential in transporting crude oil, natural gas, and
                      refined products. They are capable of withstanding high
                      pressures and harsh environments, ensuring safe and
                      efficient transport of materials. Steel pipes comply with
                      ISO 3183 (for oil and gas transportation) and API 5L
                      standards, meeting GCC requirements for quality and
                      performance.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Steel+Pipes.svg"
                        // src="assets/images/activity-four/svg/Steel Pipes.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Stainless+Steel+Pipes.svg"
                        // src="assets/images/activity-four/svg/Stainless Steel Pipes.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Stainless Steel Pipes</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Highly resistant to corrosion, stainless steel pipes are
                      perfect for environments where chemical reactions could
                      degrade other materials. They offer longevity and
                      reliability in transporting fluids that might be
                      corrosive. Stainless steel pipes comply with ISO 1127 and
                      ASTM A312 standards, ensuring compatibility and resilience
                      in the challenging conditions of the petroleum sector,
                      meeting GCC norms.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Alloy Pipes</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These pipes are engineered for high-temperature and
                      high-pressure applications. Their composition allows them
                      to maintain structural integrity under extreme conditions,
                      making them ideal for critical parts of the petroleum
                      infrastructure. Alloy pipes comply with ISO 15590-1 and
                      ASTM A335 standards, guaranteeing their strength,
                      durability, and suitability for demanding industrial
                      applications as per GCC standards.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Alloy+Pipes.svg"
                        // src="assets/images/activity-four/svg/Alloy Pipes.svg"

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
      {/* -------------------------Fittings and Connectors------------------------ */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Flanges.svg"
                        // src="assets/images/activity-four/svg/Flanges.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Couplings.svg"
                        // src="assets/images/activity-four/svg/Couplings.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Elbows.svg"
                        // src="assets/images/activity-four/svg/Elbows.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Tees+and+Crosses.svg"
                        // src="assets/images/activity-four/svg/Tees and Crosses.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Reducers.svg"
                        // src="assets/images/activity-four/svg/Reducers.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Unions.svg"
                        // src="assets/images/activity-four/svg/Unions.svg"

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
      {/* -------------------------Gaskets and Seals------------------------ */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h3 className="petroheadline"> Gaskets and Seals</h3>
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
                    <h3>Ring Joint Gaskets</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Provide leak-proof seals in high-pressure applications,
                      ensuring the integrity of pipeline connections. These
                      gaskets are designed to withstand extreme conditions,
                      making them ideal for the petroleum industry. Ring joint
                      gaskets comply with ISO 10423 and API 6A standards,
                      ensuring their performance, durability, and safety in
                      critical applications as per GCC requirements.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Ring+Joint+Gaskets.svg"
                        // src="assets/images/activity-four/svg/Ring Joint Gaskets.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Spiral+Wound+Gaskets.svg"
                        // src="assets/images/activity-four/svg/Spiral Wound Gaskets.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Spiral Wound Gaskets</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Suitable for fluctuating temperatures and pressures, these
                      gaskets offer reliable sealing performance. They are made
                      from a combination of metal and filler materials,
                      providing flexibility and durability. Spiral wound gaskets
                      comply with ISO 7483 and API 601 standards, ensuring they
                      deliver consistent and dependable sealing in various
                      petroleum applications, meeting GCC norms.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Non-Asbestos Gaskets</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Environmentally friendly alternatives to traditional
                      asbestos gaskets, these provide effective sealing in
                      various applications. They are made from materials that
                      ensure safety and compliance with environmental standards.
                      Non-asbestos gaskets meet ISO 9001 and EN 13555 standards,
                      providing safe, reliable, and sustainable sealing
                      solutions for the petroleum industry as per GCC
                      regulations.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Non-Asbestos+Gaskets.svg"
                        // src="assets/images/activity-four/svg/Non-Asbestos Gaskets.svg"
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
      {/* -------------------------Bolts and Nuts------------------------ */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h3 className="petroheadline">Bolts and Nuts</h3>
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
                    <h3>High-Strength Bolts</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Essential for securing connections in high-pressure
                      environments, these bolts offer durability and
                      reliability. They are made from materials that can
                      withstand the stresses of the petroleum industry.
                      High-strength bolts comply with ISO 898-1 and ASTM A193
                      standards, ensuring they provide robust and secure
                      fastening solutions critical for maintaining structural
                      integrity in petroleum operations as per GCC standards.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/High-Strength+Bolts.svg"
                        // src="assets/images/activity-four/svg/High-Strength Bolts.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Stud+Bolts.svg"
                        // src="assets/images/activity-four/svg/Stud Bolts.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Stud Bolts</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Commonly used in flange connections, stud bolts are
                      threaded rods with nuts on both ends. They provide a
                      strong, secure fastening method for connecting flanges and
                      other components. Stud bolts meet ISO 898-1 and ASTM A193
                      standards, guaranteeing their performance, reliability,
                      and suitability for high-stress applications in the
                      petroleum sector as per GCC norms.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Hex Nuts</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Standard fastening nuts used with bolts and studs, hex
                      nuts provide a reliable connection. They are available in
                      various materials to match the requirements of different
                      applications. Hex nuts comply with ISO 4032 and ASTM A194
                      standards, ensuring they offer dependable performance and
                      compatibility with diverse fastening needs in petroleum
                      operations as per GCC regulations.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Hex+Nuts.svg"
                        // src="assets/images/activity-four/svg/Hex Nuts.svg"

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
      {/* -------------------------Hoses and Tubing------------------------ */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h2>Hoses and Tubing</h2>
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
                    <h3>Flexible Metal Hoses</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      These hoses absorb vibration, compensate for misalignment,
                      and facilitate movement within the pipeline system. They
                      are durable and capable of handling a variety of fluids
                      and gases. Flexible metal hoses comply with ISO 10380 and
                      API 570 standards, ensuring they provide reliable and
                      long-lasting service in the demanding conditions of the
                      petroleum industry as per GCC norms.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Flexible+metal+hoses.svg"
                        // src="assets/images/activity-four/svg/Flexible metal hoses.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Rubber+Hoses.svg"
                        // src="assets/images/activity-four/svg/Rubber Hoses.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Rubber Hoses</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Known for their flexibility and durability, rubber hoses
                      are used for transferring petroleum products. They are
                      designed to handle the pressures and conditions of the
                      petroleum industry. Rubber hoses meet ISO 1436 and SAE
                      J517 standards, ensuring they offer safe, reliable, and
                      efficient fluid transfer solutions as per GCC
                      requirements.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>PTFE Hoses</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Resistant to chemicals and high temperatures, PTFE hoses
                      are ideal for transporting corrosive fluids. They offer a
                      long service life and maintain their integrity under
                      extreme conditions. PTFE hoses comply with ISO 12086 and
                      SAE AS4897 standards, ensuring they provide safe,
                      reliable, and high-performance solutions for handling
                      aggressive fluids in the petroleum sector as per GCC
                      norms.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/PTFE+Hoses.svg"
                        // src="assets/images/activity-four/svg/PTFE Hoses.svg"
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
      {/* -------------------------Instrumentation and Controls------------------------ */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h3 className="petroheadline">Instrumentation and Controls</h3>
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
                    <h3>Pressure Gauges</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Essential for monitoring pipeline pressure, these gauges
                      ensure the safe and efficient operation of petroleum
                      systems. They provide real-time data, helping to prevent
                      overpressure situations. Pressure gauges comply with ISO
                      5171 and ASME B40.100 standards, ensuring they deliver
                      accurate, reliable, and consistent measurements critical
                      for maintaining operational safety as per GCC standards.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Pressure+gauges.svg"
                        // src="assets/images/activity-four/svg/Pressure gauges.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Temperature+Sensors.svg"
                        // src="assets/images/activity-four/svg/Temperature Sensors.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Temperature Sensors</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Track temperature changes within the pipeline and
                      equipment, ensuring optimal operating conditions. These
                      sensors help in maintaining system stability and
                      preventing overheating. Temperature sensors comply with
                      ISO 9001 and IEC 60751 standards, ensuring they provide
                      precise and reliable temperature monitoring essential for
                      safe and efficient petroleum operations as per GCC norms.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Flow Meters</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Measure the flow rate of liquids and gases, providing
                      crucial data for maintaining the efficiency of petroleum
                      processes. They are available in various types, each
                      suited for specific applications. Flow meters meet ISO
                      4064 and OIML R49 standards, ensuring they deliver
                      accurate, reliable, and consistent flow measurements
                      critical for optimizing petroleum production and
                      processing as per GCC regulations.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Flow+Meters.svg"
                        // src="assets/images/activity-four/svg/Flow Meters.svg"
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
      {/* -------------------------Safety and Maintenance------------------------ */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h3 className="petroheadline">Safety and Maintenance</h3>
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
                    <h3>Leak Detection Systems</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Identify and alert for leaks in the pipeline systems,
                      helping to prevent environmental damage and product loss.
                      These systems are critical for maintaining the integrity
                      of the pipeline. Leak detection systems comply with ISO
                      20815 and API 1130 standards, ensuring they provide
                      reliable, early warning capabilities essential for
                      preventing catastrophic failures as per GCC requirements.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Leak+Detection+Systems.svg"
                        // src="assets/images/activity-four/svg/Leak Detection Systems.svg"
                        
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                {/* <li>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Corrosion Protection Products</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Include coatings and anodes that prevent corrosion,
                      extending the life of equipment. They are essential for
                      protecting metal components from the harsh conditions of
                      the petroleum industry. Corrosion protection products meet
                      ISO 12944 and NACE MR0175 standards, ensuring they provide
                      effective, long-lasting protection critical for
                      maintaining the structural integrity and performance of
                      petroleum infrastructure as per GCC norms.
                    </p>
                  </div>
                </li> */}
                {/* <li>
                  <div className="data">
                    <h3>Maintenance Tools</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Specialized tools designed for the installation, repair,
                      and upkeep of pipelines and machinery. These tools ensure
                      that maintenance tasks are carried out efficiently and
                      safely. Maintenance tools comply with ISO 9001 and ASME
                      B30 standards, ensuring they provide reliable,
                      high-quality solutions essential for maintaining the
                      operational efficiency and safety of petroleum facilities
                      as per GCC regulations.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      
                    </figure>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* ------------Petroleum Products Ends ------------------ */}
      {/* ------------Bottom Content Starts ------------------ */}
      {/* ------------Bottom Content Ends ------------------ */}
      {/* =============================test========================================= */}
      <>
        {/* Blog Style Two Start */}
        <div className="heading" style={{ marginTop: '30px' }}>
          <figure>
            <img src="assets/images/heading-icon.png" alt="heading-icon" />
          </figure>
          {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
          <h2>Why Choose Us?</h2>
          <hr />
        </div>

        <section className="gap blog-style-two" style={{ marginTop: '-8%' }}>
          <div className="heading">
            <figure>
              {/* <img src="assets/images/heading-icon.png" alt="heading-icon-22" /> */}
            </figure>
            {/* <span>Blog &amp; News</span>
            <h2>Recent Articles</h2> */}
          </div>
          <div className="container">
            <div className="blog-slider row owl-carousel">
              {/* ------blog item----- */}
              <div className="blog-item col-lg-12">
                <img src="" alt="" />

                <span className="blog-post-num"></span>
                <img
                  // style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  src="assets/images/activity-four/quality_assurance.png"
                  alt=""
                />
                {/* <span className="blog-date">January 9, 2022</span> */}
                <h2 style={{ textAlign: 'center' }}>
                  <a href="javascript:void(0)">Quality Assurance</a>
                </h2>
                <p style={{ textAlign: 'justify' }}>
                  We are committed to providing high-quality products. All the
                  Industrial Chemical products that are supplied by us undergo
                  rigorous quality checks to ensure they meet the highest
                  standards.
                </p>
                <a href="javascript:void(0)">
                  {/* <i className="fa-solid fa-arrow-up-long" /> */}
                </a>
              </div>
              <div className="blog-item col-lg-12">
                <img src="" alt="" />
                <span className="blog-post-num"></span>
                <img
                  src="assets/images/activity-four/comp_pricing.png"
                  alt=""
                />
                {/* <span className="blog-date">January 9, 2022</span> */}
                <h2 style={{ textAlign: 'center' }}>
                  <a href="javascript:void(0)">Competitive Pricing</a>
                </h2>
                <p style={{ textAlign: 'justify' }}>
                  We understand the importance of cost-effectiveness in your
                  business. That’s why we offer our products at competitive
                  prices, ensuring you get the best value for your money.
                </p>
                <a href="javascript:void(0)">
                  {/* <i className="fa-solid fa-arrow-up-long" /> */}
                </a>
              </div>
              <div className="blog-item col-lg-12">
                <img src="" alt="" />
                <span className="blog-post-num"></span>
                <img
                  src="assets/images/activity-four/timely _delivery.png"
                  alt=""
                />
                {/* <span className="blog-date">January 9, 2022</span> */}
                <h2 style={{ textAlign: 'center' }}>
                  <a href="javascript:void(0)">Timely Delivery</a>
                </h2>
                <p style={{ textAlign: 'justify' }}>
                  We have efficient logistics in place to ensure timely delivery
                  of your orders. We understand that in your business, time is
                  of the essence.
                </p>
                <a href="javascript:void(0)">
                  {/* <i className="fa-solid fa-arrow-up-long" /> */}
                </a>
              </div>
              <div className="blog-item col-lg-12">
                <img src="" alt="" />
                <span className="blog-post-num"></span>
                <img
                  src="assets/images/activity-four/customer_supp.png"
                  alt=""
                />
                {/* <span className="blog-date">January 9, 2022</span> */}
                <h2 style={{ textAlign: 'center' }}>
                  <a href="javascript:void(0)">Customer Support</a>
                </h2>
                <p style={{ textAlign: 'justify' }}>
                  Our dedicated customer support team is always ready to assist
                  you with any queries or issues. We strive to provide excellent
                  customer service and ensure your satisfaction.
                </p>
                <a href="javascript:void(0)">
                  {/* <i className="fa-solid fa-arrow-up-long" /> */}
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Style Two End */}
      </>
      {/* =============================test========================================= */}
    </>
  );
};

export default ActivityFour;
