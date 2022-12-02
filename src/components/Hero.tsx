import React from 'react'
import Typed from 'react-typed';
import useSigner from "../hooks/signer";
import AddressAvatar from './Avatar';
import metamaskImg from "../assets/MetaMask_Fox.svg.png";
import TwitterLogo from "../assets/twitter-logo-png.png";
const Hero = () => {
  const { address, loading, connectWallet, disconnectWallet } = useSigner();
  return (
    <div className='text-white bg-[#222222]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-white font-bold p-2'>TOKENIZED CONTENT SHARING PLATFORM</p>
        <h1 className='text-[#F26C4F] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Chinese.org</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Earn tokens by sharing</p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['posts', 'ideas', 'likes']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className='md:text-2xl text-xl font-bold text-gray-500'>Share your creations to increase revenue for ETH, MATIC and other token.</p>
        <div className='flex justify-center w-full'>
          {address && <AddressAvatar address={address}></AddressAvatar>}
          <p className="pl-10 flex h-10 items-center mt-3">token balance: 0</p> 
        </div>
        
        <div className='flex justify-center w-full'>

          <img className="flex w-10 h-10 items-center mt-3" src={metamaskImg} alt=""></img>
          <button className='bg-[#2c2c2c] w-[400px] rounded-md font-medium my-1 py-3 text-[#F26C4F] font-semibold' disabled={loading} onClick={connectWallet}>
            {address ? "Logged In" : loading ? "Connecting..." : "Login with Metamask"}
          </button>
        </div>
        <div className='flex justify-center w-full'>
          {
            <img className="flex h-10 items-center mt-3" src={TwitterLogo} alt=""></img>
          }
          <a href="http://twitter.com/chinese_org">
            <button className='bg-[#2c2c2c] w-[400px] rounded-md font-medium my-1 py-3 text-[#F26C4F]'>
              Follow us on twitter to earn more tokens
            </button>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Hero