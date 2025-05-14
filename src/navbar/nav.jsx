import React from "react";
import "./nav.css"; 

function Navbar(props) {
  return (
    <div className="navbar">
      <button className="btn one">{props.title1}</button>    
      <button className="btn two">{props.title2}</button>
      <button className="btn three">{props.title3}</button>
      <button className="btn four">{props.title4}</button>
    </div>
  );
}

export default Navbar;
