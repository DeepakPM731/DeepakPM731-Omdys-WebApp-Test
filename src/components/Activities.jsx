import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('[data-aos]');
    for (let i = 0; i < elements.length; i++) {
      //if ios remove the attribute
      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        elements[i].removeAttribute('data-aos');
      }
    }
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Banner Style One Start */}
      <section className="banner-style-one">
        <div
          className="parallax"
          style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
        />
        <div className="container">
          <div className="row">
            <div className="banner-details">
              <h2>Our Core Business</h2>
              <p style={{ textAlign: '' }}>
                We specialize in trading comprehensive printing solutions,
                importing electronic components, industrial construction tools
                and equipment, and health care products. Our focus is on
                delivering quality products across these sectors to meet diverse
                customer needs efficiently.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        {/* <div className="breadcrums">
          <div className="container"> */}
        {/* <div className="row">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-house" />
                    <p>Home</p>
                  </a>
                </li>
                <li className="current">
                  <p>Our Main Activities</p>
                </li>
              </ul>
            </div> */}
        {/* </div>
        </div> */}
      </section>
      {/* Banner Style One End */}
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="heading">
            <figure>
              <img src="assets/images/heading-icon.png" alt="Heading Icon" />
            </figure>
            <span>Our Core </span>
            <h2>Business</h2>
          </div>
          <div className="container">
            <div className="row">
              <ul style={{ marginBottom: '-8%' }}>
                <li>
                  <div className="data">
                    <h3>Oil & Gas Equipment Supply</h3>
                    <p style={{ textAlign: 'justify' }}>
                      We offer expertise in exporting specialized petrochemical
                      mechanical products, ensuring safe and efficient project
                      execution.
                      <br />
                      <a href="/activity-four">( Read More )</a>
                    </p>
                  </div>
                  <div className="image" data-aos="zoom-in-up">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Oil+and+Gas_.svg"
                        // src="assets/images/activity-four/svg/common/Oil and Gas.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="zoom-in-up">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Electronics+Components_.svg"
                        // src="assets/images/activity-four/svg/common/Electronics Components.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Electronics Components </h3>
                    <p style={{ textAlign: 'justify' }}>
                      We partner with leading manufacturers to deliver reliable
                      and authentic electronic components for diverse
                      applications. {/* <Link to={'/activity-two'}> */}
                      <br />
                      <a href="/activity-two">( Read More )</a>
                      {/* </Link> */}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Health Care PPE Products</h3>
                    <p style={{ textAlign: 'justify' }}>
                      We import certified Health care products, meeting the
                      needs of healthcare facilities and professionals.{' '}
                      {/* <Link to={'/activity-five'}> */}
                      <br />
                      <a href="/activity-five">( Read More )</a>
                      {/* </Link> */}
                    </p>
                  </div>
                  <div className="image" data-aos="zoom-in-up">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/images/activity-four/svg/common/Health Care PPE.svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="zoom-in-up">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Industrial+Construction+Tools+%26+Equipment_.svg"
                        // src="assets/images/activity-four/svg/common/Industrial Construction Tools & Equipment.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Construction Tools & Safety Equipments</h3>
                    <p style={{ textAlign: 'justify' }}>
                      We provide a comprehensive range of certified safety
                      equipment for the construction industry, ensuring worker
                      protection and regulatory compliance.
                      {/* <Link to={'/activity-three'}> */}
                      <br />
                      <a href="/activity-three">( Read More )</a>
                      {/* </Link> */}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Printing Solutions</h3>
                    <p style={{ textAlign: 'justify' }}>
                      We provide a wide range of printing solutions, customized
                      to meet various printing needs.
                      {/* <Link to={'/activity-one'}> */}
                      <br />
                      <a href="/activity-one">( Read More )</a>
                      {/* </Link> */}
                    </p>
                  </div>
                  <div className="image" data-aos="zoom-in-up">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Printing+Solutions_.svg"
                        // src="assets/images/activity-four/svg/common/Printing Solutions.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>

                {/* <li>
                  <div className="image">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/svg4/Pulses & Grains.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Trading of pulses and grains – Exporting</h3>
                    <p>
                      We source and export premium pulses and grains, adhering
                      to the strictest quality standards and international
                      regulations.
                      <Link to={'/activity-six'}>( Read More )</Link>
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Activities;
