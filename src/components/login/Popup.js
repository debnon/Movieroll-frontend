import React from 'react';
import './Popup.css';

const Popup = () => {
    const popup = document.querySelector('.popup');
    console.log("yo"); 
    function showPopup() {
        console.log("yo");  
         popup.classNameList.add('open');
    }
    function hidePopup() {
        console.log("no");    
        popup.classNameList.remove('open');
    }

    
    return (
        <>
        <button onClick={showPopup}>
        Open Popup
      </button>
      <div className="popup">
        <div className="blocker" onClick={hidePopup}></div>
        <div className="contents">
          This is popup
        </div>
      </div>
      </>
    )
}

export default Popup;