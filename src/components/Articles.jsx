import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Articles = () => {
  const [data, setData] = useState([]);

  const key = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const apiUrl = `https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=${key}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setData(response.data.articles.splice(0, 3));
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  console.log(data);
  return (
    <>
      <section className="gap no-top blog-style-one">
        <div className="heading">
          <figure>
            <img src="assets/images/heading-icon.png" alt="heading-icon" />
          </figure>
          <span>Let us Help Guide</span>
          <h2>Recent Articles</h2>
        </div>
        <div className="container">
          <div className="row">
            {data.map((news, key) => (
              <>
                <div key={key} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post">
                    <div className="blog-image">
                      <figure>
                        {/* // src="https://winsfolio.net/html/builty/assets/images/blog-img-1.jpg" */}
                        <img
                          // src={news.urlToImage}
                          src={news.image}
                          alt="blog-img-1"
                          onError={(e) => {
                            e.target.src =
                              'https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_640.png';
                          }}
                          width={'400px'}
                          height={'280px'}
                        />
                      </figure>
                      <a href={news.url} target="_blank">
                        <i className="fa-solid fa-angles-right" />
                      </a>
                    </div>
                    <div className="blog-data">
                      <span className="blog-date">{news.publishedAt}</span>
                      {/* <span className="blog-date">January 9, 2022</span> */}
                      <h2>
                        <a href={news.url} target="_blank">
                          {news.title}
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
                            <span>by</span> {news.source.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="common-btn">
            <Link to={'/news'}>
              <a href="javascript:void(0)" className="theme-btn">
                View All Posts <i className="fa-solid fa-angles-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
