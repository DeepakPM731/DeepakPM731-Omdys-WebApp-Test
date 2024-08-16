import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <section className="gap renovation" style={{marginTop:'40px'}}>
        <div
          className="parallax"
          style={{
            backgroundImage: 'url("/assets/images/bg_contact4.png")',
            // 'url("https://winsfolio.net/html/builty/assets/images/reno-img.jpg")',
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="reno-data">
                <h3 style={{ marginBottom: '20px' }}>Our Business </h3>
                <h2 style={{ fontSize: '80px' }}>Starts Here</h2>
                <div>
                 
                </div>
                <div className="bbtn">
                  <figure>
                    <img
                      className="w-auto circle-layer"
                      src="assets/images/circle-text.png"
                      alt="Circle Text"
                    />
                  </figure>
                  <Link to={'/contact-form'}>
                    
                    <i className="fa-solid fa-arrow-up-long" />
                    {/* </a> */}
                  </Link>
                </div>
                <Link to={'/contact-form'}>
                  <h4
                    style={{
                      fontSize: '35px',
                      color: 'white',
                      fontWeight: '600',
                      marginTop: '50px',
                    }}
                  >
                    Place Your Enquiry
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
