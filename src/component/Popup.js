import React, { useState } from 'react';
function PopupComponent() {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    // Set a cookie or update user preferences to indicate they have accepted the terms and conditions
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h2>Disclaimer</h2>
            <p>We do not use your image or share it with any third parties. Your image is privately saved in our system and used only for the purpose of skin analysis.</p>
            <button onClick={handleAccept}>Accept</button>
          </div>
        </div>
      )}
      {/* Render the rest of your app here */}
    </>
  );
}
export default PopupComponent