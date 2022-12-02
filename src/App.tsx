import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import { SignerProvider } from './hooks/signer';
import Timeline from './components/Timeline';
function App() {
  return (
    <div>
      <SignerProvider>
        <Navbar />
        <Hero />
        <Timeline />
        <Footer />
      </SignerProvider>
    </div>
  );
}

export default App;
