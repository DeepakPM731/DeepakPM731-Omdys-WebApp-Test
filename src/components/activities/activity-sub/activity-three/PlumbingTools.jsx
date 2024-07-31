import React, { useEffect } from 'react';

const PlumbingTools = () => {
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
                <h2 style={{ textAlign: 'center' }}>
                  Construction Tools & Safety Equipments
                </h2>
                <br />
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
      <div className="heading" style={{ marginTop: '', marginBottom: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h2>Plumbing Tools</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Plumbing+Tools__.svg"
          // src="assets/images/activity-four/svg/log/Plumbing Tools__.svg"
          alt="Our Project One Image 1"
        />
      </div>

      <div style={{ marginTop: '5%' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h3>Pipe Wrenches</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Heavy-Duty Pipe Wrenches:</b> Constructed with robust
                      materials to provide a strong grip on pipes. Ideal for
                      turning and tightening large pipes with precision. These
                      wrenches are designed for durability and ease of use, even
                      in demanding conditions.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Plumbing+Tools+-+Heavy-Duty+Pipe+Wrenches.svg"
                        // src="assets/images/activity-four/svg/construction/Plumbing Tools - Heavy-Duty Pipe Wrenches.svg"
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Plumbing+Tools+-+Standard+Plungers.svg"
                        // src="assets/images/activity-four/svg/construction/Plumbing Tools - Standard Plungers.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Plungers</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Standard Plungers:</b> Essential for clearing blockages
                      in drains and toilets. Featuring a high-quality rubber cup
                      and a sturdy handle, our plungers offer reliable
                      performance for effectively removing clogs and restoring
                      flow.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Pipe Cutters</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Ratchet Pipe Cutters:</b> Engineered for clean and
                      accurate cuts on various types of pipes, including PVC,
                      copper, and aluminum. The ratchet mechanism ensures
                      effortless cutting, making it easier to achieve precise
                      results with minimal effort.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Plumbing+Tools+-+Ratchet+Pipe+Cutters.svg"
                        // src="assets/images/activity-four/svg/construction/Plumbing Tools - Ratchet Pipe Cutters.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Plumbing+Tools+-+Manual+Pipe+Threaders.svg"
                        // src="assets/images/activity-four/svg/construction/Plumbing Tools - Manual Pipe Threaders.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Pipe Threaders</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Manual Pipe Threaders:</b> Designed for creating
                      precise threads on pipes for fittings. Our threaders are
                      built for efficiency, allowing you to quickly and
                      accurately thread pipes to ensure a secure connection.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Plumbing Snakes</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Drain Snakes:</b> Perfect for clearing stubborn
                      blockages in pipes and drains. Our drain snakes come in
                      various sizes and configurations to handle different types
                      of clogs, from minor obstructions to more challenging
                      blockages.
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Plumbing+Tools+-+Drain+Snakes.svg"
                        // src="assets/images/activity-four/svg/construction/Plumbing Tools - Drain Snakes.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Plumbing+Tools+-+Propane+Torches.svg"
                        // src="assets/images/activity-four/svg/construction/Plumbing Tools - Propane Torches.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Plumber's Torches</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Propane Torches:</b> Essential for soldering and
                      welding pipes. These torches provide a consistent flame
                      for joining pipes and fittings securely, ensuring a strong
                      and reliable connection.
                      <br />
                      <br />
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Basin Wrenches</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Adjustable Basin Wrenches:</b> Designed for reaching
                      and tightening faucet nuts in tight spaces. The adjustable
                      head allows for versatile use, making it easier to work in
                      confined areas with precision.
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Plumbing+Tools+-+Basin+Wrenches.svg"
                        // src="assets/images/activity-four/svg/construction/Plumbing Tools - Basin Wrenches.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="container">
          <p style={{ fontSize: '', textAlign: 'justify' }}>
            At OMDYS International LLP, our commitment is to provide
            high-quality plumbing tools that enhance your productivity and
            ensure precision in every job. Our tools are sourced from trusted
            brands known for their durability and performance in the industry.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default PlumbingTools;
