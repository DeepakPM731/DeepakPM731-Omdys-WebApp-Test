// import { useEffect } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // ---------------------------------------

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
                          </li>
                          <li className="menu-item-has-children">
                            {/* <Link to={'/about'}> */}

                            <a className="linktag" href="/about">
                              About
                            </a>
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
                                  <a className="tag" href="/csr">
                                    CSR
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
                              <a href="javascript:void(0)">Services</a>
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
                              <a href="javascript:void(0)">Products</a>
                              {/* <a href="/activities">Products</a> */}
                            </Link>
                            {/* <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <Link to={'javascript:void(0)'}>
                                  <a className="tag" href="/activities">
                                    Our Main Activities
                                  </a>
                                </Link> */}

                            <ul className="sub-menu">
                              {/* Oil & Gas Equipment Supply */}

                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-five'}> */}
                                <a href="javascript:void(0)">
                                  {/* <a href="/activity-four"> */}
                                  Oil & Gas Equipments Supply
                                </a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/valves">Valves</a>
                                  </li>
                                  <li>
                                    <a href="/pipes">Pipes</a>
                                  </li>
                                  <li>
                                    <a href="/connectors">
                                      Fittings and Connectors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/gaskets">Gaskets and Seals</a>
                                  </li>
                                  <li>
                                    <a href="/bolts">Bolts and Nuts</a>
                                  </li>
                                  <li>
                                    <a href="/hoses">Hoses and Tubing</a>
                                  </li>
                                  <li>
                                    <a href="/instrumentation">
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
                              {/* Electronics Components */}

                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-two'}> */}
                                <a href="javascript:void(0)">
                                  {/* <a href="/activity-two"> */}
                                  Electronics Components
                                </a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/ic">Integrated Circuits (ICs)</a>
                                  </li>
                                  <li>
                                    <a href="/passive">Passive Components</a>
                                  </li>

                                  <li>
                                    <a href="/active">Active Components</a>
                                  </li>
                                  <li>
                                    <a href="/connector">
                                      Connectors and Cables
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/sensor">Sensors and Modules</a>
                                  </li>
                                  <li>
                                    <a href="/led">LEDs and Displays</a>
                                  </li>
                                  <li>
                                    <a href="/power">
                                      Power Supplies and Batteries
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/switch">Switches and Relays</a>
                                  </li>
                                  {/* <li>
                                    <a href="/semi">Semiconductors</a>
                                  </li> */}
                                </ul>
                              </li>
                              {/* Health Care PPE Products */}

                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-five'}> */}
                                {/* <a href="/activity-five"> */}
                                <a href="javascript:void(0)">
                                  Health Care PPE Products
                                </a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/mask">Face Masks</a>
                                  </li>
                                  <li>
                                    <a href="/protective">Protective Apparel</a>
                                  </li>
                                  <li>
                                    <a href="/gloves">Gloves</a>
                                  </li>
                                  <li>
                                    <a href="/eye">Eye Protection</a>
                                  </li>
                                  <li>
                                    <a href="/sanitizer">
                                      Sanitizers & Disinfectants
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/cleaning">Cleaning Solutions</a>
                                  </li>
                                </ul>
                              </li>
                              {/* Construction Tools & Safety Equipments */}

                              <li className="menu-item-has-children">
                                {/* <Link to={'/activity-three'}> */}
                                {/* <a href="/activity-three"> */}
                                <a href="javascript:void(0)">
                                  Construction Tools & Safety Equipments
                                </a>
                                {/* </Link> */}
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/hand-tools">Hand Tools</a>
                                  </li>
                                  <li>
                                    <a href="/power-tools">Power Tools</a>
                                  </li>
                                  {/* <li>
                                    <a href="/activity-three">
                                      Gardening Tools
                                    </a>
                                  </li> */}
                                  <li>
                                    <a href="/electrical-tools">
                                      Electrical Tools
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/plumbing-tools">Plumbing Tools</a>
                                  </li>
                                  <li>
                                    <a href="/safety">Safety Equipment</a>
                                  </li>
                                  {/* <li>
                                    <a href="/activity-three">Fasteners</a>
                                  </li> */}
                                  {/* <li>
                                    <a href="/activity-three">
                                      Building Materials
                                    </a>
                                  </li> */}
                                  {/* <li>
                                    <a href="/activity-three">
                                      Hardware Accessories
                                    </a>
                                  </li> */}
                                </ul>
                              </li>
                              {/* printing solutions */}

                              <li className="menu-item-has-children">
                                {/* <a href="/activity-one">Printing Solutions</a> */}
                                <a href="javascript:void(0)">
                                  Printing Solutions
                                </a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="/ecosolvent">Eco-Solvent Inks</a>
                                  </li>
                                  <li>
                                    <a href="/uv">UV Inks</a>
                                  </li>
                                  <li>
                                    <a href="/solvent">Solvent-Based Inks</a>
                                  </li>
                                  <li>
                                    <a href="/printequip">Printing Equipment</a>
                                  </li>
                                  <li>
                                    <a href="/media">Media Supplies</a>
                                  </li>
                                </ul>
                              </li>

                              <li className=""></li>
                            </ul>
                          </li>
                          <li className="">
                            <Link to={'/news'}>
                              <a href="">News</a>
                            </Link>
                          </li>
                          <li>
                            <Link to={'/contact'}>
                              <a href="">Contact</a>
                            </Link>
                          </li>
                        </ul>
                        <div className="extras">
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
            {/* -------------mobile--------------------------- */}
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
                  <a
                    href="/"
                    style={{ color: 'white' }}
                    className="mobile-li-a"
                  >
                    Home
                  </a>
                </li>
                <li className="menu-item-has-children">
                  {/* <Link to={'/about'}> */}
                  <a
                    href="javascript:void(0)"
                    className="mobile-li-a"
                    style={{ color: 'white' }}
                  >
                    About
                  </a>
                  {/* </Link>  */}
                  <ul className="sub-menu">
                    <li>
                      {/* <Link to={'/about'}> */}
                      <a
                        href="/about"
                        className="mobile-li-a-sub"
                        style={{ color: 'white' }}
                      >
                        About Company{' '}
                      </a>
                      {/* </Link> */}
                    </li>
                    <li>
                      {/* <Link to={'/core-values'}> */}{' '}
                      <a
                        href="/core-values"
                        className="mobile-li-a-sub"
                        style={{ color: 'white' }}
                      >
                        {' '}
                        Core Values
                      </a>
                      {/* </Link> */}
                    </li>
                    <li>
                      {/* <Link to={'/core-values'}> */}{' '}
                      <a
                        href="/csr"
                        className="mobile-li-a-sub"
                        style={{ color: 'white' }}
                      >
                        {' '}
                        CSR
                      </a>
                      {/* </Link> */}
                    </li>
                    <li>
                      {/* <Link to={'/core-values'}> */}{' '}
                      <a
                        href="/team"
                        className="mobile-li-a-sub"
                        style={{ color: 'white' }}
                      >
                        {' '}
                        Our Team
                      </a>
                      {/* </Link> */}
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  {/* <Link to={'/service-single'}> */}
                  <a
                    href="javascript:void(0)"
                    className="mobile-li-a"
                    style={{ color: 'white' }}
                  >
                    Services
                  </a>
                  {/* </Link> */}
                  <ul className="sub-menu">
                    <li>
                      <a href="/service-main" className="mobile-li-a-sub">
                        Our Main Services
                      </a>
                    </li>
                    <li>
                      <a href="/service-one" className="mobile-li-a-sub">
                        Supplier Identification & Sourcing
                      </a>
                    </li>
                    <li>
                      <a href="/service-two" className="mobile-li-a-sub">
                        Product Management
                      </a>
                    </li>
                    {/* <li>
                      <a href="/service-three">Logistics & Shipping</a>
                    </li> */}
                    <li>
                      <a href="/service-four" className="mobile-li-a-sub">
                        Risk Management
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to={'javascript:void(0)'}>
                    <a
                      href="javascript:void(0)"
                      className="mobile-li-a"
                      style={{ color: 'white' }}
                    >
                      Products
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    {/* Oil & Gas Equipment Supply */}
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-five'}> */}
                      <a href="/activity-four" className="mobile-li-a-sub">
                        Oil & Gas Equipment Supply
                      </a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/valves" className="mobile-li-a-sub">
                            Valves
                          </a>
                        </li>
                        <li>
                          <a href="/pipes" className="mobile-li-a-sub">
                            Pipes
                          </a>
                        </li>
                        <li>
                          <a href="/connectors" className="mobile-li-a-sub">
                            Fittings and Connectors
                          </a>
                        </li>
                        <li>
                          <a href="/gaskets" className="mobile-li-a-sub">
                            Gaskets and Seals
                          </a>
                        </li>
                        <li>
                          <a href="/bolts" className="mobile-li-a-sub">
                            Bolts and Nuts
                          </a>
                        </li>
                        <li>
                          <a href="/hoses" className="mobile-li-a-sub">
                            Hoses and Tubing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/instrumentation"
                            className="mobile-li-a-sub"
                          >
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
                    {/* Electronics Components */}
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-two'}> */}
                      <a href="/activity-two" className="mobile-li-a-sub">
                        Electronics Components
                      </a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/ic" className="mobile-li-a-sub">
                            Integrated Circuits (ICs)
                          </a>
                        </li>
                        <li>
                          <a href="/passive" className="mobile-li-a-sub">
                            Passive Components
                          </a>
                        </li>

                        <li>
                          <a href="/active" className="mobile-li-a-sub">
                            Active Components
                          </a>
                        </li>
                        <li>
                          <a href="/connector" className="mobile-li-a-sub">
                            Connectors and Cables
                          </a>
                        </li>
                        <li>
                          <a href="/sensor" className="mobile-li-a-sub">
                            Sensors and Modules
                          </a>
                        </li>
                        <li>
                          <a href="/led" className="mobile-li-a-sub">
                            LEDs and Displays
                          </a>
                        </li>
                        <li>
                          <a href="/power" className="mobile-li-a-sub">
                            Power Supplies and Batteries
                          </a>
                        </li>
                        <li>
                          <a href="/switch" className="mobile-li-a-sub">
                            Switches and Relays
                          </a>
                        </li>
                        {/* <li>
                          <a href="/semi">Semiconductors</a>
                        </li> */}
                      </ul>
                    </li>
                    {/* Health Care PPE Products */}
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-five'}> */}
                      <a href="/activity-five" className="mobile-li-a-sub">
                        Health Care PPE Products
                      </a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/mask" className="mobile-li-a-sub">
                            Face Masks
                          </a>
                        </li>
                        <li>
                          <a href="/protective" className="mobile-li-a-sub">
                            Protective Apparel
                          </a>
                        </li>
                        <li>
                          <a href="/gloves" className="mobile-li-a-sub">
                            Gloves
                          </a>
                        </li>
                        <li>
                          <a href="/eye" className="mobile-li-a-sub">
                            Eye Protection
                          </a>
                        </li>
                        <li>
                          <a href="/sanitizer" className="mobile-li-a-sub">
                            Sanitizers & Disinfectants
                          </a>
                        </li>
                        <li>
                          <a href="/cleaning" className="mobile-li-a-sub">
                            Cleaning Solutions
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Construction Tools & Safety Equipments */}

                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-three'}> */}
                      <a href="/activity-three" className="mobile-li-a-sub">
                        Construction Tools & Safety Equipments
                      </a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/hand-tools" className="mobile-li-a-sub">
                            Hand Tools
                          </a>
                        </li>
                        <li>
                          <a href="/power-tools" className="mobile-li-a-sub">
                            Power Tools
                          </a>
                        </li>
                        {/* <li>
                          <a href="/">Gardening Tools</a>
                        </li> */}
                        <li>
                          <a
                            href="/electrical-tools"
                            className="mobile-li-a-sub"
                          >
                            Electrical Tools
                          </a>
                        </li>
                        <li>
                          <a href="/plumbing-tools" className="mobile-li-a-sub">
                            Plumbing Tools
                          </a>
                        </li>
                        <li>
                          <a href="/safety" className="mobile-li-a-sub">
                            Safety Equipment
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* printing solutions */}
                    <li className="menu-item-has-children">
                      {/* <Link to={'/activity-one'}> */}
                      <a href="/activity-one" className="mobile-li-a-sub">
                        Printing Solutions
                      </a>
                      {/* </Link> */}
                      <ul className="sub-menu">
                        <li>
                          <a href="/ecosolvent" className="mobile-li-a-sub">
                            Eco-Solvent Inks
                          </a>
                        </li>
                        <li>
                          <a href="/uv" className="mobile-li-a-sub">
                            UV Inks
                          </a>
                        </li>
                        <li>
                          <a href="/solvent" className="mobile-li-a-sub">
                            Solvent-Based Inks
                          </a>
                        </li>
                        <li>
                          <a href="/printequip" className="mobile-li-a-sub">
                            Printing Equipment
                          </a>
                        </li>
                        <li>
                          <a href="/media" className="mobile-li-a-sub">
                            Media Supplies
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className=""></li>
                  </ul>
                </li>
                <li>
                  {/* <Link to={'/news'}> */}
                  <a
                    href="/news"
                    className="mobile-li-a"
                    style={{ color: 'white' }}
                  >
                    News
                  </a>
                </li>
                <li>
                  {/* <Link to={'/contact'}> */}
                  <a
                    href="/contact"
                    className="mobile-li-a"
                    style={{ color: 'white' }}
                  >
                    Contact
                  </a>
                  {/* </Link> */}
                </li>
              </ul>
              <a href="javascript:void(0)" id="res-cross" />
            </div>
            {/* ----------------------desktop menu-------------------------------------- */}
            <div className="mobile-nav desktop-menu">
              <h2>
                Think Products, Think Us{' '}
                <span style={{ color: '#33cc33' }}>&nbsp;&nbsp;-OMDYS</span>
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
              <a href="tel:+91 84310 6789 3" target="">
                <p className="num">+91 84310 6789 3</p>
              </a>
              <p className="adrs">
                #614, Phase 10, RK Hudco,Hosur, Tamil Nadu, India
              </p>
              <div className="social-medias">
                <a
                  href="https://www.linkedin.com/company/omdys-international-llp/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a href="">Facebook</a>
                <a href="" style={{ borderBottom: ' 1px solid #6a6a6a' }}>
                  Instagram
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
