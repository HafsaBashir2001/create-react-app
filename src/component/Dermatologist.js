
import ChatWindow from './ChatWindow';
import React, { useState, createContext } from 'react';
import img from './derma.jpg'
import giff from './moving.gif'
export const ChatContext = createContext();



function Dermatologist() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showChat, setShowChat] = useState(true);

  const handleUserMessage = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setTimeout(() => {
      if (inputValue.toLowerCase().includes('acne')) {
        setMessages([...messages, { text: 'Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. There are many treatments available, including topical medications and oral medications.', sender: 'bot' }]);
      } else if (inputValue.toLowerCase().includes('wrinkles')) {
        setMessages([...messages, { text: 'Wrinkles are a natural part of aging, but they can also be caused by sun exposure and other factors. There are many treatments available, including topical creams and cosmetic procedures like Botox and fillers.', sender: 'bot' }]);
      } else {
        setMessages([...messages, { text: "I'm sorry, I don't understand. Can you please rephrase your question?", sender: 'bot' }]);
      }
    }, 500);
    setInputValue(''); // clear the input field after submitting
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 

  const containerStyle = {
    margin: '20px',
    fontFamily: 'Arial, sans-serif',
  };
  
  return (
    <>
     <div style={containerStyle}>
    <img
src={giff}
alt="Hello Future GIF"
style={{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
}}
/>
    <div>
<h2>Skin Queries</h2>
<img src={img} alt="" />
    </div>
    <ChatContext.Provider value={{ showChat, setShowChat }}>
    <div className={`chat-window ${showChat ? 'active' : ''}`}>
      <div className="chat-header">
        <h2>Skin Queries</h2>
        <button onClick={() => setShowChat(!showChat)}>{showChat ? '-' : '+'}</button>      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleUserMessage}>
        <input type="text" placeholder="Ask Your skin issues here" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
    </ChatContext.Provider>

    </div>
    </>
  );
}
export default Dermatologist;



