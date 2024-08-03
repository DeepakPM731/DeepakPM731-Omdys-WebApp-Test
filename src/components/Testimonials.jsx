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
            {/* -----------nazar---------- */}
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
                    Since 2014, working with OMDYS has been a privilege. Our
                    successful collaborations on projects across Doha, Qatar,
                    have greatly benefited from their high-quality materials and
                    timely deliveries. At Zoom Group of Companies, where we
                    focus on fabrication and construction, we are consistently
                    impressed by OMDYS's exceptional service and commitment to
                    excellence. We wish OMDYS International LLP continued
                    success in the future.
                  </p>

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* ------nazar ends------- */}

            {/* ---------aneesh------ */}
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
                    I am pleased to praise OMDYS International LLP for their
                    excellent service in sourcing high-quality materials at
                    competitive prices from India and other global markets.
                    Their prompt delivery and efficient export services have
                    been crucial to our business success. OMDYS consistently
                    delivers top-notch products, ensuring we get the best return
                    on our investment. Their professionalism and dedication to
                    quality make them a trustworthy partner.
                  </p>

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* ---------aneesh ends------ */}

            {/* ---------shamsudheen------- */}
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    src="/assets/images/testimonials/5.svg"
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
                    OMDYS consistently provides timely supply and stock
                    availability of high-quality, no-smell flex printing inks.
                    Their technical expertise in repairing flex printing
                    machinery is outstanding, ensuring minimal downtime. The
                    inks' superior quality has enhanced our print outputs
                    significantly. We are impressed with their reliable service
                    and technical capabilities. Missing lines have disappeared,
                    showcasing their commitment to excellence.
                  </p>

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* ---------shamsudheen ends------- */}

            {/* ---------Devaraj ------- */}
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    src="/assets/images/testimonials/6.svg"
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
                    OMDYS is our go-to for timely and reliable supply of
                    premium, odorless flex printing inks. Their products always
                    meets our demands, and their expertise in repairing flex
                    printing machines ensures our operations run smoothly. The
                    high-quality inks have significantly improved our prints,
                    with no more missing lines. We appreciate their exceptional
                    service and technical proficiency.
                    <br />
                    <br />
                  </p>

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* ---------Devarajan  ends------- */}

            {/* --------Noushad------- */}
            {/* <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="/assets/images/testimonials/1.svg"
                    alt="project-img-2"
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
                    I am pleased to commend OMDYS International LLP for their
                    exceptional service in delivering critical oil and gas
                    equipment, including valves and flanges. Their commitment to
                    timely and efficient delivery has greatly supported our
                    operations and ensured smooth project progression. OMDYS
                    consistently provides high-quality products and
                    professionalism. We highly recommend them for their reliable
                    and effective service.
                  </p>

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div> */}
            {/* --------------------Noushad ends---------------- */}

            {/* --------------------vipin vargheese---------------- */}
            {/* <div className="col-lg-12">
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

                  <a className="project-icon" href="javascript:void(0)">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div> */}
            {/* ----------------------------vipin ends----------------------------- */}

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
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
