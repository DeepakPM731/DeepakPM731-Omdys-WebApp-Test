import React, { useEffect } from 'react';

const PowerTools = () => {
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
        <h2>Power Tools</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Power+Tools__.svg"
          // src="assets/images/activity-four/svg/log/Power Tools__.svg"
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
                    <h3>Drills</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Cordless Drills:</b> These drills are highly portable
                      and versatile, ideal for a range of drilling applications.
                      Featuring powerful motors and long-lasting batteries, they
                      offer the freedom to work without being tethered to a
                      power source. Designed for ease of use, they provide
                      smooth operation and adjustable speed settings to handle
                      various materials with precision.
                      <br />
                      <br />
                      <b>Hammer Drills:</b> Engineered specifically for drilling
                      into tough materials like concrete, masonry, and brick.
                      Equipped with a hammering action that delivers rapid,
                      powerful blows to break through hard surfaces. These
                      drills combine high torque and durability, making them
                      essential for heavy-duty construction projects.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Power+Tools+-+Drills_.svg"
                        // src="assets/images/activity-four/svg/construction/Power Tools - Drills.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Power+Tools+-+Saws_.svg"
                        // src="assets/images/activity-four/svg/construction/Power Tools - Saws.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Saws</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Circular Saws:</b> Perfect for making precise straight
                      cuts in wood, metal, and other materials. Our circular
                      saws are built with robust motors and adjustable cutting
                      depths, ensuring clean, accurate cuts and the ability to
                      handle a variety of cutting tasks with ease.
                      <br />
                      <br />
                      <b>Jigsaws:</b> Ideal for intricate and curved cuts,
                      jigsaws offer exceptional maneuverability and control.
                      With variable speed settings and precision blades, they
                      are perfect for creating complex shapes and detailed work
                      in various materials.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Grinders</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Angle Grinders:</b> Versatile tools used for cutting,
                      grinding, and polishing metal and other materials.
                      Equipped with adjustable guards and powerful motors, they
                      provide excellent control and efficiency for tasks such as
                      removing welds, smoothing surfaces, and cutting through
                      metal.
                      <br />
                      <br />
                      <b>Bench Grinders:</b> Designed for sharpening tools,
                      metalworking, and surface finishing. Featuring large,
                      durable wheels and stable bases, they are ideal for tasks
                      requiring consistent and precise grinding, including
                      sharpening chisels and blades.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Power+Tools+-+Grinders_.svg"
                        // src="assets/images/activity-four/svg/construction/Power Tools - Grinders.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Power+Tools+-+Sanders_.svg"
                        // src="assets/images/activity-four/svg/construction/Power Tools - Sanders.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Sanders</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Belt Sanders:</b> Engineered for rapid material removal
                      and smoothing large surfaces. Equipped with a continuous
                      sanding belt and adjustable speed settings, they offer
                      efficient performance for tasks such as leveling wood and
                      removing old finishes.
                      <br />
                      <br />
                      <b>Orbital Sanders:</b> Perfect for achieving a smooth,
                      fine finish on surfaces. Featuring a circular sanding
                      motion and a dust collection system, they provide an even
                      finish while minimizing dust and debris, making them ideal
                      for final touches and detailed work.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Impact Drivers</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Cordless Impact Drivers:</b> Deliver high torque and
                      powerful impacts for driving screws and bolts with ease.
                      Designed to handle tough fastening tasks, they feature
                      variable speed settings and ergonomic grips, providing
                      both strength and control for efficient assembly and
                      construction work.
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Power+Tools+-+Impact+Drivers_.svg"
                        // src="assets/images/activity-four/svg/construction/Power Tools - Impact Drivers.svg"

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
            At OMDYS International LLP, our commitment is to provide our clients
            with top-of-the-line power tools that enhance efficiency and
            productivity on every job. Each tool in our selection is chosen for
            its reliability, performance, and durability, ensuring you have the
            right equipment to tackle even the most challenging construction
            tasks.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default PowerTools;
