import { useEffect } from 'react';

const ServiceOne = () => {
  
  useEffect(() => {
    let elements = document.querySelectorAll('[data-aos]');
    for (let i = 0; i < elements.length; i++) {
      //if ios remove the attribute
      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        elements[i].removeAttribute('data-aos');
      }
    }
  },[]);
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
      <div className="heading" style={{ marginTop: '', marginBottom: '' }}>
        <figure>
          <img src="assets/images/heading-icon.png" alt="heading-icon" />
        </figure>
        {/* <span>LET'S HELP YOU WITH OUR PRODUCTS</span> */}
        <h2>Supplier Identification & Sourcing</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Supplier+Identification+%26+Sourcing_.svg"
          // src="assets/images/activity-four/svg/log/Supplier Identification & Sourcing_.svg"
          alt="Our Project One Image 1"
        />
      </div>
      <section className="gap about-key-benefits" style={{ marginTop: '-4%' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-6"></div> */}

            <div className="col-lg-12">
              <div className="data" style={{ marginTop: '' }}>
                {/* <div className="data"> */}
                {/* <h2>Supplier Identification & Sourcing</h2> */}
                {/* <ul data-aos="fade-down"> */}
                <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                  At OMDYS International LLP, we specialize in identifying
                  qualified and reliable suppliers based on your specific needs
                  and current market conditions. Leveraging our extensive
                  network and market knowledge, we ensure that each supplier
                  meets the highest standards of quality and reliability. We
                  conduct detailed supplier audits to assess capabilities,
                  certifications, and ethical practices, ensuring that your
                  business partners with only the best. Our rigorous vetting
                  process includes evaluating suppliers' production capacities,
                  quality control systems, and compliance with industry
                  standards. We place a strong emphasis on ethical practices,
                  ensuring that our suppliers adhere to fair labor practices and
                  environmental regulations. By understanding your unique
                  requirements, we tailor our sourcing strategy to find the most
                  suitable suppliers that align with your business goals.
                  Negotiating competitive prices and favorable terms with
                  suppliers on your behalf is a core part of our service. Our
                  experienced team uses their negotiation skills to secure the
                  best possible deals, helping you save costs and improve
                  profitability. We maintain transparent communication
                  throughout the sourcing process, keeping you informed every
                  step of the way. At OMDYS International LLP, we are committed
                  to building long-term relationships with both our clients and
                  suppliers. Our goal is to create a seamless and efficient
                  supply chain that supports your business growth. Trust us to
                  be your reliable partner in supplier identification and
                  sourcing, ensuring quality, efficiency, and ethical practices
                  in every transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOne;
