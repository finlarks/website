import React from 'react';
import './softwares.css';

import { Feature } from '../../components';

import php from '../../assets/php.png';

const softwaresData = [
  {
    title: 'Finlarks Softwares',
    text: "For your modern business, you will need softwares. That's why Finlarks Softwares here for you. Finlarks build high performance modern softwares to saticify your modern enterprises needs. We provide Website services, Mobile Application, Desktop Application, Browser Application services for your schools, collages, hospital, companies and enterprises. Finlarks will be the best destination to create your softwares. Our teams and developers are cheerful to proving service for you.",
  },
  {
    title: 'Websites',
    text: "What do you want static website or dynamic website? All are here. We provide highly attractive and secure websites to your content.",
  },
  {
    title: 'Web Application',
    text: "We have many option for you to choose our web applicaton services. It's stabile, flexible, secure, user-friendly. We bring your dream web apps to you.",
  },
  {
    title: 'Mobile Application',
    text: "Don't care about the platform, we provide you with platform free mobile application. You can get access with both on android and IOS.",
  },
];

const Softwares = () => (
  <div className="softwares section__padding" id="softwares">
    <div className="softwares-heading">
      <h1 className="gradient__text">Build Your Future Buisness With Finlarks Softwares</h1>
      <div className="softwares-image">
        <img src={php} alt="php" />
      </div>
    </div>
    <div className="softwares-container">
      {softwaresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Softwares;