import React from 'react'
import VideoBg from '../Component/VideoBg';
import logo from '../assets/Agatone-logo-removebg-preview.png';
import Button from '../Component/Button';

function Home(): React.ReactElement {
  return (
   <main>
     <VideoBg>
      <div className='bg-black/10 backdrop-blur-md w-110 h-124 mt-2 ml-16 mb-3 shadow-sm'>
        <div>
          <img
           src={ logo }
            alt=""
            className='w-24 sm:w-32 md:w-40 h-auto mx-auto' 
            />
        </div>
        <div className='text-white text-center'>
          <h1 className='mb-5 text-3xl'>Commercial Egg production</h1>
          <p className='mb-5 text-3xl'>WE PRIORITIZE OUR CUSTOMER'S CHALLENGE</p>
          <p className='mt-5 mb-5 text-2xl'>We provide Tailored business Solutions to fit their needs.</p>
          <Button />
        </div>
      </div>
    </VideoBg>
    <div className='relative w-full min-h-[500px]'>
     <div className='absolute text-center inset-0 z-10'>
      <h1 className='pt-18'>WELCOME TO AGATONE FARMS</h1>
     <div className='flex items-center justify-center space-x-1 pt-5'>
      {/* Three dots */}
      <span className='w-2 h-2 bg-green-700 rounded-full'></span>
      <span className='w-2 h-2 bg-green-700 rounded-full'></span>
      <span className='w-2 h-2 bg-green-700 rounded-full'></span>
      {/* Horizontal line */}
      <div className='w-20 h-1 bg-green-700 rounded-full ml-2'></div>
     </div>
     {/* Content */}
     <p className='p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia inventore praesentium harum architecto consectetur autem minus aliquam consequatur, dolor perferendis, laudantium labore similique tempore neque soluta, a assumenda sint!</p>
     </div>
      {/* svg background */}
         <svg
          className='absolute top-0 left-0 w-full h-full z-0' 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320">
            <path 
            fill="#f3f4f5" 
            fill-opacity="1" 
            d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,240C1120,267,1280,277,1360,282.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
              </path>
              </svg>
    </div>
    <div className='bg-rose-400'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex quas, accusantium optio ad quo vero veniam nulla, doloribus earum nihil odit nemo, officia fugit repellat explicabo hic ducimus dolores.</p>
          </div>
    {/* Svg path */}
    <div>
    
    </div>
   </main>
  );
};

export default Home