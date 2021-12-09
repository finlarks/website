import React from 'react';
import './header.css'
import header_pic from '../../assets/header-pic.png';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">We're here for you! We've everything for you! Finlarks</h1>
      <p>We believe that you need the great solutions for your big problems. Finlarks is an Information technology concern that works together to design, develop and deploy your ideas and business. The Security is our first priority. We will provide you with the best services in Software and Cybersecurity. We like to provide you what you want. All of your needs in Information technology will be solved here with highly skilled team of developers. We working with Lean-Agile methodology to provide both continuous delivery and continuous improvement.</p>
    </div>

    <div className="header-image">
      <img src={header_pic} alt="header_pic" />
    </div>
  </div>
);

export default Header;