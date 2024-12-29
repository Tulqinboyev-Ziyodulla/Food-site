import React from 'react';
import Header from '../components/header/Header';
// import Footer from '../components/footer/Footer';
import Home from '../home/Home';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
