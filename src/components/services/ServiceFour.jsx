import { useEffect } from 'react';

const ServiceFour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ marginBottom: '-30px' }}>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2>Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  tenetur culpa rerum, ipsam odio voluptatem excepturi quasi!
                </p>
              </div>
            </div>
          </div>
          <div className="breadcrums">
            {/* <div className="container">
              <div className="row">
                <ul>
                  <li>
                    <a href="index.html">
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
          </div>
        </section>
      </div>
      {/* service starts */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="data">
                <figure>
                  <img
                    className="w-100"
                    src="	https://winsfolio.net/html/builty/assets/images/about-k-b.jpg"
                    alt="About key Benefits"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="data" style={{ marginTop: '-150px' }}>
                {' '}
                {/* <div className="data"> */}
                <h2>Risk Management</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      <b>
                        {' '}
                        Identifying and mitigating potential risks throughout
                        the supply chain, including quality control issues,
                        production delays, and currency fluctuations.
                      </b>
                    </p>
                  </li>
                  {/* <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      <b> </b>
                    </p>
                  </li> */}
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      <b>
                        • Implementing risk management strategies, such as
                        insurance or alternative suppliers, to minimize
                        potential losses.
                      </b>
                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      <b>
                        Maintaining compliance with import and export
                        regulations
                      </b>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceFour;
