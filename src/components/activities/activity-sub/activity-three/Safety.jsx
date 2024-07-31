import React, { useEffect } from 'react';

const Safety = () => {
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
                  Construction Tools & Safety Equipmentsuipments
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
        <h2>Safety Equipment</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+equipment's__.svg"
          // src="assets/images/activity-four/svg/log/Saftey equipment's__.svg"
          alt="Our Project One Image 1"
        />
      </div>

      {/* ------ */}
      {/* ---------Head protection-------- */}
      <hr />
      <h3 style={{ textAlign: 'center', fontSize: '34px' }}>Head Protection</h3>
      {/* <br />
      <br /> */}
      <div style={{ marginTop: '5%' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Head Protection
                    </h3> */}
                    <h4 style={{}}>Hard Hats</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Type I Hard Hats:</b> Engineered to provide protection
                      against impacts from above, these hard hats are essential
                      for guarding against falling objects and other overhead
                      hazards. They feature robust outer shells and
                      impact-absorbing liners to mitigate injury.
                      <br />
                      <b>Type II Hard Hats:</b> Offering enhanced protection
                      from both top and lateral impacts, Type II hard hats are
                      ideal for environments where workers are at risk of side
                      or angular impacts. Their design ensures comprehensive
                      head protection in challenging conditions.
                      <br />
                      <b>Vented Hard Hats:</b> Equipped with ventilation
                      openings, these hard hats promote airflow to keep workers
                      cool and comfortable in hot working conditions, without
                      compromising safety.
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Hard+Hats.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Hard Hats.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ---------Eye protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Eye and Face Protection
        </h3>
        <br />
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Eye+Protection+Glasses.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Eye Protection Glasses.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>Safety Glasses</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Clear Safety Glasses:</b> Designed for general
                      protection against flying debris, dust, and minor impacts,
                      clear safety glasses are suitable for indoor and low-light
                      environments where visibility is paramount.
                      <br />
                      <b>Tinted Safety Glasses:</b> Featuring UV-protective
                      lenses, tinted safety glasses are ideal for outdoor work,
                      shielding the eyes from harmful ultraviolet rays while
                      reducing glare and improving visibility.
                      <br />
                      <b>Anti-Fog Safety Glasses:</b> These glasses are equipped
                      with anti-fog coatings to prevent fogging in humid or cold
                      environments, ensuring clear vision and continuous
                      protection.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </li>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Face Shields</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Full Face Shields:</b> Providing comprehensive
                      protection for the entire face, full face shields are
                      essential for guarding against flying particles, chemical
                      splashes, and intense heat. They offer a clear view while
                      shielding the face from hazardous substances.
                      <br />
                      <b>Adjustable Face Shields:</b> Designed for customizable
                      comfort, adjustable face shields allow users to modify the
                      fit for enhanced security and reduced fatigue during
                      extended use.
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Face+Shields.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Face Shields.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------Hearing protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Hearing Protection
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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Ear+Plugs.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Ear Plugs.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>Ear Plugs</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Disposable Ear Plugs:</b> Made from soft foam, these
                      single-use ear plugs offer effective noise reduction and
                      comfort for short-term use, helping to protect hearing in
                      noisy environments.
                      <br />
                      <b>Reusable Ear Plugs:</b> Crafted from durable materials,
                      reusable ear plugs can be cleaned and used multiple times.
                      They provide long-term noise reduction and comfort for
                      extended periods.
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
                    <h4> Ear Muffs</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Over-the-Head Ear Muffs:</b> Designed for high noise
                      reduction in extremely loud environments, these ear muffs
                      feature padded ear cups and an adjustable headband for a
                      secure and comfortable fit.
                      <br />
                      <b>Cap-Mounted Ear Muffs:</b> Conveniently attach to hard
                      hats, cap-mounted ear muffs offer integrated hearing
                      protection without additional headgear, ideal for
                      maintaining a streamlined work setup.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Ear+Muffs.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Ear Muffs.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ---------Respiratory protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px', marginTop: '-5%' }}>
          Respiratory Protection
        </h3>
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '' }}>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Dust+Masks.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Dust Masks.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>Dust Masks</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>N95 Masks:</b> These masks filter out at least 95% of
                      airborne particles, providing effective protection against
                      dust, pollen, and other particulate matter, crucial for
                      maintaining respiratory health in dusty environments.
                      <br />
                      <b>P100 Masks:</b> Offering a higher level of filtration,
                      P100 masks are designed for more hazardous environments,
                      filtering out 99.97% of airborne particles and providing
                      superior protection.
                    </p>
                    <br />
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Respirators</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Half-Face Respirators:</b> Covering the nose and mouth,
                      half-face respirators protect against dust, fumes, and
                      vapors. They are equipped with replaceable filters and
                      cartridges for versatile protection.
                      <br />
                      <b>Full-Face Respirators:</b> Providing complete coverage
                      for the face, including the eyes, full-face respirators
                      offer enhanced protection against harmful substances and a
                      broader field of vision, suitable for high-risk
                      environments.
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Respirators.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Respirators.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------Hand protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px', marginTop: '-5%' }}>
          Hand Protection
        </h3>
        <br />
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Work+Gloves.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Work Gloves.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Head Protection
                    </h3> */}
                    <h4> Work Gloves</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Leather Gloves:</b> Durable and versatile, leather
                      gloves offer protection for general construction work,
                      providing a tough barrier against abrasion and cuts while
                      maintaining dexterity.
                      <br />
                      <b>Cut-Resistant Gloves:</b> Designed to protect against
                      sharp objects and materials, cut-resistant gloves are made
                      from advanced fibers that offer high levels of cut
                      protection without compromising flexibility.
                      <br />
                      <b>Chemical-Resistant Gloves:</b> These gloves are
                      constructed from materials that resist penetration by
                      hazardous chemicals and solvents, ensuring safe handling
                      of potentially dangerous substances.
                      <br />
                      <br />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ---------Body protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Body Protection
        </h3>
        <br />
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h4>Knee Pads</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Gel Knee Pads:</b> Designed for extended kneeling
                      tasks, gel knee pads provide cushioning and comfort to
                      reduce strain on the knees and improve productivity.
                      <br />
                      <b>Hard Cap Knee Pads:</b> Offering robust protection on
                      hard surfaces, hard cap knee pads are ideal for heavy-duty
                      use, with durable outer shells that resist impacts and
                      abrasion.
                    </p>
                    <br />
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Knee+Pads.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Knee Pads.svg"

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
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Lumbar+Support+Belts.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Lumbar Support Belts.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Back Supports</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Lumbar Support Belts:</b> Providing support to the
                      lower back, lumbar support belts help reduce the risk of
                      back injuries during lifting and carrying tasks, offering
                      stability and comfort.
                      <br />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ---------Foot protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Foot Protection
        </h3>
        <br />
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Head Protection
                    </h3> */}
                    <h4>Safety Boots</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Steel-Toe Boots:</b> Equipped with reinforced steel
                      toes, these boots provide protection against heavy falling
                      objects and impact injuries, ensuring safety in
                      construction and industrial environments.
                      <br />
                      <b>Composite-Toe Boots:</b> A lighter alternative to
                      steel-toe boots, composite-toe boots offer similar
                      protection with added comfort, made from non-metallic
                      materials that do not conduct heat or electricity.
                      <br />
                      <b>Slip-Resistant Boots:</b> Featuring specialized soles
                      for enhanced traction, slip-resistant boots prevent slips
                      and falls on wet or uneven surfaces, ensuring stability
                      and safety on various terrains.
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Safety+Boots.svg"
                        // src="assets/images/activity-four/svg/safety/Safety Boots.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ---------Fall protection-------- */}

        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Fall Protection
        </h3>
        <br />
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Harnesses.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Harnesses.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>Harnesses</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Full-Body Harnesses:</b> Designed to distribute fall
                      forces across the body, full-body harnesses offer
                      comprehensive protection and comfort for workers at
                      height, with adjustable straps to ensure a secure fit.
                      <br />
                      <b>Positioning Harnesses:</b> Allowing workers to remain
                      in a specific position safely, positioning harnesses are
                      used in combination with other fall protection equipment
                      to secure workers in elevated positions.
                    </p>
                    <br />
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Lanyards and Lifelines</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Shock-Absorbing Lanyards:</b> Equipped with
                      energy-absorbing components, these lanyards reduce the
                      forces experienced during a fall, minimizing the risk of
                      injury.
                      <br />
                      <br />
                      <b>Self-Retracting Lifelines:</b> Providing mobility and
                      fall protection, self-retracting lifelines automatically
                      adjust to the worker's movements and lock in the event of
                      a fall, offering continuous safety.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Lanyards+and+Lifelines.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Lanyards and Lifelines.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ---------additional protection-------- */}
        <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
          Additional Protection
        </h3>
        <br />
        <br />
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+High-Visibility+Clothing.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - High-Visibility Clothing.svg"

                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h4>High-Visibility Clothing</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Reflective Vests:</b> Enhancing visibility in low-light
                      and nighttime conditions, reflective vests feature bright
                      colors and reflective strips to ensure workers are seen by
                      others, reducing the risk of accidents.
                      <br />
                      <b>High-Visibility Jackets:</b> Combining visibility with
                      warmth, these jackets are ideal for outdoor work in cold
                      or rainy conditions, providing both protection from the
                      elements and enhanced visibility.
                    </p>
                    <br />
                  </div>
                </li>
                <li style={{ marginTop: '' }}>
                  <div className="data">
                    {/* <h3 style={{ textAlign: 'center', fontSize: '34px' }}>
                      Eye and Face Protection
                    </h3> */}
                    <h4>Coveralls</h4>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      <b>Disposable Coveralls:</b> Offering protection against
                      dirt, grime, and minor chemical splashes, disposable
                      coveralls are ideal for short-term use in messy or
                      hazardous environments.
                      <br />
                      <br />
                      <b>Flame-Resistant Coveralls:</b> Designed to withstand
                      high temperatures and provide protection in environments
                      with fire hazards, flame-resistant coveralls are made from
                      materials that resist ignition and burning.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Saftey+-+Coveralls.svg"
                        // src="assets/images/activity-four/svg/safety/Saftey - Coveralls.svg"

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
            Proper use of PPE is crucial in minimizing the risk of injuries and
            ensuring a safe working environment. Employers must provide
            appropriate PPE and ensure that workers are trained in its correct
            use and maintenance to comply with safety regulations and protect
            their health. At OMDYS International LLP, we are dedicated to
            supplying high-quality PPE to safeguard construction workers and
            ensure compliance with industry standards. Our extensive range of
            PPE offers comprehensive protection, ensuring that you have the
            right equipment to keep your workforce safe from head to toe.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default Safety;
