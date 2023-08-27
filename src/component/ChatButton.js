import React, { useState } from 'react';
import { FaCommentMedical } from 'react-icons/fa';
import ChatWindow from './ChatWindow';
import './Styles/ChatButton.css';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <div className="chat-button" onClick={handleChatClick}>
        <FaCommentMedical className="chat-icon" />
      </div>
      {isChatOpen && <ChatWindow />}
    </div>
  );
};

export default ChatButton;
