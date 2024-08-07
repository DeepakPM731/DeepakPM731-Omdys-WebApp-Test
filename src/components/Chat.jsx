import React, { useState } from 'react';
import { useEffect } from 'react';
import './chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-iframe ${isOpen ? 'open' : ''}`}>
        <iframe
          height="530"
          // height="430"
          width="350"
          src="https://console.dialogflow.com/api-client/demo/embedded/63ace6e7-bafb-4523-b532-43d1e76968d4"
          title="Chatbot"
          style={{
            border: '1px solid black',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          // style={{
          //   border: '2px solid #007bff', // Add a custom border color
          //   borderRadius: '10px', // Add rounded corners
          //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow
          // }}
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
