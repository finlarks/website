import React from 'react';
import './aboutUs.css'
import { Feature } from '../../components';

const AboutUs = () => (
  <div className="aboutus section__margin" id="aboutus">
    <div className="aboutus-feature">
      <Feature title="About Us" text="We believe that you need the great solutions for your big problems. Finlarks is an Information technology concern that works together to design, develop and deploy your ideas and business. The Security is our first priority. We will provide you with the best services in Software and Cybersecurity. We like to provide you what you want. All of your needs in Information technology will be solved here with highly skilled team of developers. We working with Lean-Agile methodology to provide both continuous delivery and continuous improvement." />
    </div>
    <div className="aboutus-heading">
      <h1 className="gradient__text">We provide you beyond your expectations</h1>
    </div>
    <div className="aboutus-container">
      <Feature title="Softwares" text="We are dedicated to the process of creating, designing, deploying and supporting your ideas."/>
      <Feature title="CyberSecurity" text="We give Cyber Security that encompasses all the technical and procedural safeguards to keep devices, computer systems, and sensitive information safe." />
      <Feature title="IoT" text="We provide services as physical mechanics embedded with sensors, actuators connected with the internet and data in the cloud." />
    </div>
  </div>
);

export default AboutUs;