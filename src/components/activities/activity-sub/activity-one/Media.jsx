import React, { useEffect } from 'react';

const Media = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let elements = document.querySelectorAll('[data-aos]');
    for (let i = 0; i < elements.length; i++) {
      //if ios remove the attribute
      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        elements[i].removeAttribute('data-aos');
      }
    }
  });
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
                <h2 style={{ textAlign: 'center' }}>Printing Solutions</h2>
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
        <h2>Media Supplies</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center', marginTop: '-3%' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Printing Media__.svg"
          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
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
                  At OMDYS International LLP, we provide a wide selection of
                  high-quality media for flex printing and UV printing. Our
                  diverse range of media options ensures that you can achieve
                  the best results for your projects, balancing price and
                  quality effectively.
                  <br />
                  <br />
                  <h4>Flex Printing Media</h4>
                  <br />
                  <b>Vinyl Banners:</b>
                  <br />
                  <b>Advantages:</b> Vinyl banners are known for their
                  durability and ability to withstand various weather
                  conditions, making them ideal for outdoor advertising. They
                  offer excellent color vibrancy and sharpness in print.
                  <br />
                  <b>Price:</b> Vinyl banners are cost-effective, providing an
                  economical solution for large-scale advertising campaigns.
                  <br />
                  <br />
                  <b>Mesh Banners:</b>
                  <br />
                  <b>Advantages:</b> Mesh banners are lightweight and designed
                  to allow wind to pass through, reducing the risk of tearing.
                  They are perfect for large outdoor displays, building wraps,
                  and fence advertisements.
                  <br />
                  <b>Price:</b> Mesh banners are competitively priced, offering
                  a good balance between cost and durability.
                  <br />
                  <br />
                  <b>Backlit Flex:</b>
                  <br />
                  <b>Advantages:</b> Backlit flex media is designed for
                  illuminated displays, offering vibrant and high-contrast
                  images when backlit. This media is ideal for lightbox signs
                  and displays that require visibility at night.
                  <br />
                  <b>Price:</b> Although slightly more expensive than standard
                  vinyl, backlit flex provides enhanced visual impact and
                  visibility.
                  <br />
                  <br />
                  <b>Frontlit Flex:</b>
                  <br />
                  <b>Advantages:</b> Frontlit flex is suited for front lighting
                  applications, delivering excellent print quality and
                  durability. It is commonly used for billboards, hoardings, and
                  various banner applications.
                  <br />
                  <b>Price:</b> Frontlit flex is economical, making it a popular
                  choice for a wide range of advertising and promotional needs.
                  <br />
                  <br />
                  <b>Canvas:</b>
                  <br />
                  <b>Advantages:</b> Canvas media is ideal for high-quality
                  indoor prints, such as art reproductions and photo prints. It
                  offers a premium texture and excellent color reproduction for
                  a more artistic finish.
                  <br />
                  <b>Price:</b> Canvas is priced higher than standard flex media
                  but provides a superior, luxurious finish for high-end
                  projects.
                  <br />
                  <br />
                  <br />
                  <h4>UV Printing Media</h4>
                  <br />
                  <b>Acrylic Sheets:</b>
                  <br />
                  <b>Advantages:</b> Acrylic sheets are durable and provide a
                  glossy finish, making them suitable for signage, displays, and
                  decorative panels. They offer excellent print clarity and
                  color vibrancy.
                  <br />
                  <b>Price:</b> Acrylic sheets are moderately priced, offering a
                  balance between cost and premium quality.
                  <br />
                  <br />
                  <b>Foam Boards:</b>
                  <br />
                  <b>Advantages:</b> Foam boards are lightweight and easy to
                  handle, making them ideal for indoor signage, exhibition
                  graphics, and point-of-sale displays. They provide a smooth
                  surface for high-quality prints.
                  <br />
                  <b>Price:</b> Foam boards are affordable, providing a
                  cost-effective solution for temporary and short-term displays.
                  <br />
                  <br />
                  <b>PVC Boards:</b>
                  <br />
                  <b>Advantages:</b> PVC boards are durable and
                  weather-resistant, suitable for both indoor and outdoor
                  applications. They offer excellent print quality and are
                  widely used for signage and promotional graphics.
                  <br />
                  <b>Price:</b> PVC boards are cost-effective, offering good
                  durability and quality at a reasonable price.
                  <br />
                  <br />
                  <b>Glass:</b>
                  <br />
                  <b>Advantages:</b> Glass media provides a sleek, modern look
                  with high-definition print quality and vibrant colors. It is
                  ideal for decorative panels, interior design, and
                  architectural applications.
                  <br />
                  <b>Price:</b> Glass is priced higher but offers a premium
                  finish and long-lasting durability for high-end projects.
                  <br />
                  <br />
                  <b>Metal Sheets:</b>
                  <br />
                  <b>Advantages:</b> Metal sheets, such as aluminum and steel,
                  offer exceptional durability and a contemporary aesthetic.
                  They are perfect for industrial signage, nameplates, and
                  outdoor displays.
                  <br />
                  <b>Price:</b> Metal sheets are more expensive but provide
                  superior strength and a high-quality appearance.
                  <br />
                  <br />
                  <b>Corrugated Plastic:</b>
                  <br />
                  <b>Advantages:</b> Corrugated plastic is lightweight,
                  weather-resistant, and cost-effective, making it suitable for
                  temporary signage, election boards, and promotional displays.
                  <br />
                  <b>Price:</b> Corrugated plastic is very affordable, offering
                  a popular choice for budget-conscious projects.
                  <br />
                  <br />
                  <br />
                  <h4>Advantages of Media for Flex and UV Printing</h4>
                  <br />
                  <b>Price-Wise Advantages:</b> The available media options
                  cater to different budget requirements. From economical
                  solutions like vinyl banners and foam boards to premium
                  options like canvas and glass, there is a media type to suit
                  every price point.
                  <br />
                  <br />
                  <b>Quality-Wise Advantages:</b> Media suppliers provide
                  high-quality materials that meet industry standards. Whether
                  you need durable outdoor media or premium indoor displays, the
                  options ensure excellent print quality, vibrant colors, and
                  long-lasting performance.
                  <br />
                  <br />
                  At OMDYS International LLP, we are committed to offering the
                  best media for your flex and UV printing needs. Our extensive
                  selection ensures that you receive high-quality,
                  cost-effective solutions tailored to your specific
                  requirements, enhancing the effectiveness and visual impact of
                  your printing projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
