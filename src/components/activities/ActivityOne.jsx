import { useEffect } from 'react';

const ActivityOne = () => {
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
              <div className="banner-details" style={{ textAlign: 'center' }}>
                <h2>Comprehensive Printing Solutions</h2>
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
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Printing+Solutions.svg"
          alt="Our Project One Image 1"
        />
      </div>

      {/* Banner ends */}
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <br />
            <p
              className=""
              // className="text-center"
              // style={{ fontSize: '20px', textAlign: 'justify' }}
              style={{
                fontSize: '18px',
                textAlign: 'justify',
                margin: '0 auto' /* to center align */,
                // maxWidth: '600px' /* optional: adjust as needed */,
                padding: 0,
                whiteSpace: 'normal',
                wordBreak: 'break-all',
                lineHeight: '1.5',
                wordSpacing: '0.5px',
                hyphens: 'auto',
              }}
            >
              We provide a wide range of printing solutions, customized to meet
              various printing needs. Our offerings include a supply of
              high-quality inks, state-of-the-art printing equipment, and
              exceptional customer service. In addition to our core services, we
              also offer consultation services to help our clients choose the
              right printing solutions for their needs. Our team of experts is
              always ready to provide advice and recommendations based on the
              specific requirements of each project.
            </p>
          </div>
        </section>
      </div>
      {/* ============================================================================= */}
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li>
                  <div className="container">
                    <h3 style={{ fontSize: '34px', marginBottom: '-3%' }}>
                      {' '}
                      Ink Supply
                    </h3>
                    <br />
                    <p
                      style={{
                        textAlign: 'justify',
                        fontSize: '18px',
                        padding: '2px',
                        marginBottom: '-6%',
                      }}
                    >
                      We provide high-quality eco-solvent inks that are perfect
                      for a wide range of printing tasks. Our inks ensure
                      vibrant colors and excellent adhesion on various media
                      types.
                    </p>
                    <br />
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/petroleum and petrochemical products (2).svg"

                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/ink.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>

                  <div className="data">
                    <h3>• Eco-Solvent Inks</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We offer a range of eco-solvent inks that are perfect for
                      a wide variety of printing tasks. These inks are
                      environmentally friendly and ensure vibrant colors and
                      excellent adhesion on various media types.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>• UV Inks</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Our UV inks are designed for applications that require
                      high print quality and durability. These inks are cured by
                      UV light, making them resistant to fading and weathering.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/images/uv-inkanna.png"
                        // src="assets/svg4/petroleum and petrochemical products (2).svg"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/uv_inkann.png"
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
                        // src="assets/svg4/HEALTH CARE PRODUCTS 1.svg"
                        src="assets/images/solvent_inks_annna.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/eco_solvent_inkann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> • Solvent-Based Inks</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We supply high-quality solvent-based inks that are ideal
                      for outdoor applications. These inks are durable and
                      resistant to various environmental conditions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* ----------------------------------- */}

      {/* ----------------------------------- */}
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ marginBottom: '-5%' }}>
            <div className="row">
              <ul>
                <li style={{ marginTop: '-5%' }}>
                  <div className="data">
                    <h3>Printing Equipment</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We offer a selection of top-notch eco-solvent, UV, and
                      solvent-based printers. These machines are designed for
                      efficiency and reliability, enabling you to deliver
                      high-quality prints to your customers.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/petroleum and petrochemical products (2).svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/printing_equipann.png"
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
                        // src="assets/svg4/HEALTH CARE PRODUCTS 1.svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/media_suppliesannn.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Media Supplies</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Our range of media supplies includes everything from
                      vinyl, and canvas, to banner materials. These are
                      specially designed to work with eco-solvent inks, ensuring
                      high-quality prints every time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* -------Bottom starts */}
      {/* Blog Style Two Start */}
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
                <a href="javascript:void(0)">Product Quality</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                We are committed to providing high-quality products. Our inks
                are sourced from reputable manufacturers and undergo rigorous
                quality checks to ensure they meet the highest standards
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
                <a href="javascript:void(0)">Technical Support</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                Our dedicated team of experts is always ready to assist you with
                any technical issues. We aim to ensure your printing operations
                run smoothly.
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
                We provide comprehensive training on the use of our eco-solvent,
                UV, and solvent-based printers and supplies. This will equip you
                with the necessary skills to deliver outstanding printing
                services.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>
            <div className="blog-item col-lg-12">
              <img src="" alt="" />
              <span className="blog-post-num"></span>
              <img
                src="assets/images/activity-four/sustainability_.png"
                alt=""
              />
              {/* <span className="blog-date">January 9, 2022</span> */}
              <h2 style={{ textAlign: 'center' }}>
                <a href="javascript:void(0)">Sustainability</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                We believe in doing business responsibly. Our inks are
                environmentally friendly, aligning with our commitment to
                sustainability. With our diverse product range and dedicated
                support, you’ll be well-equipped to make a significant impact.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>
            <div className="blog-item col-lg-12">
              <img src="" alt="" />
              <span className="blog-post-num"></span>
              <img src="assets/images/activity-four/promise_.png" alt="" />
              {/* <span className="blog-date">January 9, 2022</span> */}
              <h2 style={{ textAlign: 'center' }}>
                <a href="javascript:void(0)">Our Promise</a>
              </h2>
              <p style={{ textAlign: 'justify' }}>
                By using our products, you are guaranteed 100% technical
                support, both online and offline, led by a team of over 17+
                experienced engineers.
              </p>
              <a href="javascript:void(0)">
                {/* <i className="fa-solid fa-arrow-up-long" /> */}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Two End */}
      {/* -------Bottom ends */}

      {/* ============================================================================= */}
    </>
  );
};

export default ActivityOne;
