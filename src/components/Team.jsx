const Team = () => {
  return (
    <>
      <br />
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Meet Our Team</h2>
        <br />
      </div>
      <div className="tmbg">
        <br />
        <div className="profile-container">
          <div className="profile-card">
            <img
              src="assets/images/activity-four/Pinterest.jpg"
              alt="image1"
              className="profile-icon"
            />
            <div className="profile-name">Mr Rajendran M</div>
            <div className="profile-position">LOGISTIC MANAGER</div>
            {/* <a href="#" className="button">
            Connect
          </a> */}
          </div>
          <div className="profile-card">
            <img
              src="assets/images/activity-four/Pinterest.jpg"
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
              src="assets/images/activity-four/Pinterest.jpg"
              alt="image3"
              className="profile-icon"
            />
            <div className="profile-name">Mr Manjunathan C</div>
            <div className="profile-position">ACCOUNTS MANAGER</div>
            {/* <a href="#" className="button">
            Connect
          </a> */}
          </div>
          <div className="profile-card">
            <img
              src="assets/images/activity-four/Pinterest.jpg"
              alt="image3"
              className="profile-icon"
            />
            <div className="profile-name">Mr Savin Nadh M</div>
            <div className="profile-position">TECHNICAL MANAGER</div>

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
