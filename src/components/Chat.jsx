import React from 'react';
import { useEffect } from 'react';

const Chat = () => {
  // useEffect(() => {
  //   (function (d, m) {
  //     var kommunicateSettings = {
  //       appId: '2406f142ddc754b669ab586f404305d55',
  //       popupWidget: true,
  //       automaticChatOpenOnNavigation: true,
  //     };
  //     var s = document.createElement('script');
  //     s.type = 'text/javascript';
  //     s.async = true;
  //     s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
  //     var h = document.getElementsByTagName('head')[0];
  //     h.appendChild(s);
  //     window.kommunicate = m;
  //     m._globals = kommunicateSettings;

  //     s.onload = function () {
  //       var style = document.createElement('style');
  //       style.innerHTML = `
  //         #kommunicate-widget-iframe {
  //             margin-bottom: -10px !important;

  //           }
  //           @media (max-width: 425px) {
  //           #kommunicate-widget-iframe {
  //             margin-bottom: -2% !important;
  //             margin-right: -20px !important;
  //           }
  //         }
  //       `;
  //       document.head.appendChild(style);
  //     };
  //   })(document, window.kommunicate || {});
  // }, []);
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the attributes of the script
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;

    // Define the embedded chatbot config
    window.embeddedChatbotConfig = {
      chatbotId: '7kNnzIPitqGuv7JjJ0Mb1',
      domain: 'www.chatbase.co',
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up by removing the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return '';
};

export default Chat;
