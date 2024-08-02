import React from 'react';
import { useEffect } from 'react';

const Chat = () => {
  //   useEffect(() => {
  //     (function (d, m) {
  //       var kommunicateSettings = {
  //         appId: '2406f142ddc754b669ab586f404305d55',
  //         popupWidget: true,
  //         automaticChatOpenOnNavigation: true,
  //       };
  //       var s = document.createElement('script');
  //       s.type = 'text/javascript';
  //       s.async = true;
  //       s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
  //       var h = document.getElementsByTagName('head')[0];
  //       h.appendChild(s);
  //       window.kommunicate = m;
  //       m._globals = kommunicateSettings;
  //     })(document, window.kommunicate || {});
  //     /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  //   }, []);
    useEffect(() => {
      (function (d, m) {
        var kommunicateSettings = {
          appId: '2406f142ddc754b669ab586f404305d55',
          popupWidget: true,
          automaticChatOpenOnNavigation: true,
        };
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
        var h = document.getElementsByTagName('head')[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;

        s.onload = function () {
          var style = document.createElement('style');
          style.innerHTML = `
            #kommunicate-widget-iframe {
                margin-bottom: -10px !important;

              }
              @media (max-width: 425px) {
              #kommunicate-widget-iframe {
                margin-bottom: -2% !important;
                margin-right: -20px !important;
              }
            }
          `;
          document.head.appendChild(style);
        };
      })(document, window.kommunicate || {});
    }, []);



  return '';
};

export default Chat;
