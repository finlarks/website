import React from 'react';
import './cyberSecurity.css'

import { Feature } from '../../components';
import cyberSecurity from '../../assets/cyber-security.png';

const cyberSecurityData = [
  {
    title: 'Finlarks Softwares',
    text: "We provide Security Consultation and Bug Fixes for your Web Applications and Web Servers by analyzing and suggesting Best Security Industry Standards for Preventing Hazardous Attacks for the incesant running of your Indispensable Website and Web Application. We practice Protecting and Preventing your critical systems and sensitive informations from the attackers. The only aim of Finlarks Cybersecurity is to reduce the risk of attacks and prevent your confidential informations from unauthorised exploitation of network and technology. Finlarks Cybersecurity protects all categories of data from theft and damage. This includes Confidential and Sensitive data, Personally Identifiable Information, Protected Health information, Personal information, Intellectual property, Data, and Governmental and Industry Information Systems.",
  }
];

const CyberSecurity = () => (
  <div className="cyberSecurity section__padding" id="cybersecurity">
    <div className="cyberSecurity-heading">
      <h1 className="gradient__text">Finlarks CyberSecurity</h1>
      <div className="cyberSecurity-image">
        <img src={cyberSecurity} alt="cyberSecurity" />
      </div>
    </div>
    <div className="cyberSecurity-container">
      {cyberSecurityData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
      <h1 className="gradient__text">Never compromise your Security</h1>
    </div>
    
  </div>
);

export default CyberSecurity;