import React from "react";
import "../Header/header.css";
import logo from "../../img/logo-decoupe.png";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="grid-row">
            <p className="welcome">
              <span>W</span>
              <span>E</span>
              <span>L</span>
              <span>C</span>
              <span>O</span>
              <span>M</span>
              <span>E</span>
            </p>
          </div>
          
          <div className="grid-row logo-row">
            <div className="squareOne"></div>
            <img alt="logo-nutrifruts" src={logo} />
            <div className="squareTwo"></div>
          </div>
          
          <div className="grid-row info-row">
            <p className="info-site">
              Our site provides data on the nutritional value of fruits.<br/>
              You can also chat with online users.
            </p>
          </div>
          
        </div>
      </>
    );
  }
}
export default Header;
