const Articles = () => {
  return (
    <>
      <section className="gap no-top blog-style-one">
        <div className="heading">
          <figure>
            <img
              src="/src/assets/images/heading-icon2.png"
              alt="heading-icon"
            />
          </figure>
          <span>Let us Help Guide</span>
          <h2>Recent Articles</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post">
                <div className="blog-image">
                  <figure>
                    <img
                      src="https://winsfolio.net/html/builty/assets/images/blog-img-1.jpg"
                      alt="blog-img-1"
                    />
                  </figure>
                  <a href="blog-detail.html">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
                <div className="blog-data">
                  <span className="blog-date">January 9, 2022</span>
                  <h2>
                    <a href="blog-detail.html">
                      Differently to build bigger and better
                    </a>
                  </h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img
                          src="	https://winsfolio.net/html/builty/assets/images/blog-img-1.jpg"
                          alt="Blog Author Img"
                        />
                      </figure>
                    </div>
                    <div className="details">
                      <h3>
                        <span>by</span> Jakki James
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post">
                <div className="blog-image">
                  <figure>
                    <img
                      src="https://winsfolio.net/html/builty/assets/images/blog-img-2.jpg"
                      alt="blog-img-2"
                    />
                  </figure>
                  <a href="blog-detail.html">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
                <div className="blog-data">
                  <span className="blog-date">January 9, 2022</span>
                  <h2>
                    <a href="blog-detail.html">
                      Seven Mistakes To Avoid During Construction
                    </a>
                  </h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img
                          src="	https://winsfolio.net/html/builty/assets/images/blog-author-img.jpg"
                          alt="Blog Author Img"
                        />
                      </figure>
                    </div>
                    <div className="details">
                      <h3>
                        <span>by</span> Jakki James
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post">
                <div className="blog-image">
                  <figure>
                    <img
                      src="https://winsfolio.net/html/builty/assets/images/blog-img-3.jpg"
                      alt="blog-img-3"
                    />
                  </figure>
                  <a href="blog-detail.html">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
                <div className="blog-data">
                  <span className="blog-date">January 9, 2022</span>
                  <h2>
                    <a href="blog-detail.html">
                      Build Climate Change-Resilient Infrastructure
                    </a>
                  </h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img
                          src="	https://winsfolio.net/html/builty/assets/images/blog-author-img.jpg
"
                          alt="Blog Author Img 1"
                        />
                      </figure>
                    </div>
                    <div className="details">
                      <h3>
                        <span>by</span> Jakki James
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="common-btn">
            <a href="our-blog-1.html" className="theme-btn">
              View All Posts <i className="fa-solid fa-angles-right" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
