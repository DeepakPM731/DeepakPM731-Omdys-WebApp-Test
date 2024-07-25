import { useEffect } from 'react';

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    height: '300px',
    minWidth: '200px',
    width: '300px',
    border: '2px solid red',
    backgroundColor: 'lightgrey',
  };
  return (
    <>
      <div style={{ height: 'auto' }}>
        <section className="banner-style-one mb-5">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2>Meet Our Team</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                  repudiandae doloremque fugit nulla modi eaque commodi laborum
                  inventore quasi in?
                </p>
              </div>
            </div>
          </div>
          <div className="breadcrums">
            <div className="container"></div>
          </div>
        </section>
        {/* Banner ends */}

        {/* <Team /> */}
      </div>

      {/* <div className="container d-flex justify-content-center flex-wrap align-items-center gap-4">
        <div style={styles} className="tmcard">
          1
        </div>
        <div style={styles} className="tmcard">
          2
        </div>
        <div style={styles} className="tmcard">
          3
        </div>
        <div style={styles} className="tmcard">
          4
        </div>
      </div> */}
      <br />

      <div className="container">
        <h2>Meet Our Team</h2>
        <br />
      </div>
      <div className='tmbg' >
        <div className="profile-container">
          <div className="profile-card">
            <img
              src="https://i.imgur.com/bZBG9PE.jpg"
              alt="image1"
              className="profile-icon"
            />
            <div className="profile-name">Mr Rajendran M</div>
            <div className="profile-position">Logistic Manager</div>
            {/* <a href="#" className="button">
            Connect
          </a> */}
          </div>
          <div className="profile-card">
            <img
              src="https://i.imgur.com/S4GNFIW.jpg"
              alt="image2"
              className="profile-icon"
            />
            <div className="profile-name">Mr Deepak P</div>
            <div className="profile-position">Business Head</div>
            {/* <a href="#" className="button">
            Connect
          </a> */}
          </div>
          <div className="profile-card">
            <img
              src="https://i.imgur.com/cMSVQZC.jpg"
              alt="image3"
              className="profile-icon"
            />
            <div className="profile-name">Mr Manjunathan C</div>
            <div className="profile-position">Accounts Manager</div>
            {/* <a href="#" className="button">
            Connect
          </a> */}
          </div>
          <div className="profile-card">
            <img
              src="https://i.imgur.com/cMSVQZC.jpg"
              alt="image3"
              className="profile-icon"
            />
            <div className="profile-name">Mr Savin Nadh M</div>
            <div className="profile-position">Technical Manager</div>
            {/* <a href="#" className="button">
            Connect
          </a> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default TeamPage;
