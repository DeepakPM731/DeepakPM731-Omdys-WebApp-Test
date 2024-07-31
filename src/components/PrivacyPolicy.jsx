const PrivacyPolicy = () => {
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
                <h2 style={{ textAlign: 'center' }}>Privacy Policy</h2>
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
      <br />
      <div className="container">
        {/* <h2>Terms and Conditions</h2> */}
        <p style={{ fontSize: '18px', textAlign: 'justify' }}>
          At OMDYS International LLP, we prioritize your privacy and are
          committed to protecting your personal information. The data collected
          on our website is used solely for essential business functions, such
          as processing orders, improving our services, and responding to
          customer inquiries. We only collect personal information that is
          voluntarily provided by the customer during the inquiry or purchase
          process.
          <br />
          <br />
          We assure you that all personal data shared with us is treated with
          the utmost confidentiality and is never disclosed to third parties
          without your explicit consent, except as required by law. Our business
          activities, which include international and domestic trading of
          various products, are conducted with transparency and respect for your
          privacy.
          <br />
          <br />
          Furthermore, we have implemented robust security measures, including
          encryption and secure servers, to safeguard your information from
          unauthorized access, alteration, or disclosure. Our privacy practices
          comply with applicable laws and regulations, ensuring that your data
          is handled with the highest level of care. We continuously review and
          update our security protocols to adapt to new challenges and protect
          your privacy effectively.
          <br />
          <br />
          By using our services, you trust us with your information, and we are
          dedicated to maintaining that trust through responsible data
          management and protection practices.
          <br />
          <br />
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
