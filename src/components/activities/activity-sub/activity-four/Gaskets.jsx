import React, { useEffect } from 'react';

const Gaskets = () => {
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

export default Gaskets;
