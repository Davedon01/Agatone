import React, { Children } from 'react'

type VideoBgPrrops = {
  children: React.ReactNode;
};
function VideoBg({ children }: VideoBgPrrops): React.ReactElement {
  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
        <video
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        src="/Agatoneeggsvid.mp4"
        autoPlay
        muted
        loop
        playsInline
        />

      {/* Optional: dark overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

    {/* content in vedeo */}
    <div className='relative z-10'>{ children }</div>
    </div>
  );
};

export default VideoBg