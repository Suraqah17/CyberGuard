import React from 'react';
import './procedure.css'; // Assuming your CSS file is named styles.css
import image1 from 'C:/Users/sudee/Desktop/PBL2/cyberguard/src/assets/stage1.png'; // Import images using relative paths
import image2 from 'C:/Users/sudee/Desktop/PBL2/cyberguard/src/assets/stage2.png';
import image3 from 'C:/Users/sudee/Desktop/PBL2/cyberguard/src/assets/stage3.png';
import arrowleft from 'C:/Users/sudee/Desktop/PBL2/cyberguard/src/assets/arrowleft.png';

function HowItWorks() {
  return (
    <div className="container">
      <h1>HOW IT WORKS?</h1>
      <div className="image-row">
        <div className="image-wrapper">
          <img src={image1} alt="Stage 1 Description" width={200} height={200} />
          <h3>Share Incident Details</h3>
          <p>Report a scam, a company, or an unwanted call.</p>
          <div className="arrow">
            <img src={arrowleft} alt="Arrow" />
          </div>
        </div>
        <div className="image-wrapper">
          <img src={image2} alt="Stage 2 Description" width={240} height={200} />
          <h3>Know your next actions</h3>
          <p>Learn how to safeguard yourself.</p>
          <div className="arrow">
            <img src={arrowleft} alt="Arrow" />
          </div>
        </div>
        <div className="image-wrapper">
          <img src={image3} alt="Stage 3 Description" width={200} height={200} />
          <h3>Join the fight against fraud</h3>
          <p>Your reports are shared with law enforcement partners to support investigations.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
