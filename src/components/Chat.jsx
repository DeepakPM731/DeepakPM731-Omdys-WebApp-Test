import React, { useState } from 'react';
import { useEffect } from 'react';
import './chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const key = import.meta.env.VITE_CHATBOT_KEY;
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      const iframe = document.querySelector('iframe');
      iframe.addEventListener('load', function () {
        iframe.contentWindow.document.body.innerHTML =
          iframe.contentWindow.document.body.innerHTML.replace(
            /(https:\/\/[^\s]+)/g,
            '<a href="$1" target="_blank">$1</a>'
          );
      });
    });
  }, []);
  return (
    <div className="chatbot-container">
      <div className={`chatbot-iframe ${isOpen ? 'open' : ''}`}>
        <iframe
          allow="microphone;"
          height="530"
          // height="430"
          width="350"
          src={key}
          title="Chatbot"
          style={{
            border: '1px solid black',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        ></iframe>
        <button className="chatbot-close-button" onClick={toggleChatbot}>
          X
        </button>
      </div>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Activities+Sub/bot+image.jpg"
          // src="https://icon-library.com/images/chatbot-icon/chatbot-icon-12.jpg"
          alt="Chatbot Icon"
          style={{ borderRadius: '60%' }}
        />
      </div>
    </div>
  );
};

export default Chat;
