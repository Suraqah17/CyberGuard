import React from 'react';
import './regcomp.css'; // Import your CSS file for styling
import img1 from 'C:/Users/sudee/Desktop/PBL2/cyberguard/src/assets/reg1.png';
import img2 from 'C:/Users/sudee/Desktop/PBL2/cyberguard/src/assets/reg2.png';
import img3 from 'C:/Users/sudee/Desktop/PBL2/cyberguard/src/assets/reg3.png';


const Regcomp = () => {
  return (
      <div className="comp-content">
        <h1>Register a Complaint</h1>
        <div className="rect-container">
          <div className="rect rect1">
            <img src={img1} alt="Image 1" />
            <h2>FINANCIAL<br/>FRAUD</h2>
            <button>Register a Complaint</button>
          </div>
          <div className="rect rect2">
            <img src={img2} alt="Image 2" />
            <h2>WOMEN/CHILDREN RELATED CRIME</h2>
            <button>Register a Complaint</button>
          </div>
          <div className="rect rect3">
            <img src={img3} alt="Image 3" />
            <h2>OTHER<br/>CYBERCRIMES</h2>
            <button>Register a Complaint</button>
          </div>
        </div>
      </div>
  );
};

export default Regcomp;
