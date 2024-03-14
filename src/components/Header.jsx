// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // useEffect(() => {
  //   console.log('hoiiii');
  //   // Event handler for mobile menu toggle
  //   const handleMobileMenuClick = (event) => {
  //     const mobileMenu = document.getElementById('mobile-nav');
  //     const mobileMenuButton = document.getElementById('mobile-menu');
  //     if (mobileMenu && mobileMenuButton) {
  //       mobileMenu.classList.toggle('open');
  //       mobileMenuButton.classList.toggle('open');
  //     }
  //   };

  //   // Event handler for desktop menu toggle
  //   const handleDesktopMenuClick = (event) => {
  //     const desktopMenu = document.querySelector('.desktop-menu');
  //     const desktopMenuButton = document.getElementById('desktop-menu');
  //     if (desktopMenu && desktopMenuButton) {
  //       desktopMenu.classList.toggle('open');
  //       desktopMenuButton.classList.toggle('open');
  //     }
  //   };

  //   // Event handler for close button
  //   const handleResCrossClick = (event) => {
  //     const mobileMenu = document.getElementById('mobile-nav');
  //     const mobileMenuButton = document.getElementById('mobile-menu');
  //     if (mobileMenu && mobileMenuButton) {
  //       mobileMenu.classList.remove('open');
  //       mobileMenuButton.classList.remove('open');
  //     }
  //   };

  //   // Attach event handlers
  //   document.addEventListener('click', (event) => {
  //     // Mobile menu toggle
  //     if (event.target.matches('#mobile-menu')) {
  //       handleMobileMenuClick(event);
  //     }

  //     // Desktop menu toggle
  //     if (event.target.matches('#desktop-menu')) {
  //       handleDesktopMenuClick(event);
  //     }

  //     // Close button
  //     if (event.target.matches('#res-cross')) {
  //       handleResCrossClick(event);
  //     }
  //   });

  //   // Clean up event listeners when the component is unmounted
  //   return () => {
  //     document.removeEventListener('click', handleMobileMenuClick);
  //     document.removeEventListener('click', handleDesktopMenuClick);
  //     document.removeEventListener('click', handleResCrossClick);
  //   };
  // }, []);
  return (
    <>
      <header className="header-style-one">
        <div className="container">
          <div className="row">
            <div className="desktop-nav" id="stickyHeader">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex-all justify-content-between">
                      <div className="header-logo">
                        <a href="/">
                          <figure>
                            <img
                              //   src="assets/images/Builty-Logo.svg"
                              src="assets/images/OMDYS_LOGO_Horizontal.png"
                              //   width={'306'}
                              //   height={'75'}
                              width={'326'}
                              height={'80'}
                              alt="logoo"
                            />
                          </figure>
                        </a>
                      </div>
                      <div className="nav-bar">
                        <ul>
                          <li className="menu-item-has-children">
                            <a href="/">Home</a>
                            {/* <ul className="sub-menu">
                              <li>
                                <a href="index.html">Home One</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Two</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Three</a>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <Link to={'/about'}>
                              <a href="javascript:void(0)">About</a>
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to={'/about'}>
                                  <a href="javascript:void(0)">About Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link to={'/core-values'}>
                                  <a href="javascript:void(0)">Core Values</a>
                                </Link>
                              </li>
                              {/* <li>
                                <a href="leadership.html">Leadership</a>
                              </li>
                              <li>
                                <a href="history.html">History</a>
                              </li> */}
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="JavaScript:void(0)">Services</a>
                            <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <Link to={'/service-one'}>
                                  <a href="javascript:void(0)">
                                    Supplier Identification & Sourcing
                                  </a>
                                </Link>
                                {/* <ul className="sub-menu">
                                  <li>
                                    <a href="product-list.html">Product List</a>
                                  </li>
                                  <li>
                                    <a href="product-grid.html">Product Grid</a>
                                  </li>
                                </ul> */}
                              </li>
                              <li>
                                <Link to={'/service-two'}>
                                  <a href="">Product Management</a>
                                </Link>
                              </li>
                              <li>
                                <Link to={'/service-three'}>
                                  <a href="">Logistics & Shipping</a>
                                </Link>
                              </li>
                              <li>
                                <Link to={'/service-four'}>
                                  <a href="">Risk Management</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="JavaScript:void(0)">Pages</a>
                            <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <Link to={'/activities'}>
                                  <a href="javascript:void(0)">
                                    Our Main Activities
                                  </a>
                                </Link>
                                <ul className="sub-menu">
                                  <li>
                                    <Link to={'/activity-one'}>
                                      Printing Solutions
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={'/activity-two'}>
                                      Electronics Components
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={'/activity-three'}>
                                      Industrial Construction Tools and
                                      Equipment
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={'/activity-four'}>
                                      Petroleum and Petrochemical Products
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={'/activity-five'}>
                                      Medical-PPE
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {/* <li className="menu-item-has-children">
                                <a href="javascript:void(0)">Projects</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="our-projects-1.html">
                                      Our Projects One
                                    </a>
                                  </li>
                                  <li>
                                    <a href="our-projects-2.html">
                                      Our Projects Two
                                    </a>
                                  </li>
                                  <li>
                                    <a href="project-detail.html">
                                      Project Detail
                                    </a>
                                  </li>
                                </ul>
                              </li> */}
                              <li className="menu-item-has-children">
                                {/* <Link to={'/team'}>Team */}
                                <a href="/team">Team</a>
                                {/* </Link> */}
                                {/* <ul className="sub-menu">
                                  <li>
                                    <a href="our-team.html">Our Team</a>
                                  </li>
                                  <li>
                                    <a href="team-detail.html">Team Detail</a>
                                  </li>
                                </ul> */}
                              </li>
                              {/* <li>
                                <a href="login.html">Login &amp; Register</a>
                              </li> */}
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to={'/news'}>
                              <a href="">News</a>
                            </Link>
                            {/* <ul className="sub-menu">
                              <li>
                                <a href="our-blog-1.html">Our Blog One</a>
                              </li>
                              <li>
                                <a href="our-blog-2.html">Our Blog Two</a>
                              </li>
                              <li>
                                <a href="blog-detail.html">Blog Detail</a>
                              </li>
                            </ul> */}
                          </li>
                          <li>
                            <Link to={'/contact'}>
                              <a href="">Contact</a>
                            </Link>
                          </li>
                        </ul>
                        <div className="extras">
                          {/* <div className="theme-color">
                            <img
                              src="assets/images/sun.png"
                              alt=""
                              id="theme-icon"
                            />
                          </div> */}
                          <a
                            href="javascript:void(0)"
                            id="mobile-menu"
                            className="menu-start"
                            // onClick={handleMobileMenuClick}
                          >
                            <svg id="ham-menu" viewBox="0 0 100 100">
                              <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                              />
                              <path className="line line2" d="M 20,50 H 80" />
                              <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                              />
                            </svg>
                          </a>
                          <a
                            href="javascript:void(0)"
                            id="desktop-menu"
                            className="menu-start"
                          >
                            <svg id="ham-menue" viewBox="0 0 100 100">
                              <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                              />
                              <path className="line line2" d="M 20,50 H 80" />
                              <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                              />
                            </svg>
                          </a>
                          <a href="tel:+91 84310 6789 3" className="theme-btn">
                            +91 84310 6789 3
                            <i>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={40}
                                height={62}
                                viewBox="0 0 40 62"
                              >
                                <defs>
                                  <clipPath id="saddasdasdasdasda">
                                    <rect width={40} height={62} />
                                  </clipPath>
                                </defs>
                                <g
                                  id="Mobisdfle"
                                  clipPath="url(#saddasdasdasdasda)"
                                >
                                  <path
                                    id="Path_125"
                                    data-name="Path 1"
                                    d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                                    transform="translate(1 1)"
                                  />
                                  <path
                                    id="Path_4342"
                                    data-name="Path 2"
                                    d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                                    transform="translate(14 48)"
                                  />
                                </g>
                              </svg>
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-nav" id="mobile-nav">
              <div className="res-log">
                {/* <Link to={''}> */}
                <img
                  src="assets/images/OMDYS_LOGO_Horizontal.png"
                  width={'253'}
                  height={'93'}
                  alt="Responsive Logo"
                />
                {/* </Link> */}
              </div>
              <ul>
                <li className="menu-item-has-children">
                  <a href="/" style={{ color: 'white' }}>
                    Home
                  </a>

                  {/* <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Two</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Three</a>
                    </li>
                  </ul> */}
                </li>
                <li className="menu-item-has-children">
                  <Link to={'/about'}>
                    <a href="javascript:void(0)" style={{ color: 'white' }}>
                      About
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to={'/about'}>About Company</Link>
                    </li>
                    <li>
                      <Link to={'/core-values'}>Core Values</Link>
                    </li>
                    {/* <li>
                      <a href="leadership.html">Leadership</a>
                    </li>
                    <li>
                      <a href="history.html">History</a>
                    </li> */}
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="JavaScript:void(0)">Services</a>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link to={'/service-one'}>
                        Supplier Identification & Sourcing
                      </Link>
                    </li>
                    <li>
                      <Link to={'/service-two'}>Product Management</Link>
                    </li>
                    <li>
                      <Link to={'/service-three'}>Logistics & Shipping</Link>
                    </li>
                    <li>
                      <Link to={'/service-four'}>Risk Management</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="JavaScript:void(0)">Pages</a>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link to={'/activities'}>Our Main Activities</Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <a href="/team">Team</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Service Detail</a>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li className="menu-item-has-children">
                      <a href="javascript:void(0)">Projects</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="our-projects-1.html">Our Projects One</a>
                        </li>
                        <li>
                          <a href="our-projects-2.html">Our Projects Two</a>
                        </li>
                        <li>
                          <a href="project-detail.html">Project Detail</a>
                        </li>
                      </ul>
                    </li> */}
                    <li className="menu-item-has-children">
                      <Link to={'/team'}>Team</Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <a href="our-team.html">Our Team</a>
                        </li>
                        <li>
                          <a href="team-detail.html">Team Detail</a>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li>
                      <a href="login.html">Login &amp; Register</a>
                    </li> */}
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to={'/news'}>News</Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <a href="our-blog-1.html">Our Blog One</a>
                    </li>
                    <li>
                      <a href="our-blog-2.html">Our Blog Two</a>
                    </li>
                    <li>
                      <a href="blog-detail.html">Blog Detail</a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
              <a href="" id="res-cross" />
            </div>
            <div className="mobile-nav desktop-menu">
              <h2>
                Think Products, Think Us{' '}
                <span style={{ color: '#33cc33' }}>&nbsp;&nbsp;-OMDYS</span>
                {/* <span>
                  <img
                    src="assets/images/OMDYS LOGO - Horizontal - Without ICON.png"
                    alt=""
                    width={'319px'}
                    height={'100px'}
                    style={{
                      padding: '15px',
                      filter: ' grayscale(100%)',
                      //   backgroundColor: 'black',
                      //   objectFit: 'cover',
                    }}
                  />
                </span> */}
              </h2>
              <p className="des">
                Sourcing products can be a nightmare. Let us find the highest
                quality products at the best prices, saving you time
                and frustration.
              </p>
              <figure>
                <img
                  src="assets/images/desktop-menu-img.jpg"
                  alt="Desktop Menu Image"
                />
              </figure>
              <h3>Get in touch</h3>
              <a href="tel:+91 84310 6789 3">
                <p className="num">(+91) 84310 6789 3</p>
              </a>
              <p className="adrs">
                #614, Phase 10, RK Hudco,Hosur, Tamil Nadu, India
              </p>
              <div className="social-medias">
                <a href="javascript:void(0)">Facebook</a>
                <a href="javascript:void(0)">Twitter</a>
                <a href="javascript:void(0)">Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
