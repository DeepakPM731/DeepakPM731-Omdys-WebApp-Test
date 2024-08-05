import React from 'react';
import { useEffect } from 'react';

const Chat = () => {
  // ===================================dialogflow/kommunicate.io=========================
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

  //  ====================================chatbase=================================
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;

    window.embeddedChatbotConfig = {
      chatbotId: '7kNnzIPitqGuv7JjJ0Mb1',
      domain: 'www.chatbase.co',
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // ======================================zoho======================================
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.id = 'zsiqscript';
  //   script.src =
  //     'https://salesiq.zohopublic.in/widget?wc=siqcbc353e50860b75c98fe92ae9e6135acda0401735983037cab82ba061d3247e1';
  //   script.defer = true;

  //   // Initialize Zoho SalesIQ
  //   window.$zoho = window.$zoho || {};
  //   window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

  //   // Append the script to the document body
  //   document.body.appendChild(script);

  //   // Cleanup function to remove the script if the component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return '';
};

export default Chat;
