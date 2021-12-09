import React from 'react';
import logo from '../../assets/logo.jpg';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding" id="contactUs">
    <div className="footer-heading">
      <h1 className="gradient__text">Work with Us!</h1>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={logo} alt="logo" />
        <p>Finlarks</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <a href="https://twitter.com/finlarks"><p><i className="fa fa-twitter"/> Twitter</p></a>
        <a href="https://instagram.com/finlarks"><p><i className="fa fa-instagram"/> Instagram</p></a>
        <a href="https://github.com/finlarks"><p><i className="fa fa-github"/> Github</p></a>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Finlarks</p>
        <p>+91 9943506084</p>
        <p>+91 8778395624</p>
        <p>support@finlarks.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2021 finlarks. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;