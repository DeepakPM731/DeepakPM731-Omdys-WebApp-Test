import React, { useEffect } from 'react';

const Hoses = () => {
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
                <br />
                
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      

      {/* ---------Head ends-------- */}
   
      <div className="heading" style={{ marginTop: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>LET'S HELP YOU WITH OUR PRODUCTS</span>
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

export default Hoses;
