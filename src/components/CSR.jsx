import { useEffect } from 'react';

const CSR = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('[data-aos]');
    for (let i = 0; i < elements.length; i++) {
      //if ios remove the attribute
      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        elements[i].removeAttribute('data-aos');
      }
    }
  }, []);
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
                <h2 style={{ textAlign: 'center' }}>C S R</h2>
                <br />
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  tenetur culpa rerum, ipsam odio voluptatem excepturi quasi!
                </p> */}
              </div>
            </div>
          </div>
          {/* <div className="breadcrums"></div> */}
        </section>
      </div>
      <br />

      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/csr/CSR.svg"
          alt="Our Project One Image 1"
        />

        <br />
        <br />
        <h3 style={{ textAlign: 'left', marginBottom: '1%' }}>
          OMDYS: Trading with a Purpose
        </h3>
        <p style={{ fontSize: '22px', textAlign: 'justify' }}>
          OMDYS International LLP believes in more than just business. We are
          committed to making a positive impact on the communities we serve.
        </p>
        <br />
        <h3 style={{ textAlign: 'left' }}>Our CSR initiatives focus on:</h3>
        <br />
        <div
          className="container d-flex justify-content-center flex-wrap"
          style={{
            width: '',
            margin: '10px',
          }}
        >
          {/* item-1 */}
          <div
            className="item-1"
            style={{
              border: '2px solid grey',
              borderRadius: '30px',
              width: '400px',
              margin: '10px',
            }}
          >
            <img
              style={{ borderRadius: '', width: '200px', marginTop: '10px' }}
              src="assets/images/activity-four/svg/csr/CSR - 1.svg"
              alt="Core Values Image 1"
            />
            <br />
            <h4 style={{ marginTop: '10px' }}>Empowering Communities</h4>
            <p>
              {' '}
              We support education, healthcare, and skill development programs.
            </p>
            <br />
          </div>

          {/* item-2 */}
          <div
            className="item-2"
            style={{
              border: '2px solid grey',
              borderRadius: '30px',
              width: '400px',
              margin: '10px',
            }}
          >
            <img
              style={{ borderRadius: '', width: '200px', marginTop: '10px' }}
              src="assets/images/activity-four/svg/csr/CSR - 2.svg"
              alt="Core Values Image 1"
            />
            <br />
            <h4 style={{ marginTop: '10px' }}>Protecting Our Planet</h4>
            <p>
              {' '}
              We adopt sustainable practices and contribute to environmental
              conservation.
            </p>
          </div>

          {/* item-3 */}
          <div
            className="item-3"
            style={{
              border: '2px solid grey',
              borderRadius: '30px',
              width: '400px',
              margin: '10px',
            }}
          >
            <img
              style={{ borderRadius: '', width: '200px', marginTop: '10px' }}
              src="assets/images/activity-four/svg/csr/CSR - 3.svg"
              alt="Core Values Image 1"
            />
            <br />
            <h4 style={{ marginTop: '10px' }}>Ethical Business</h4>
            <p>
              {' '}
              We conduct our business with integrity and transparency. By
              working together, we can build a brighter future for all.
            </p>
          </div>

          <p style={{ marginTop: '4%' }}>
            #OMDYScares #CSR #SustainableBusiness #CommunityDevelopment
          </p>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default CSR;
