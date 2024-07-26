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
                  Trading Of Health Care Products
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
          // src="assets/svg4/petroleum and petrochemical products (2).svg"
          src="assets/images/activity-four/svg/Cover Photo_Health.svg"
          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+22.svg"
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
                        Surgical masks, N95 respirators, KN95 masks, and more.
                      </p>
                    </div>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          src="assets/images/activity-four/svg/log/Face Mask.svg"
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
                          src="assets/images/activity-four/svg/log/Protective Apparel.svg"
                          // src="assets/images/activity-four/gowns.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3> Protective Apparel</h3>
                      <p style={{ fontSize: '18px' }}>
                        Disposable gowns, coveralls, aprons, and lab coats.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="data">
                      <h3> Gloves</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        Latex, nitrile, and vinyl gloves for medical and
                        non-medical use.
                      </p>
                    </div>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          src="assets/images/activity-four/svg/log/Hand Gloves.svg"
                          // src="assets/images/activity-four/gloves.png"
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
                          src="assets/images/activity-four/goggles.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3>Eye Protection</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        Safety goggles and face shields to protect against
                        splashes and airborne particles.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="data">
                      <h3>Sanitizers and Disinfectants</h3>
                      <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                        Hand sanitizers, disinfectant wipes, and surface
                        disinfectants for maintaining hygiene protocols.
                      </p>
                    </div>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          src="assets/images/activity-four/svg/log/Sanitizers and Disinfectants.svg"
                          // src="assets/images/activity-four/sanitizer.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/training_ann.png"
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
      </div>
      {/* ---------------test--------------- */}
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>Let us help with our products</span> */}
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
