import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import { SignerProvider } from './hooks/signer';

function App() {
  return (
    <div>
      <SignerProvider>
        <Navbar />
        <Hero />
        <Footer />
      </SignerProvider>
    </div>
  );
}

export default App;
