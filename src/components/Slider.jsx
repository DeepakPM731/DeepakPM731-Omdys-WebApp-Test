const Slider = () => {
  return (
    <>
      <section className="featured-slider-one" style={{ background: 'grey' }}>
        <div className="containe">
          <div className="ro f-slider-one owl-carousel">
            <div className="f-slider-layer">
              <img
                style={{ objectFit: 'cover', width: '2769px' }}
                src="https://s3.ap-south-1.amazonaws.com/omdys.com/Untitled+design.svg"
                // src="https://res.cloudinary.com/dww9vwyaq/image/upload/v1709195420/OMDYS/xcylq23mdvlonicgtv8g.svg"
                // src="assets/svg/Untitled design.svg"
                // src="https://winsfolio.net/html/builty/assets/images/f-slider-one-1.jpg"
                alt="Slider 1"
              />
              <div className="f-slider-one-data">
                <h1>
                  {' '}
                  Let&apos;s find your perfect product, anywhere in the world
                </h1>
                <p>
                  With our extensive network of suppliers, we can source
                  anything you need.
                </p>
                <a
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="theme-btn"
                >
                  Browse More About Us{' '}
                  <i className="fa-solid fa-angles-right" />
                </a>
              </div>
            </div>
            <div className="f-slider-layer">
              <img
                // src="https://winsfolio.net/html/builty/assets/images/f-slider-one-1.jpg"
                src="https://s3.ap-south-1.amazonaws.com/omdys.com/f-slider-one-1.jpg"
                alt="Project Img"
              />
              <div className="f-slider-one-data">
                <h1>
                  {' '}
                  Let&apos;s find your perfect product, anywhere in the world
                </h1>
                <p>
                  With our extensive network of suppliers, we can source
                  anything you need.
                </p>
                <a
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  className="theme-btn"
                >
                  Estimate Price <i className="fa-solid fa-angles-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
