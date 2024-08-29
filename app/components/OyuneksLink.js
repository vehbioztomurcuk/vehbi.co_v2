import React from 'react';
import localFont from 'next/font/local';

const neufreitExtraBold = localFont({
  src: '../../public/fonts/Neufreit-Regular.ttf',
  variable: '--font-neufreit-extrabold',
});

const OyuneksLink = () => {
  return (
    <a
      href="https://oyuneks.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${neufreitExtraBold.variable} 
        font-neufreit-extrabold 
          text-base
        relative 
        inline-flex
        items-center
        overflow-hidden 
        group 
        transition-colors 
        duration-300 
        ease-in-out 
        hover:text-white
      `}
      style={{
        textShadow: `

        `,
      }}
    >
      <span className="relative z-10">@oyuneks</span>
      <span className="
        absolute 
        bottom-0 
        left-0 
        w-full 
        h-0.5 
        bg-gradient-to-r 
        from-purple-500 
        via-pink-500 
        to-red-500 
        transform 
        origin-left 
        scale-x-0 
        transition-transform 
        duration-300 
        ease-out 
        group-hover:scale-x-100
      "></span>
      <span className="
        absolute 
        inset-0 
        bg-gradient-to-r 
        from-purple-500 
        via-pink-500 
        to-red-500 
        transform 
        origin-left 
        scale-x-0 
        transition-transform 
        duration-300 
        ease-out 
        group-hover:scale-x-100
      "></span>
    </a>
  );
};

export default OyuneksLink;