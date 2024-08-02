import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    useEffect(() => {
      setTimeout(() => {
        window.$('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          items: 1,
        });
      }, 300);
    }, []);
  return (
    <>
      <section className="gap project-style-one light-bg-color">
        <div className="heading">
          <figure>
            <img src="assets/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>TESTIMONIALS</span>
          <h2>Client’s Reviews</h2>
        </div>
        <div className="container">
          <div className="row project-slider owl-carousel">
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="/assets/images/testimonials/2.svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    alt="project-img-1"
                    width={'300px'}
                    height={'300px'}
                    style={{ objectFit: 'contain', backgroundColor: '#FFFFFF' }}
                  />
                </figure>

                <div className="project-data">
                  {/* <h3>
                      
                        <a href="">Mr Nazar KK</a>
                     
                    </h3> */}
                  {/* <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Chairman Zoom Group Of Companies,
                      <br />
                      &nbsp; &nbsp; Doha, State of Qatar
                    </h6> */}

                  <p
                    className="testimonialPara"
                    style={{
                      textAlign: 'justify',
                      fontSize: '14px',
                      marginTop: '-6%',
                    }}
                  >
                    It has been a privilege to work with OMDYS since 2014. Our
                    collaborations on projects across Doha and Qatar have been
                    incredibly successful. At Zoom Group of Companies, spanning
                    trading, fabrications, and construction, we are consistently
                    impressed with OMDYS's quality and punctuality. Their
                    commitment to excellence sets them apart. We proudly wish
                    OMDYS International LLP success in all their
                    future endeavors
                  </p>
                  {/* <br /> */}

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    src="/assets/images/testimonials/3.svg"
                    alt="project-img-1"
                    width={'300px'}
                    height={'300px'}
                    style={{ objectFit: 'contain', backgroundColor: '#FFFFFF' }}
                  />
                </figure>

                <div className="project-data">
                  {/* <h3>
                      
                        <a href="project-detail.html">Mr Muhammed Aneesh </a>
                     
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Managing Director Profixo Trading and Contracting,
                    </h6>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      &nbsp; &nbsp;Doha - State of Qatar
                    </h6> */}
                  <p
                    className="testimonialPara"
                    style={{
                      textAlign: 'justify',
                      fontSize: '14px',
                      marginTop: '-6%',
                    }}
                  >
                    I am pleased to commend OMDYS International LLP for their
                    exceptional service and seamless cooperation. They
                    consistently deliver high-quality products with remarkable
                    punctuality, consistently surpassing our expectations. Their
                    professionalism and reliability make them an invaluable
                    partner. We highly recommend OMDYS International LLP and
                    wish them continued success in all their future endeavors
                  </p>
                  {/* <br /> */}

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="/assets/images/testimonials/1.svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    alt="project-img-2"
                    width={'300px'}
                    height={'300px'}
                    style={{ objectFit: 'contain', backgroundColor: '#FFFFFF' }}
                  />
                </figure>

                <div className="project-data">
                  {/* <h3>
                      
                        <a href="javascript:void(0)">Mr Vipin P Varghese</a>
                     
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Managing Director Kattoorans Engineering and Services,
                    </h6>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      {' '}
                      &nbsp; &nbsp;BPCL - Vendor
                    </h6> */}
                  <p
                    className="testimonialPara"
                    style={{
                      textAlign: 'justify',
                      fontSize: '14px',
                      marginTop: '-6%',
                    }}
                  >
                    I am pleased to commend OMDYS International LLP for their
                    exceptional service in delivering critical oil and gas
                    equipment, including valves and flanges. Their commitment to
                    timely and efficient delivery has greatly supported our
                    operations and ensured smooth project progression. OMDYS
                    consistently provides high-quality products and
                    professionalism. We highly recommend them for their reliable
                    and effective service.
                  </p>
                  {/* <br /> */}

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="/assets/images/testimonials/4.svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    alt="project-img-1"
                    width={'300px'}
                    height={'300px'}
                    style={{ objectFit: 'contain', backgroundColor: '#FFFFFF' }}
                  />
                </figure>

                <div className="project-data">
                  <p
                    className="testimonialPara"
                    style={{
                      textAlign: 'justify',
                      fontSize: '14px',
                      marginTop: '-6%',
                    }}
                  >
                    I sincerely appreciate OMDYS International LLP for their
                    outstanding service in supplying quality PPE and industrial
                    tools for our projects. Their timely delivery and
                    high-quality products have been crucial to our success.
                    OMDYS consistently provides reliable, top-notch equipment,
                    greatly supporting our needs. We highly value our
                    partnership and recommend them for their excellent service
                    and dependability.
                  </p>
                  {/* <br /> */}

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                  {/* <br /> */}
                </div>
              </div>
            </div>

            {/* <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                   
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                 
                    alt="project-img-1"
                    width={'300px'}
                    height={'200px'}
                  />
                </figure>
                
                  <div className="project-data">
                    <h3>
                      
                        <a href="project-detail.html">Mr Syed Asad </a>
                     
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Director Infra Structure Solutions
                    </h6>
                    <p style={{ textAlign: 'justify' }}>
                      "Their diverse product range and efficient logistics
                      helped us complete our project on time and within budget."
                    </p>
                    
                      <a className="project-icon" href="">
                        <i className="fa-solid fa-angles-right" />
                      </a>
                   
                  </div>
               
              </div>
            </div> */}
            {/* <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="assets/svg4/Pulses & Grains.svg"
                    alt="project-img-2"
                  />
                </figure>
                <div className="project-data">
                  <h3>
                    <Link to={'/activity-six'}>
                      <a href="javascript:void(0)">Pulses and Grains</a>
                   
                  </h3>

                  <Link to={'/activity-six'}>
                    <a className="project-icon" href="#">
                      <i className="fa-solid fa-angles-right" />
                    </a>
                 
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="https://via.placeholder.com/640x395"
                    alt="project-img-1"
                  />
                </figure>
                <div className="project-data">
                  <h3>
                    <a href="project-detail.html">Life Science Center</a>
                  </h3>
                  <p>
                    This project was successfully completed against an extremely
                    tight programme.
                  </p>
                  <a className="project-icon" href="#">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="https://via.placeholder.com/640x395"
                    alt="project-img-2"
                  />
                </figure>
                <div className="project-data">
                  <h3>
                    <a href="javascript:void(0)">Home building renovation</a>
                  </h3>
                  <p>
                    This project was successfully completed against an extremely
                    tight programme.
                  </p>
                  <a className="project-icon" href="#">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
