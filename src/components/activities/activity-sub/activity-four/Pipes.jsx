import React, { useEffect } from 'react';

const Pipes = () => {
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
                  Oil & Gas Equipment Supply
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
    </>
  );
};

export default Pipes;
