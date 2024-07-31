import React, { useEffect } from 'react';

const Solvent = () => {
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
        <h2>Solvent Based Inks</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center', marginTop: '-3%' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/Eco+Solvent+Ink__.svg"
          // src="assets/images/activity-four/svg/log/Eco Solvent Ink__.svg"
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
                  At OMDYS International LLP, we offer a comprehensive range of
                  solvent-based inks tailored for flex and UV hybrid printers.
                  Our solvent-based inks are ideal for outdoor applications,
                  providing exceptional durability and resistance to various
                  environmental conditions such as UV exposure, moisture, and
                  abrasions. Sourced from leading manufacturers, our inks ensure
                  vibrant colors, excellent adhesion, and long-lasting
                  performance for your printing needs.
                  <br />
                  <br />
                  <b>Standard Solvent-Based Inks:</b> Our selection includes
                  standard solvent-based inks designed for general-purpose
                  outdoor printing. These inks, from reputable brands like
                  Mimaki, Roland, and Mutoh, offer vibrant colors and strong
                  adhesion to a variety of substrates including vinyl, banners,
                  and adhesive films. They are perfect for creating durable
                  outdoor signage, billboards, and posters.
                  <br />
                  <br />
                  <b>High-Durability Solvent-Based Inks:</b> We provide
                  high-durability solvent-based inks that offer enhanced
                  resistance to harsh weather conditions. These inks, from
                  manufacturers like Epson, HP, and Seiko, are formulated to
                  withstand prolonged exposure to sunlight, rain, and wind,
                  making them ideal for vehicle graphics, outdoor advertising,
                  and industrial labeling.
                  <br />
                  <br />
                  <b>Fast-Drying Solvent-Based Inks:</b> Our inventory includes
                  fast-drying solvent-based inks that enhance productivity by
                  reducing drying times. These inks, from brands like Mimaki,
                  Roland, and Agfa, ensure quick turnaround times for
                  high-volume printing jobs, making them suitable for busy
                  production environments and time-sensitive projects.
                  <br />
                  <br />
                  <b>Scratch-Resistant Solvent-Based Inks:</b> We supply
                  scratch-resistant solvent-based inks that offer superior
                  durability for prints subjected to rough handling and
                  abrasion. These inks, from manufacturers like Mimaki, Mutoh,
                  and Bordeaux, provide long-lasting protection, making them
                  perfect for floor graphics, vehicle wraps, and outdoor
                  displays.
                  <br />
                  <br />
                  <b>UV-Resistant Solvent-Based Inks:</b> Our selection includes
                  UV-resistant solvent-based inks that ensure color stability
                  and longevity under direct sunlight. These inks, from brands
                  like Epson, Roland, and Agfa, are ideal for outdoor
                  advertising, billboards, and other applications exposed to
                  intense UV radiation.
                  <br />
                  <br />
                  <b>Eco-Solvent-Based Inks:</b> We offer eco-solvent-based inks
                  that provide the benefits of traditional solvent inks with
                  lower environmental impact. These inks, from manufacturers
                  like Epson, Mutoh, and Roland, offer reduced volatile organic
                  compound (VOC) emissions, making them a more environmentally
                  friendly choice for outdoor graphics, banners, and posters.
                  <br />
                  <br />
                  <b>Metallic Solvent-Based Inks:</b> Our inventory includes
                  metallic solvent-based inks that add a shimmering, metallic
                  finish to prints. These inks, from brands like Mimaki and
                  Roland, are perfect for creating eye-catching graphics,
                  decorative elements, and premium packaging with metallic
                  effects.
                  <br />
                  <br />
                  <b>White Solvent-Based Inks:</b> We provide white
                  solvent-based inks for creating vibrant, opaque white prints
                  on dark or transparent substrates. These inks, from
                  manufacturers like Mimaki and Roland, enable stunning white
                  details and highlights, ideal for window graphics, clear
                  labels, and specialty printing.
                  <br />
                  <br />
                  <b>Neon and Fluorescent Solvent-Based Inks:</b> Our selection
                  includes neon and fluorescent solvent-based inks that produce
                  bright, vivid colors for high-visibility graphics. These inks,
                  from brands like Mimaki and Roland, are perfect for creating
                  attention-grabbing signage, promotional materials, and event
                  graphics.
                  <br />
                  <br />
                  <b>Specialty Solvent-Based Inks:</b> We offer specialty
                  solvent-based inks, including those designed for specific
                  applications such as textile printing and industrial marking.
                  These inks, from manufacturers like Epson and Roland, ensure
                  high performance and durability tailored to specialized
                  printing needs.
                  <br />
                  <br />
                  <b>Low-Odor Solvent-Based Inks:</b> Our inventory includes
                  low-odor solvent-based inks that ensure a more comfortable
                  working environment, especially in indoor production
                  facilities. These inks, from brands like Mimaki and Roland,
                  are ideal for applications where low odor is crucial, such as
                  packaging, labels, and indoor graphics.
                  <br />
                  <br />
                  <b>Multi-Purpose Solvent-Based Inks:</b> We supply
                  multi-purpose solvent-based inks that can be used on a wide
                  range of substrates, offering versatility and efficiency.
                  These inks, from manufacturers like Mimaki and Mutoh, ensure
                  consistent performance across different materials, making them
                  ideal for mixed media projects.
                  <br />
                  <br />
                  At OMDYS International LLP, we are committed to providing
                  high-quality solvent-based inks that meet the rigorous demands
                  of our clients. Our extensive network and expertise in
                  sourcing ensure that you receive the best products for your
                  specific applications, enhancing the performance and
                  reliability of your printing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solvent;
