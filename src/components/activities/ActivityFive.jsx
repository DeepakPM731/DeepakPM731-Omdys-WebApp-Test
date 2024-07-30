import { useEffect } from 'react';

const ActivityFive = () => {
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
                  Health Care PPE Products
                </h2>
                {/* <p>our values and vaulted us to the top of our industry.</p> */}
              </div>
            </div>
          </div>
          {/* <div className="breadcrums"> */}
          {/* <div className="container">
              <div className="row">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa-solid fa-house" />
                      <p>Home</p>
                    </a>
                  </li>
                  <li className="current">
                    <p>About Us</p>
                  </li>
                </ul>
              </div>
            </div> */}
          {/* </div> */}
        </section>
      </div>
      <br />
      <div className="container" style={{}}>
        <img
          className="industry"
          style={{ width: '100%' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Cover+Photo_Health.svg"
          // src="assets/images/activity-four/svg/Cover Photo_Health.svg"
          alt="Our Project One Image 1"
        />
      </div>

      <br />
      <h3 style={{ textAlign: 'center', marginBottom: '5%' }}>
        Our Extensive Product Portfolio
      </h3>

      {/* ---------------test--------------- */}
      <div className="container mt-5 mb-2">
        <div style={{ marginTop: '20px' }}>
          <section className="gap no-top core-values">
            <div className="container" style={{ marginBottom: '-5%' }}>
              <div className="row">
                <ul>
                  <li style={{ marginTop: '-5%' }}>
                    <div className="data">
                      <h3>Face Masks</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        At OMDYS International LLP, we offer a variety of face
                        masks to ensure optimal protection and comfort. Our
                        selection includes surgical masks for basic protection
                        against droplets and splashes, N95 respirators that
                        filter at least 95% of airborne particles for healthcare
                        settings, and KN95 masks with similar filtration
                        efficiency. We also provide FFP2 and FFP3 masks, which
                        meet European standards for high filtration, and
                        reusable cloth masks for eco-friendly, everyday use. All
                        our masks adhere to stringent quality standards to
                        ensure safety and reliability.
                        <br />
                        <a href="/mask">( Know More )</a>
                      </p>
                    </div>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Face+Mask.svg"
                          // src="assets/images/activity-four/svg/log/Face Mask.svg"
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
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Protective+Apparel.svg"
                          // src="assets/images/activity-four/svg/log/Protective Apparel.svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3> Protective Apparel</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        At OMDYS International LLP, we provide a range of
                        protective apparel designed for safety and comfort. Our
                        offerings include disposable gowns for barrier
                        protection, coveralls for full-body coverage, aprons for
                        splash protection, and lab coats for everyday use in
                        medical settings. Each item is made from high-quality
                        materials to ensure durability and ease of use. Our
                        protective apparel meets rigorous quality standards,
                        providing reliable protection against contaminants and
                        maintaining hygiene in healthcare environments.
                        <br />
                        <a href="/protective">( Know More )</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="data">
                      <h3> Gloves</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        At OMDYS International LLP, we offer a variety of gloves
                        designed to meet diverse medical needs. Our range
                        includes latex gloves known for their flexibility and
                        comfort, nitrile gloves that provide excellent puncture
                        resistance and are ideal for those with latex allergies,
                        and vinyl gloves which are cost-effective and suitable
                        for short-term use. Each type is crafted from
                        high-quality materials to ensure safety and durability.
                        Our gloves meet stringent quality standards, providing
                        reliable protection and maintaining hygiene in
                        healthcare settings.
                        <br />
                        <a href="/gloves">( Know More )</a>
                      </p>
                    </div>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Hand+Gloves.svg"
                          // src="assets/images/activity-four/svg/log/Hand Gloves.svg"
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
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/png/goggles.png"
                          // src="assets/images/activity-four/goggles.png"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3>Eye Protection</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        At OMDYS International LLP, we offer high-quality eye
                        protection solutions designed for medical field use and
                        hospitals. Our range includes safety goggles that
                        provide a secure fit and protect against splashes and
                        airborne particles, and face shields that offer
                        full-face coverage for added protection. Both are made
                        from durable materials to ensure long-lasting use and
                        comfort. Adhering to stringent quality standards, our
                        eye protection products help maintain safety and hygiene
                        in healthcare environments.
                        <br />
                        <a href="/eye">( Know More )</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="data">
                      <h3>Sanitizers & Disinfectants</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        At OMDYS International LLP, we provide a comprehensive
                        range of sanitizers and disinfectants essential for
                        maintaining hygiene protocols in hospitals and medical
                        fields. Our products include hand sanitizers for quick
                        and effective hand hygiene, disinfectant wipes for
                        convenient surface cleaning, and surface disinfectants
                        that ensure thorough sanitation of various surfaces.
                        Formulated to meet stringent quality standards, our
                        sanitizers and disinfectants help prevent the spread of
                        infections and maintain a safe, clean environment in
                        healthcare setting.
                        <br />
                        <a href="/sanitizer">( Know More )</a>
                      </p>
                    </div>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/cleaning.svg"
                          // src="assets/images/activity-four/svg/log/cleaning.svg"
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
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Sanitizers+and+Disinfectants.svg"
                          // src="assets/images/activity-four/svg/log/Sanitizers and Disinfectants.svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3>Cleaning Solutions</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        At OMDYS International LLP, we offer a range of cleaning
                        solutions essential for maintaining hygiene protocols in
                        hospitals and medical facilities. Our products include
                        toilet cleaners for effective removal of stains and
                        germs, floor cleaners that ensure thorough sanitation
                        and safety, glass cleaners for streak-free visibility on
                        windows and surfaces, and surface cleaners for general
                        cleaning and disinfection. Each solution is formulated
                        to meet rigorous quality standards, ensuring efficient
                        cleaning and effective hygiene maintenance in
                        healthcare environments.
                        <br />
                        <a href="/cleaning">( Know More )</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* ---------------test--------------- */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h2>Why Choose Us?</h2>
        <hr />
      </div>
      {/* ---------------------------------------------------- */}
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
                Remember, the type of PPE needed can vary depending on the
                specific job and work environment. Always ensure that the PPE is
                appropriate for the task at hand, fits properly, and meets
                industry safety standards. Trust Omdys International Group for
                all your medical protection and safety equipment needs.
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
                of your orders. We understand that in the medical field, time is
                of the essence.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>

            <div className="blog-item col-lg-12">
              <img src="" alt="" />
              <span className="blog-post-num"></span>
              <img src="assets/images/activity-four/customer_supp.png" alt="" />
              {/* <span className="blog-date">January 9, 2022</span> */}
              <h2 style={{ textAlign: 'center' }}>
                <a href="javascript:void(0)">Customer Support</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                Our dedicated customer support team is always ready to assist
                you with any queries or issues. We strive to provide excellent
                customer service and ensure your satisfaction
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>
            <div className="blog-item col-lg-12">
              <img src="" alt="" />
              <span className="blog-post-num"></span>
              <img src="assets/images/activity-four/training_.png" alt="" />
              {/* <span className="blog-date">January 9, 2022</span> */}
              <h2 style={{ textAlign: 'center' }}>
                <a href="javascript:void(0)">Training</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                We provide training on the use of our Health care products. We
                also offer consultation services to help you choose the right
                PPE for your specific needs. With our diverse product range,
                quality assurance, and dedicated support, you’ll be
                well-equipped to make a significant impact.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------- */}
    </>
  );
};

export default ActivityFive;
