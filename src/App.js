import React from 'react';
import Arrived from './components/arrived.js';
import AsideMenu from './components/aside_menu.js';
import Browse from './components/browse.js';
import Client from './components/client.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Hero from './components/hero.js';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <Arrived/>
      <Client/>
      <AsideMenu/>
      <Footer/>
    </>
  );
}

export default App;
