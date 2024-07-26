const Team = () => {
  return (
    <>
      <br />
      <div className="heading" style={{ marginTop: '30px' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>Let us help with our products</span> */}
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
          <div className="profile-card">
            <img
              src="assets/images/team/PP_.jpg"
              // src="assets/images/activity-four/Pinterest.jpg"
              alt="image3"
              className="profile-icon"
            />
            <div className="profile-name">Mr Manjunathan C</div>
            <div className="profile-position">ACCOUNTS </div>
            {/* <a href="#" className="button">
              Connect
            </a> */}
          </div>
          <div className="profile-card">
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
          </div>
          <div className="profile-card">
            <img
              src="assets/images/team/Deepak.jpg"
              alt="image2"
              className="profile-icon"
            />
            <div className="profile-name">Mr Deepak P</div>
            <div className="profile-position">BUSINESS HEAD</div>
            {/* <a href="#" className="button">
              Connect
            </a> */}
          </div>

          <div className="profile-card">
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
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Team;
