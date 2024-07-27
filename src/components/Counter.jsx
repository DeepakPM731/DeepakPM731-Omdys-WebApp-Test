import AOS from 'aos';
import { useEffect } from 'react';
import $ from 'jquery';
const Counter = () => {
  useEffect(() => {
    AOS.init({
      // AOS configuration options

      offset: 120,
      delay: 0,
      easing: 'ease',
      duration: 400,
      disable: false,
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      initClassName: 'aos-init',
      useClassNames: false,
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
    });

    // Cleanup AOS when component unmounts
    return () => {
      AOS.refreshHard();
    };
  }, []);
  useEffect(() => {
    const checkIfInView = () => {
      $('.odometer').each(function () {
        const $this = $(this);
        const elementTop = $this.offset().top;
        const elementBottom = elementTop + $this.outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          if ($this.data('status') === 'yes') {
            var delayTime = 200; // Delay time in milliseconds
            $this.css('opacity', '0.1'); // Set initial opacity to 0
            setTimeout(function () {
              // Fade in with animation
              $this.html($this.data('count')).animate({ opacity: 1 }, 'slow');
            }, delayTime);
            $this.data('status', 'no');
          }
        }
      });
    };

    $(document).on('scroll', checkIfInView);
    checkIfInView(); // Initial check in case the element is already in view

    // Cleanup the scroll event listener on component unmount
    return () => {
      $(document).off('scroll', checkIfInView);
    };
  }, []);

  return (
    <>
      <section className="gap no-top counter-style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="counter-data">
                <div className="counttt">
                  <span className="odometer" data-count={9} data-status="yes">
                    0
                  </span>
                  <i>+ Years</i>
                </div>
                {/* <h4>Professional experience</h4> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="counter-data upper-space">
                <div className="counttt">
                  <span className="odometer" data-count={70} data-status="yes">
                    0
                  </span>
                  <i>
                    <span>+ OEM Partners</span>
                  </i>
                </div>
                {/* <h4>Tie Up</h4> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="counter-data">
                <div className="counttt">
                  <span className="odometer" data-count={500} data-status="yes">
                    0
                  </span>
                  <i>
                    <nobr>+ &nbsp;Products</nobr>
                  </i>
                </div>
                {/* <h4>Products</h4> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
