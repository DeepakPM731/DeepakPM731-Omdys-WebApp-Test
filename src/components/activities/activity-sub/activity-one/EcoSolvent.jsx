import React, { useEffect } from 'react';

const EcoSolvent = () => {
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
        <h2>Eco Solvent Inks</h2>
      </div>
      <div
        className="container center justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <img
          className="industry "
          data-aos="fade-up-left"
          style={{ width: '100%', textAlign: 'center', objectFit: 'stretch' }}
          src="assets/images/activity-four/svg/log/Eco Solvent Ink__.svg"
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
                  At OMDYS International LLP, we provide a comprehensive range
                  of eco-solvent inks designed for a wide variety of printing
                  tasks, especially suited for flex and UV hybrid printers. Our
                  eco-solvent inks are environmentally friendly, offering
                  vibrant colors, excellent adhesion, and superior durability on
                  various media types. These inks are sourced from leading
                  manufacturers to ensure consistent quality and outstanding
                  performance for your printing needs.
                  <br />
                  <br />
                  <b>Standard Eco-Solvent Inks:</b> Our selection includes
                  standard eco-solvent inks that are ideal for general-purpose
                  printing. These inks, from reputable brands like Epson,
                  Mimaki, and Roland, offer vibrant colors and sharp detail,
                  ensuring high-quality prints for indoor and outdoor
                  applications. They are perfect for banners, posters, and
                  signage.
                  <br />
                  <br />
                  <b>High-Density Eco-Solvent Inks:</b> We offer high-density
                  eco-solvent inks that provide richer and more intense colors.
                  These inks, from manufacturers like Mutoh and Nazdar, are
                  designed for applications requiring deep blacks and vivid
                  colors, making them ideal for backlit displays, vehicle wraps,
                  and high-impact graphics.
                  <br />
                  <br />
                  <b>Fast-Drying Eco-Solvent Inks:</b> Our inventory includes
                  fast-drying eco-solvent inks that enhance productivity by
                  reducing drying times. These inks, from brands like HP and
                  Seiko, ensure quick turnaround times for printing jobs, making
                  them suitable for high-volume production environments and
                  time-sensitive projects.
                  <br />
                  <br />
                  <b>Scratch-Resistant Eco-Solvent Inks:</b> We supply
                  scratch-resistant eco-solvent inks that offer enhanced
                  durability for prints subjected to rough handling and outdoor
                  exposure. These inks, from manufacturers like Bordeaux and
                  Jetbest, provide long-lasting protection against abrasion,
                  making them ideal for floor graphics, vehicle wraps, and
                  outdoor signage.
                  <br />
                  <br />
                  <b>UV-Resistant Eco-Solvent Inks:</b> Our selection includes
                  UV-resistant eco-solvent inks that ensure color stability and
                  longevity under direct sunlight. These inks, from brands like
                  FujiFilm and Agfa, are perfect for outdoor advertising,
                  billboards, and other applications exposed to harsh weather
                  conditions.
                  <br />
                  <br />
                  <b>White Eco-Solvent Inks:</b> We provide white eco-solvent
                  inks for creating vibrant, opaque white prints on dark or
                  transparent substrates. These inks, from manufacturers like
                  Mimaki and Roland, enable stunning white details and
                  highlights, ideal for window graphics, clear labels, and
                  specialty printing.
                  <br />
                  <br />
                  <b>Metallic Eco-Solvent Inks:</b> Our inventory includes
                  metallic eco-solvent inks that add a shimmering, metallic
                  finish to prints. These inks, from brands like Epson and
                  Roland, are perfect for creating eye-catching graphics,
                  decorative elements, and premium packaging with metallic
                  effects.
                  <br />
                  <br />
                  <b>Light Eco-Solvent Inks:</b> We offer light eco-solvent
                  inks, including light cyan and light magenta, for smoother
                  gradients and subtle color transitions. These inks, from
                  manufacturers like Epson and HP, ensure high-quality
                  photographic prints, fine art reproductions, and detailed
                  graphic designs.
                  <br />
                  <br />
                  <b>Specialty Eco-Solvent Inks:</b> Our selection includes
                  specialty eco-solvent inks, such as neon and fluorescent inks,
                  for unique and striking visual effects. These inks, from
                  brands like Mimaki and Nazdar, are ideal for creating
                  attention-grabbing prints for events, retail displays, and
                  promotional materials.
                  <br />
                  <br />
                  <b>Compatible Eco-Solvent Inks:</b> We supply compatible
                  eco-solvent inks designed to work seamlessly with various
                  printer models. These inks, from manufacturers like InkTec and
                  STS Inks, offer cost-effective solutions without compromising
                  on quality, ensuring reliable performance and vibrant prints.
                  <br />
                  <br />
                  At OMDYS International LLP, we are committed to providing
                  high-quality eco-solvent inks that meet the rigorous demands
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

export default EcoSolvent;
