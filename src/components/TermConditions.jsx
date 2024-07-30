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
        <h4 style={{ marginBottom: '1%' }}>Introduction:</h4>
        <p style={{ textAlign: 'justify' }}>
          Welcome to OMDYS International LLP, a multi-functional trading company
          headquartered in Hosur, the largest industrial hub in Tamil Nadu. Our
          company is dedicated to providing a wide range of products and
          services to meet the diverse needs of our clients. By accessing and
          using our website, you agree to abide by these terms and conditions.
          We encourage you to review them carefully as they govern your use of
          our site and the services we offer. Thank you for choosing OMDYS
          International LLP as your trusted trading partner.
        </p>
        <br />

        <h4 style={{ marginBottom: '1%' }}>Company Information:</h4>
        <p>
          OMDYS International Trading LLP is a multi-segment trading company
          based in India. We hold a valid import-export code.
        </p>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Use of Website:</h4>
        <p>
          You may use our website for lawful purposes only. Do not use it to
          violate any local, state, national, or international law.
        </p>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Products and Services:</h4>
        <p>We offer a range of products and services, including:</p>
        <ul style={{ listStyleType: 'circle' }}>
          <li
            style={{
              fontSize: '18px',
              marginLeft: '5%',
              fontWeight: 'bold',
              listStyleType: 'circle',
            }}
          >
            <a href="">Printing Solutions</a>
          </li>
          <li
            style={{
              fontSize: '18px',
              marginLeft: '5%',
              fontWeight: 'bold',
              listStyleType: 'circle',
            }}
          >
            <a href="">Oil & Gas Equipments Supply</a>
          </li>
          <li
            style={{
              fontSize: '18px',
              marginLeft: '5%',
              fontWeight: 'bold',
              listStyleType: 'circle',
            }}
          >
            <a href="">Health Care PPE Products</a>
          </li>
          <li
            style={{
              fontSize: '18px',
              marginLeft: '5%',
              fontWeight: 'bold',
              listStyleType: 'circle',
            }}
          >
            <a href="">Electronics Components</a>
          </li>
          <li
            style={{
              fontSize: '18px',
              marginLeft: '5%',
              fontWeight: 'bold',
              listStyleType: 'circle',
            }}
          >
            <a href="">Construction Tools & Safety Equipments</a>
          </li>
        </ul>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Orders and Payments:</h4>
        <p style={{ textAlign: 'justify' }}>
          All orders are subject to acceptance and product availability. We
          reserve the right to reject or cancel any order due to stock
          limitations or other reasons. Payments must be made in full before the
          order is shipped, and all transactions should be directed to the
          designated OMDYS bank account. We accept various payment methods,
          including bank transfers, credit/debit cards, and other secure online
          payment options. Please ensure that all payments are correctly
          processed to avoid delays in order fulfillment. Additionally,
          customers are responsible for any bank charges or fees incurred during
          the payment process.
        </p>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Shipping and Delivery:</h4>
        <p>
          We strive to deliver products on time. However, delivery times may
          vary due to unforeseen circumstances.
        </p>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Returns and Refunds:</h4>
        <p style={{ marginLeft: '4%' }}>
          <b>Condition of Returned Items:</b> Returned items must be in their
          original condition, unused, and with all original packaging and
          accessories.
          <br />
          <b>Refund Process:</b> Refunds are typically processed within 5-10
          business days after the returned items are received and inspected. The
          refund will be issued using the original payment method.
          <br />
          <b>Restocking Fees:</b> A restocking fee may be applied to certain
          returns, especially for large or customized orders. This fee will be
          deducted from the refund amount.
          <br />
          <b>Shipping Costs:</b> Shipping costs for the return may be the
          responsibility of the customer unless the return is due to a defect or
          error on the company's part. For international returns, additional
          customs duties and taxes may apply.
          <br />
          <b>Exceptions:</b> Certain items may not be eligible for return or
          refund, such as perishable goods, hazardous materials, or items on
          final sale. Specific exclusions will be noted on the product page.
          <br />
          <b>Damaged or Defective Items:</b> If an item arrives damaged or
          defective, the company will provide a replacement or full refund,
          including return shipping costs. International Returns: For
          international returns, the company may provide specific instructions
          to facilitate the return process, including customs declarations and
          handling.
          <br />
          <b>Exchange Policy:</b> Exchanges may be offered for certain products,
          depending on availability. Customers should contact customer service
          to arrange exchanges.
        </p>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Intellectual Property:</h4>
        <p>
          All content on this website, including text, graphics, logos, and
          images, is the property of OMDYS International Trading LLP.
        </p>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Limitation of Liability:</h4>
        <p>
          OMDYS International Trading LLP is not liable for any damages arising
          from the use of this website or the products sold.
        </p>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Changes to Terms:</h4>
        <p>
          We may update these terms and conditions from time to time. Please
          review them regularly.
        </p>
        <br />
        <h4 style={{ marginBottom: '1%' }}>Contact Us:</h4>
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
