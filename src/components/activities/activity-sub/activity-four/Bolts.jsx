import React, { useEffect } from 'react';

const Bolts = () => {
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

      {/* ---------Head ends-------- */}
      {/* ------------Chemical Products Starts ------------------ */}
      {/* ------------Chemical Products Ends ------------------ */}
      {/* ------------Petroleum Products Starts ------------------ */}
      <div className="heading" style={{ marginTop: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>LET'S HELP YOU WITH OUR PRODUCTS</span>
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
                        src="assets/images/activity-four/svg/High-Strength Bolts.svg"
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
                        src="assets/images/activity-four/svg/Stud Bolts.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
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
                        src="assets/images/activity-four/svg/Hex Nuts.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
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

export default Bolts;
