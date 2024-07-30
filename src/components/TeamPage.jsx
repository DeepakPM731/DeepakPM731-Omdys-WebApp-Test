import { useEffect } from 'react';

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bannercontact"></section>

      <div
        className="heading"
        style={{
          // marginTop: '30px',
          paddingTop: '15px',
        }}
      >
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h2>Meet Our Team</h2>
        {/* <hr /> */}
      </div>
      {/* <div className="container">
        <h2 style={{ textAlign: 'center' }}>Meet Our Team</h2>
        <br />
      </div> */}
      <div className="tmbg">
        <br />
        <div className="profile-container">
          <div className="profile-card" style={{ position: 'relative' }}>
            {' '}
            {/* <div className="bgimg" style={{}}> */}
            <img
              src="assets/images/team/PP_.jpg"
              // src="assets/images/activity-four/Pinterest.jpg"
              alt="image3"
              className="profile-icon"
              style={{ marginTop: '1px' }}
            />
            {/* </div> */}
            <div className="profile-name">Mr Manjunathan C</div>
            <div className="profile-position">ACCOUNTS </div>
            {/* <a href="#" className="button">
              Connect
            </a> */}
            <div
              style={{
                textAlign: 'end',
                position: 'absolute',
                right: '5px',
                bottom: '5px',
              }}
            >
              <img src="/assets/images/heading-icon.png" alt="" />
            </div>
          </div>

          <div className="profile-card" style={{ position: 'relative' }}>
            <img
              // src="assets/images/team/PP.jpg"
              alt="image3"
              className="profile-icon"
              // src="assets/images/activity-four/Pinterest.jpg"
              src="assets/images/team/savin.jpg"
            />
            <div className="profile-name">Mr Savin Nadh M</div>
            <div className="profile-position">TECHNICAL </div>

            {/* <a href="#" className="button">
              Connect
            </a> */}
            <div
              style={{
                textAlign: 'end',
                position: 'absolute',
                right: '5px',
                bottom: '5px',
              }}
            >
              <img src="/assets/images/heading-icon.png" alt="" />
            </div>
          </div>
          <div className="profile-card" style={{ position: 'relative' }}>
            <img
              src="assets/images/team/Deepak.jpg"
              alt="image2"
              className="profile-icon"
            />
            <div className="profile-name">Mr Deepak P</div>
            <div className="profile-position">SALES</div>
            {/* <a href="#" className="button">
              Connect
            </a> */}
            <div
              style={{
                textAlign: 'end',
                position: 'absolute',
                right: '5px',
                bottom: '5px',
              }}
            >
              <img src="/assets/images/heading-icon.png" alt="" />
            </div>
          </div>

          <div className="profile-card" style={{ position: 'relative' }}>
            <img
              src="assets/images/team/Rajendran.jpg"
              alt="image1"
              className="profile-icon"
            />
            <div className="profile-name">Mr Rajendran M</div>
            <div className="profile-position">LOGISTICS</div>
            {/* <a href="#" className="button">
              Connect
            </a> */}
            <div
              style={{
                textAlign: 'end',
                position: 'absolute',
                right: '5px',
                bottom: '5px',
              }}
            >
              <img src="/assets/images/heading-icon.png" alt="" />
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default TeamPage;
