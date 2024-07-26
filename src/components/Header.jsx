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
                      <div
                        className="nav-bar"
                        // style={{ marginRight: 'auto', marginLeft: 'auto' }}
                      >
                        <ul>
                          <li className="">
                            {/* <li className="menu-item-has-children"> */}
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
                            {/* <Link to={'/about'}> */}

                            <a href="/about">About</a>
                            {/* <a href="javascript:void(0)">About</a> */}
                            {/* </Link> */}
                            <ul className="sub-menu">
                              <li>
                                <Link to={'javascript:void(0)'}>
                                  <a className="tag" href="/about">
                                    About Company
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to={'javascript:void(0)'}>
                                  <a className="tag" href="/core-values">
                                    Core Values
                                  </a>
                                  {/* <a href="javascript:void(0)">Core Values</a> */}
                                </Link>
                              </li>
                              <li>
                                <Link to={'javascript:void(0)'}>
                                  <a className="tag" href="/team">
                                    {' '}
                                    Our Team
                                  </a>
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
                          {/* -----------services nav----------- */}
                          {/* <li className="menu-item-has-children">
                            <a href="JavaScript:void(0)">Services</a>
                            <ul className="sub-menu">
                              
                              <li>
                              
                                <a href="/service-one">
                                  Supplier Identification & Sourcing
                                </a>
                              
                              </li>
                              <li>
                               
                                <a href="/service-two">Product Management</a>
                                
                              </li>
                              <li>
                                
                                <a href="/service-three">
                                  Logistics & Shipping
                                </a>
                               
                              </li>
                              <li>
                              
                                <a href="/service-four">Risk Management</a>
                               
                              </li>
                            </ul>
                          </li> */}
                          <li className="menu-item-has-children">
                            <Link to={'JavaScript:void(0)'}>
                              <a href="/service-single">Services</a>
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <a href="/service-main">Our Main Services</a>
                              </li>
                              <li>
                                <a href="/service-one">
                                  Supplier Identification & Sourcing
                                </a>
                              </li>
                              <li>
                                <a href="/service-two">Product Management</a>
                              </li>
                              {/* <li>
                                <a href="/service-three">
                                  Logistics & Shipping
                                </a>
                              </li> */}
                              <li>
                                <a href="/service-four">Risk Management</a>
                              </li>
                              <li>
                                {/* <ul className="sub-menu">
                                  <li>
                                    
                                    <a href="/service-one">
                                      Supplier Identification & Sourcing
                                    </a>
                                   
                                  </li>
                                  <li>
                                    
                                    <a href="/service-two">
                                      Product Management
                                    </a>
                                   
                                  </li>
                                  <li>
                                    
                                    <a href="/service-three">
                                      Logistics & Shipping
                                    </a>
                                    
                                  </li>
                                  <li>
                                   
                                    <a href="/service-four">Risk Management</a>
                                    
                                  </li>
                                </ul> */}
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

                              <li className="">
                                {/* <Link to={'/team'}>Team */}
                                {/* <a className="tag" href="/team">
                                  <span style={{ marginLeft: '5px' }}>
                                    Team
                                  </span>
                                </a> */}
                              </li>
                              {/* </Link> */}
                              {/* <ul className="sub-menu">
                                  <li>
                                    <a href="our-team.html">Our Team</a>
                                  </li>
                                  <li>
                                    <a href="team-detail.html">Team Detail</a>
                                  </li>
                                </ul> */}

                              {/* <li>
                                <a href="login.html">Login &amp; Register</a>
                              </li> */}
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to={'javascript:void(0)'}>
                              <a href="/activities">Products</a>
                            </Link>
                            {/* <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <Link to={'javascript:void(0)'}>
                                  <a className="tag" href="/activities">
                                    Our Main Activities
                                  </a>
                                </Link> */}

                            <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-one'}> */}
                                <a href="/activity-one">Printing Solutions</a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/activity-one">Eco-Solvent Inks</a>
                                  </li>
                                  <li>
                                    <a href="/activity-one">UV Inks</a>
                                  </li>
                                  <li>
                                    <a href="/activity-one">
                                      Solvent-Based Inks
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-one">
                                      Printing Equipment
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-one">Media Supplies</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-two'}> */}
                                <a href="/activity-two">
                                  Electronics Components
                                </a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/activity-two">
                                      Integrated Circuits (ICs)
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-two">
                                      Passive Components
                                    </a>
                                  </li>

                                  <li>
                                    <a href="/activity-two">
                                      Active Components
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-two">
                                      Connectors and Cables
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-two">
                                      Sensors and Modules
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-two">
                                      LEDs and Displays
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-two">
                                      Power Supplies and Batteries
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-two">
                                      Switches and Relays
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-two">Semiconductors</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-three'}> */}
                                <a href="/activity-three">
                                  Construction Tools and Equipments
                                </a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/activity-three">Hand Tools</a>
                                  </li>
                                  <li>
                                    <a href="/activity-three">Power Tools</a>
                                  </li>
                                  <li>
                                    <a href="/activity-three">
                                      Gardening Tools
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-three">
                                      Electrical Tools and Supplies
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-three">
                                      Plumbing Tools and Supplies
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-three">
                                      Safety Equipment
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-three">Fasteners</a>
                                  </li>
                                  <li>
                                    <a href="/activity-three">
                                      Building Materials
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-three">
                                      Hardware Accessories
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              {/* <li>
                                    <a href="/activity-four">
                                      Industrial Chemical Products Supply
                                    </a>
                                  </li> */}
                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-five'}> */}
                                <a href="/activity-five">
                                  Health Care PPE Products
                                </a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/activity-five">Face Masks</a>
                                  </li>
                                  <li>
                                    <a href="/activity-five">
                                      Protective Apparel
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-five">Gloves</a>
                                  </li>
                                  <li>
                                    <a href="/activity-five">Eye Protection</a>
                                  </li>
                                  <li>
                                    <a href="/activity-five">
                                      Sanitizers and Disinfectants
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-five'}> */}
                                <a href="/activity-four">
                                  Oil & Gas Equipments Supply
                                </a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/activity-four">Valves</a>
                                  </li>
                                  <li>
                                    <a href="/activity-four">Pipes</a>
                                  </li>
                                  <li>
                                    <a href="/activity-four">
                                      Fittings and Connectors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-four">
                                      Gaskets and Seals
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-four">Bolts and Nuts</a>
                                  </li>
                                  <li>
                                    <a href="/activity-four">
                                      Hoses and Tubing
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/activity-four">
                                      Instrumentation and Controls
                                    </a>
                                  </li>
                                  {/* <li>
                                    <a href="/service-four">
                                      Safety and Maintenance
                                    </a>
                                  </li> */}
                                </ul>
                                {/* </li>
                                </ul> */}
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

                              <li className="">
                                {/* <Link to={'/team'}>Team */}
                                {/* <a className="tag" href="/team">
                                  <span style={{ marginLeft: '5px' }}>
                                    Team
                                  </span>
                                </a> */}
                              </li>
                              {/* </Link> */}
                              {/* <ul className="sub-menu">
                                  <li>
                                    <a href="our-team.html">Our Team</a>
                                  </li>
                                  <li>
                                    <a href="team-detail.html">Team Detail</a>
                                  </li>
                                </ul> */}

                              {/* <li>
                                <a href="login.html">Login &amp; Register</a>
                              </li> */}
                            </ul>
                          </li>
                          {/* <li className="menu-item-has-children"> */}
                          <li className="">
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
                          <a
                            // href="tel:+91 84310 6789 3"
                            href="https://wa.me/+918431067893"
                            className="theme-btn"
                            target="_blank"
                            // style={{ textShadow: '2px 2px 5px  black' }}
                          >
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
                <a href="/">
                  <img
                    className="responsive-logo"
                    src="assets/images/OMDYS_LOGO_Horizontal.png"
                    width={'230'}
                    height={'85'}
                    alt="Responsive Logo"
                  />
                </a>
              </div>
              <ul>
                <li>
                  {/* <li className="menu-item-has-children"> */}
                  <a href="/" style={{ color: 'white' }}>
                    Home
                  </a>
                </li>
                <li className="menu-item-has-children">
                  {/* <Link to={'/about'}> */}
                  <a href="javascript:void(0)" style={{ color: 'white' }}>
                    About
                  </a>
                  {/* </Link>  */}
                  <ul className="sub-menu">
                    <li>
                      {/* <Link to={'/about'}> */}
                      <a href="/about" style={{ color: 'white' }}>
                        About Company{' '}
                      </a>
                      {/* </Link> */}
                    </li>
                    <li>
                      <Link to={'/core-values'}>
                        {' '}
                        <a href="/core-values" style={{ color: 'white' }}>
                          {' '}
                          Core Values
                        </a>
                      </Link>
                    </li>
                    <li>
                      {/* <Link to={'/core-values'}> */}{' '}
                      <a href="/team" style={{ color: 'white' }}>
                        {' '}
                        Our Team
                      </a>
                      {/* </Link> */}
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  {/* <Link to={'/service-single'}> */}
                  <a href="/service-single" style={{ color: 'white' }}>
                    Services
                  </a>
                  {/* </Link> */}
                  <ul className="sub-menu">
                    <li>
                      <a href="/service-main">Our Main Services</a>
                    </li>
                    <li>
                      <a href="/service-one">
                        Supplier Identification & Sourcing
                      </a>
                    </li>
                    <li>
                      <a href="/service-two">Product Management</a>
                    </li>
                    {/* <li>
                      <a href="/service-three">Logistics & Shipping</a>
                    </li> */}
                    <li>
                      <a href="/service-four">Risk Management</a>
                    </li>
                    <li></li>

                    <li className="">
                      {/* <Link to={'/team'}>Team */}
                      {/* <a className="tag" href="/team">
                                  <span style={{ marginLeft: '5px' }}>
                                    Team
                                  </span>
                                </a> */}
                    </li>
                    {/* </Link> */}
                    {/* <ul className="sub-menu">
                                  <li>
                                    <a href="our-team.html">Our Team</a>
                                  </li>
                                  <li>
                                    <a href="team-detail.html">Team Detail</a>
                                  </li>
                                </ul> */}

                    {/* <li>
                                <a href="login.html">Login &amp; Register</a>
                              </li> */}
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to={'javascript:void(0)'}>
                    <a href="/activities" style={{ color: 'white' }}>
                      Products
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-one'}> */}
                      <a href="/activity-one">Printing Solutions</a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/activity-one">Eco-Solvent Inks</a>
                        </li>
                        <li>
                          <a href="/activity-one">UV Inks</a>
                        </li>
                        <li>
                          <a href="/activity-one">Solvent-Based Inks</a>
                        </li>
                        <li>
                          <a href="/activity-one">Printing Equipment</a>
                        </li>
                        <li>
                          <a href="/activity-one">Media Supplies</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-two'}> */}
                      <a href="/activity-two">Electronics Components</a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/activity-two">Integrated Circuits (ICs)</a>
                        </li>
                        <li>
                          <a href="/activity-two">Passive Components</a>
                        </li>

                        <li>
                          <a href="/activity-two">Active Components</a>
                        </li>
                        <li>
                          <a href="/activity-two">Connectors and Cables</a>
                        </li>
                        <li>
                          <a href="/activity-two">Sensors and Modules</a>
                        </li>
                        <li>
                          <a href="/activity-two">LEDs and Displays</a>
                        </li>
                        <li>
                          <a href="/activity-two">
                            Power Supplies and Batteries
                          </a>
                        </li>
                        <li>
                          <a href="/activity-two">Switches and Relays</a>
                        </li>
                        <li>
                          <a href="/activity-two">Semiconductors</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-three'}> */}
                      <a href="/activity-three">
                        Construction Tools and Equipments
                      </a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/activity-three">Hand Tools</a>
                        </li>
                        <li>
                          <a href="/activity-three">Power Tools</a>
                        </li>
                        <li>
                          <a href="/activity-three">Gardening Tools</a>
                        </li>
                        <li>
                          <a href="/activity-three">
                            Electrical Tools and Supplies
                          </a>
                        </li>
                        <li>
                          <a href="/activity-three">
                            Plumbing Tools and Supplies
                          </a>
                        </li>
                        <li>
                          <a href="/activity-three">Safety Equipment</a>
                        </li>
                        <li>
                          <a href="/activity-three">Fasteners</a>
                        </li>
                        <li>
                          <a href="/activity-three">Building Materials</a>
                        </li>
                        <li>
                          <a href="/activity-three">Hardware Accessories</a>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                                    <a href="/activity-four">
                                      Industrial Chemical Products Supply
                                    </a>
                                  </li> */}
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-five'}> */}
                      <a href="/activity-five">Health Care PPE Products</a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/activity-five">Face Masks</a>
                        </li>
                        <li>
                          <a href="/activity-five">Protective Apparel</a>
                        </li>
                        <li>
                          <a href="/activity-five">Gloves</a>
                        </li>
                        <li>
                          <a href="/activity-five">Eye Protection</a>
                        </li>
                        <li>
                          <a href="/activity-five">
                            Sanitizers and Disinfectants
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-five'}> */}
                      <a href="/activity-four">Oil & Gas Equipment Supply</a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/activity-four">Valves</a>
                        </li>
                        <li>
                          <a href="/activity-four">Pipes</a>
                        </li>
                        <li>
                          <a href="/activity-four">Fittings and Connectors</a>
                        </li>
                        <li>
                          <a href="/activity-four">Gaskets and Seals</a>
                        </li>
                        <li>
                          <a href="/activity-four">Bolts and Nuts</a>
                        </li>
                        <li>
                          <a href="/activity-four">Hoses and Tubing</a>
                        </li>
                        <li>
                          <a href="/activity-four">
                            Instrumentation and Controls
                          </a>
                        </li>
                        {/* <li>
                                    <a href="/service-four">
                                      Safety and Maintenance
                                    </a>
                                  </li> */}
                      </ul>
                      {/* </li>
                                </ul> */}
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

                    <li className=""></li>
                  </ul>
                </li>
                <li>
                  {/* <Link to={'/news'}> */}
                  <a href="/news" style={{ color: 'white' }}>
                    News
                  </a>
                  {/* </Link> */}
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
                  {/* <Link to={'/contact'}> */}
                  <a href="/contact" style={{ color: 'white' }}>
                    Contact
                  </a>
                  {/* </Link> */}
                </li>
              </ul>
              <a href="javascript:void(0)" id="res-cross" />
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
                <p className="num">+91 84310 6789 3</p>
              </a>
              <p className="adrs">
                #614, Phase 10, RK Hudco,Hosur, Tamil Nadu, India
              </p>
              <div className="social-medias">
                <a href="javascript:void(0)">Facebook</a>
                <a href="javascript:void(0)">Twitter</a>
                <a
                  href="https://www.linkedin.com/company/omdys-international-llp/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
