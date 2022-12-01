import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className='text-white bg-[#222222]'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#F26C4F] font-bold p-2'>TOKENIZED CONTENT SHARING PLATFORM</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Chinese.org</h1>
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
            <button className='bg-[#F26C4F] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Login with Metamask</button>
        </div>
    </div>  
  )
}

export default Hero