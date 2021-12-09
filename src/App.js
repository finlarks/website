import React from 'react';
import './App.css';

import { Blogs, Navbar } from './components';
import { Softwares, CyberSecurity, Header, Footer, AboutUs } from './containers';

const App = () => {
  return(
    <div className="App">
    <div className="gradient__bg">
    <Navbar />
    <Header />
    <AboutUs />
    <Softwares />
    <CyberSecurity />
    <Blogs />
    <Footer />
    </div>
    </div>
  );
};

export default App;
