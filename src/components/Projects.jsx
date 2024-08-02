import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Projects = () => {
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
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      document.querySelector('.slider-controls').style.display = 'none';
    }
  }, []);
  const slideButtons = document.querySelectorAll('.slidebtn');

  slideButtons.forEach((button) => {
    button.addEventListener('touchstart', function () {
      this.style.backgroundColor = '#ffee02';
      this.style.color = 'black';
    });

    button.addEventListener('touchend', function () {
      setTimeout(() => {
        this.style.backgroundColor = ''; // Revert to original color
        this.style.color = ''; // Revert to original color
      }, 200); // Adjust timeout as needed
    });
  });
  return (
    <>
      <section className="gap project-style-one light-bg-color">
        <div className="heading">
          <figure>
            <img src="assets/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Trade Operations</span>
          <h2>Our Main Activities</h2>
        </div>
        <div className="container">
          <div className="row project-slider owl-carousel">
            <Link to={'/activity-one'}>
              <div className="col-lg-12">
                <div className="project-post">
                  <figure>
                    <img
                      // src="https://winsfolio.net/html/builty/assets/images/project-img-2.jpg"
                      // src="assets/svg4/Printing Solutions.svg"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/Printing+Solutions.svg"
                      alt="project-img-1"
                    />
                  </figure>
                  <Link to={'/activity-one'}>
                    <div className="project-data">
                      <h3>
                        <Link to={'/activity-one'}>
                          <a href="">Printing Solutions</a>
                        </Link>
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            <Link to={'/activity-two'}>
              <div className="col-lg-12">
                <div className="project-post">
                  <figure>
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Cover_Electronics.svg"
                      // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
                      // src="assets/svg4/Electronic Components 1.svg"
                      alt="project-img-1"
                    />
                  </figure>
                  <Link to={'/activity-two'}>
                    <div className="project-data">
                      <h3>
                        {/* <Link to={'/activity-two'}> */}
                        <a href="/activity-two">Electronics Components</a>
                        {/* </Link> */}
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            <Link to={'/activity-three'}>
              <div className="col-lg-12">
                <div className="project-post">
                  <figure>
                    <img
                      // src="https://winsfolio.net/html/builty/assets/images/project-img-1.jpg"
                      // src="assets/svg4/industrial construction tools and equipment (3).svg"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/industrial+construction+tools+and+equipment+(3).svg"
                      alt="project-img-2"
                    />
                  </figure>
                  <Link to={'/activity-three'}>
                    <div className="project-data">
                      <h3>
                        {/* <Link to={'/activity-three'}> */}
                        <a href="/activity-three">
                          Construction Tools and Equipments
                        </a>
                        {/* </Link> */}
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            <Link to={'/activity-four'}>
              <div className="col-lg-12">
                <div className="project-post">
                  <figure>
                    <img
                      // src="assets/svg4/petroleum and petrochemical products (2).svg"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                      alt="project-img-1"
                    />
                  </figure>
                  <Link to={'/activity-four'}>
                    <div className="project-data">
                      <h3>
                        <Link to={'/activity-four'}>
                          <a href="/activity-four">
                            Oil & Gas Equipment Supply
                          </a>
                        </Link>
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            <Link to={'/activity-five'}>
              <div className="col-lg-12">
                <div className="project-post">
                  <figure>
                    <img
                      // src="assets/svg4/HEALTH CARE PRODUCTS 1.svg"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                      alt="project-img-2"
                    />
                  </figure>
                  <Link to={'/activity-five'}>
                    <div className="project-data">
                      <h3>
                        {/* <Link to={'/activity-five'}> */}
                        <a href="/activity-five">Health Care PPE Products</a>
                        {/* </Link> */}
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          <center style={{ marginTop: '1%' }}>
            <div className="slider-controls">
              <button
                id="prevSlide"
                className="btn btn-white slidebtn  m-2 p-3"
                style={{ border: '1px solid black' }}
              >
                <i className="fa-solid fa-angles-left" />
              </button>
              <button
                id="nextSlide"
                className="btn btn-white slidebtn m-2 p-3"
                style={{ border: '1px solid black' }}
              >
                <i className="fa-solid fa-angles-right" />
              </button>
            </div>
          </center>
        </div>
      </section>
    </>
  );
};

export default Projects;
