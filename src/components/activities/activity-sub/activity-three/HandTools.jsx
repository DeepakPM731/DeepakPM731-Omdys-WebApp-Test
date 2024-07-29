import React, { useEffect } from 'react';

const HandTools = () => {
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
        <h2>Hand Tools</h2>
      </div>

      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Hand Tools__.svg"
          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
          alt="Our Project One Image 1"
        />
      </div>
      {/* <section className="gap about-key-benefits" style={{ marginTop: '-4%' }}>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-12">
              <div className="data" style={{ marginTop: '' }}>
                
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  At OMDYS International LLP, we offer a comprehensive selection
                  of high-quality hand tools designed to meet the diverse needs
                  of professionals in the construction industry. Our hand tools
                  are engineered for precision, control, and durability,
                  ensuring that you have the right tools to tackle a wide range
                  of tasks with confidence and efficiency.
                  <br />
                  <br />
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      color: 'black',
                    }}
                  >
                    Hammers
                  </h4>
                  <br />
                  <b>Claw Hammers:</b> Essential for driving and removing nails,
                  claw hammers feature a sturdy, curved claw for pulling nails
                  and a heavy striking face for efficient driving. Our claw
                  hammers are ergonomically designed with comfortable grips and
                  balanced weight to reduce fatigue during prolonged use.
                  <br />
                  <br />
                  <b>Sledgehammers:</b> Built for heavy-duty demolition work,
                  sledgehammers provide the power needed to break through
                  concrete, stone, and other tough materials. With a large,
                  heavy head and a durable handle, these hammers are designed
                  for maximum impact and control in demanding tasks.
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      color: 'black',
                    }}
                  >
                    Screwdrivers
                  </h4>
                  <br />
                  <b>Flathead Screwdrivers:</b> Ideal for working with slotted
                  screws, flathead screwdrivers come in various sizes to match
                  different screw head types. Our screwdrivers feature
                  precision-machined tips for a snug fit and ergonomic handles
                  for a secure grip and reduced hand strain.
                  <br />
                  <br />
                  <b>Phillips Screwdrivers:</b> Designed for crosshead screws,
                  Phillips screwdrivers offer superior grip and torque. The
                  cross-shaped tip ensures better contact with screw heads,
                  reducing cam-out and providing more effective turning force.
                  Our Phillips screwdrivers are available in multiple sizes to
                  accommodate various screw sizes and applications.
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      color: 'black',
                    }}
                  >
                    Wrenches
                  </h4>
                  <br />
                  <b>Adjustable Wrenches:</b> Versatile tools that can be
                  adjusted to fit a wide range of bolt sizes. Featuring a
                  movable jaw that allows for flexible gripping, adjustable
                  wrenches are perfect for tasks requiring a custom fit. Our
                  wrenches are built with durable materials and precise
                  adjustment mechanisms for reliable performance.
                  <br />
                  <br />
                  <b>Pipe Wrenches:</b> Designed specifically for gripping and
                  turning pipes, these wrenches feature serrated jaws that
                  provide a secure hold on round surfaces. With their heavy-duty
                  construction and adjustable sizing, pipe wrenches are
                  essential for plumbing and pipefitting tasks.
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      color: 'black',
                    }}
                  >
                    Pliers
                  </h4>
                  <br />
                  <b>Needle-Nose Pliers:</b> Ideal for bending, cutting, and
                  manipulating wire in tight spaces. With long, slender jaws,
                  needle-nose pliers offer precision and control for delicate
                  tasks such as electrical work and small assembly projects. Our
                  pliers are equipped with comfortable grips and robust jaws for
                  durability.
                  <br />
                  <br />
                  <b>Channel Lock Pliers:</b> Adjustable pliers designed to grip
                  various sizes of fasteners. Featuring a unique channel-lock
                  design, these pliers allow for a wide range of adjustments and
                  provide a secure grip on multiple sizes of objects. They are
                  perfect for tasks that require flexibility and strength.
                  <br />
                  <br />
                  <h4
                    style={{
                      fontSize: '40px',
                      color: 'black',
                    }}
                  >
                    Measuring Tools
                  </h4>
                  <br />
                  <b>Tape Measures:</b> Essential for accurate measurements,
                  tape measures feature a retractable steel blade with clear
                  markings and a sturdy case for durability. Available in
                  various lengths and widths, our tape measures are designed for
                  ease of use and precise measurements on the job site.
                  <br />
                  <br />
                  <b>Levels:</b> Used to ensure surfaces are perfectly
                  horizontal or vertical, levels are critical for achieving
                  accurate alignments. Our levels come with bubble vials and
                  durable construction, providing reliable readings and helping
                  you achieve precision in your work.
                  <br />
                  <br />
                  At OMDYS International LLP, our commitment is to provide
                  high-quality hand tools that enhance productivity and
                  precision. We source our tools from trusted brands known for
                  their reliability and performance, ensuring that you have
                  access to the best equipment for your construction projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* -------------------------------------- */}
      <div style={{ marginTop: '5%' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h3>Hammers</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Claw Hammers:</b> Essential for driving and removing
                      nails, claw hammers feature a sturdy, curved claw for
                      pulling nails and a heavy striking face for efficient
                      driving. Our claw hammers are ergonomically designed with
                      comfortable grips and balanced weight to reduce fatigue
                      during prolonged use.
                      <br />
                      <br />
                      <b>Sledgehammers:</b> Built for heavy-duty demolition
                      work, sledgehammers provide the power needed to break
                      through concrete, stone, and other tough materials. With a
                      large, heavy head and a durable handle, these hammers are
                      designed for maximum impact and control in demanding
                      tasks.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/construction/Hand Tools - Hammers.svg"
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
                        src="assets/images/activity-four/svg/construction/Hand Tools - Screwdrivers.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Screwdrivers</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Flathead Screwdrivers:</b> Ideal for working with
                      slotted screws, flathead screwdrivers come in various
                      sizes to match different screw head types. Our
                      screwdrivers feature precision-machined tips for a snug
                      fit and ergonomic handles for a secure grip and reduced
                      hand strain.
                      <br />
                      <br />
                      <b>Phillips Screwdrivers:</b> Designed for crosshead
                      screws, Phillips screwdrivers offer superior grip and
                      torque. The cross-shaped tip ensures better contact with
                      screw heads, reducing cam-out and providing more effective
                      turning force. Our Phillips screwdrivers are available in
                      multiple sizes to accommodate various screw sizes and
                      applications.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Wrenches</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Adjustable Wrenches:</b> Versatile tools that can be
                      adjusted to fit a wide range of bolt sizes. Featuring a
                      movable jaw that allows for flexible gripping, adjustable
                      wrenches are perfect for tasks requiring a custom fit. Our
                      wrenches are built with durable materials and precise
                      adjustment mechanisms for reliable performance.
                      <br />
                      <br />
                      <b>Pipe Wrenches:</b> Designed specifically for gripping
                      and turning pipes, these wrenches feature serrated jaws
                      that provide a secure hold on round surfaces. With their
                      heavy-duty construction and adjustable sizing, pipe
                      wrenches are essential for plumbing and pipefitting tasks.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/construction/Hand Tools - Wrenches.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
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
                        src="assets/images/activity-four/svg/construction/Hand Tools - Pliers.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Pliers</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Needle-Nose Pliers:</b> Ideal for bending, cutting, and
                      manipulating wire in tight spaces. With long, slender
                      jaws, needle-nose pliers offer precision and control for
                      delicate tasks such as electrical work and small assembly
                      projects. Our pliers are equipped with comfortable grips
                      and robust jaws for durability.
                      <br />
                      <br />
                      <b>Channel Lock Pliers:</b> Adjustable pliers designed to
                      grip various sizes of fasteners. Featuring a unique
                      channel-lock design, these pliers allow for a wide range
                      of adjustments and provide a secure grip on multiple sizes
                      of objects. They are perfect for tasks that require
                      flexibility and strength.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Measuring Tools</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Tape&nbsp;Measures:</b> Essential for accurate
                      measurements, tape measures feature a retractable steel
                      blade with clear markings and a sturdy case for
                      durability. Available in various lengths and widths, our
                      tape measures are designed for ease of use and precise
                      measurements on the job site.
                      <br />
                      <br />
                      <b>Levels:</b> Used to ensure surfaces are perfectly
                      horizontal or vertical, levels are critical for achieving
                      accurate alignments. Our levels come with bubble vials and
                      durable construction, providing reliable readings and
                      helping you achieve precision in your work.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/activity-four/svg/construction/Hand Tools - Measuring Tools.svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
            <br />
            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
              At OMDYS International LLP, our commitment is to provide
              high-quality hand tools that enhance productivity and precision.
              We source our tools from trusted brands known for their
              reliability and performance, ensuring that you have access to the
              best equipment for your construction projects.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HandTools;
