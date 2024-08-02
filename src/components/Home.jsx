import { useEffect, useState } from 'react';

import About from './about/About';
import Articles from './Articles';
import Clients from './Clients';
import Contact from './Contact';
import Counter from './Counter';
import Features from './Features';
import Projects from './Projects';
import Slider from './Slider';
import Team from './Team';
import Vision from './Vision';
import Review from './Review';
import Testimonials from './Testimonials';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Loader from './Loader';
import Chat from './Chat';
// import { useEffect, useState } from 'react';
// import Loader from './Loader';
const Home = () => {
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
      });
    }, 300); // Delay initialization
    const currentTime = new Date().getTime();
    sessionStorage.setItem('entryTime', currentTime.toString());

    const checkChatVisibility = () => {
      const storedTime = parseInt(sessionStorage.getItem('entryTime'), 10);
      const currentTime = new Date().getTime();
      const timeDifference = (currentTime - storedTime) / 1000; // Convert to seconds

      if (timeDifference >= 10) {
        setShowChat(true);
      } else {
        setTimeout(() => {
          setShowChat(true);
        }, (10 - timeDifference) * 1000);
      }
    };

    checkChatVisibility();
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Slider />
      <Vision />
      <About />
      <Counter />
      <Projects />
      {/* <Team /> */}
      <Features />
      {/* <Clients /> */}
      <Contact />
      {/* <Review /> */}
      <Testimonials />
      <Articles />

      <button
        id="scrollTop"
        className="scrollTopStick"
        onClick={handleScrollTop}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Home;
