import React from 'react';

const TermConditions = () => {
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
                <h2 style={{ textAlign: 'center' }}>Terms & Conditions</h2>
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
        <h4>Introduction</h4>
        <p>
          Welcome to OMDYS International Trading LLP. By using our website, you
          agree to these terms and conditions.
        </p>
        <br />

        <h4>Company Information</h4>
        <p>
          OMDYS International Trading LLP is a multi-segment trading company
          based in India. We hold a valid import-export code.
        </p>
        <br />
        <h4>Use of Website</h4>
        <p>
          You may use our website for lawful purposes only. Do not use it to
          violate any local, state, national, or international law.
        </p>
        <br />
        <h4>Products and Services</h4>
        <p>We offer a range of products and services, including:</p>
        <ul>
          <li
            style={{ fontSize: '20px', marginLeft: '5%', fontWeight: 'bold' }}
          >
            Trading of commodities
          </li>
          <li
            style={{ fontSize: '20px', marginLeft: '5%', fontWeight: 'bold' }}
          >
            Selling various products
          </li>
          <li
            style={{ fontSize: '20px', marginLeft: '5%', fontWeight: 'bold' }}
          >
            Timely delivery arrangements
          </li>
          <li
            style={{ fontSize: '20px', marginLeft: '5%', fontWeight: 'bold' }}
          >
            Importing:{' '}
            <span style={{ fontSize: '18px' }}>
              <a href="">Printing Solutions</a>,{' '}
              <a href="">Oil & Gas EQuipments Supply</a>,{' '}
              <a href="">Health Care PPE Products</a>,{' '}
              <a href="">Electronics Components</a>,{' '}
              <a href="">Construction Tools & Safety Equipments</a>
            </span>
            {/* <li style={{ fontSize: '16px', marginLeft: '10%' }}>
              <a href="">Printing Solutions</a>
            </li>
            <li style={{ fontSize: '16px', marginLeft: '10%' }}>
              <a href="">Oil & Gas EQuipments Supply</a>
            </li>
            <li style={{ fontSize: '16px', marginLeft: '10%' }}>
              <a href="">Health Care PPE Products</a>
            </li>
            <li style={{ fontSize: '16px', marginLeft: '10%' }}>
              <a href="">Electronics Components</a>
            </li>
            <li style={{ fontSize: '16px', marginLeft: '10%' }}>
              <a href="">Construction Tools & Safety Equipments</a>
            </li> */}
          </li>
        </ul>
        <br />
        <h4>Orders and Payments</h4>
        <p>
          All orders are subject to acceptance and availability. Payments must
          be made in full before shipment.
        </p>
        <br />
        <h4>Shipping and Delivery</h4>
        <p>
          We strive to deliver products on time. However, delivery times may
          vary due to unforeseen circumstances.
        </p>
        <br />
        <h4>Returns and Refunds</h4>
        <p>
          Returns are accepted within 30 days of receipt. Refunds will be
          processed after we receive the returned items in good condition.
        </p>
        <br />
        <h4>Privacy</h4>
        <p>
          We respect your privacy. Personal information collected on this
          website will be used solely for the purposes of fulfilling orders and
          improving our services.
        </p>
        <br />
        <h4>Intellectual Property</h4>
        <p>
          All content on this website, including text, graphics, logos, and
          images, is the property of OMDYS International Trading LLP.
        </p>
        <br />
        <h4>Limitation of Liability</h4>
        <p>
          OMDYS International Trading LLP is not liable for any damages arising
          from the use of this website or the products sold.
        </p>
        <br />
        <h4>Changes to Terms</h4>
        <p>
          We may update these terms and conditions from time to time. Please
          review them regularly.
        </p>
        <br />
        <h4>Contact Us</h4>
        <p>
          For any questions or concerns, please contact us at{' '}
          <a href="mailto:info.omdys@gmail.com">info.omdys@gmail.com</a>.
        </p>
        <br />
        <p>
          By using our website, you acknowledge that you have read and agree to
          these terms and conditions.
        </p>
        <br />
      </div>
    </>
  );
};

export default TermConditions;
